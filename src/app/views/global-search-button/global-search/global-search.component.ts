import {
  Component,
  ElementRef,
  HostListener,
  Input,
  OnDestroy,
  OnInit,
  ViewChild
} from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { fadeAnimation } from '../../animations/fade-animations';
import { ResultType } from '../../models/result-type.enum';
import { NotificationSearchResultModel } from '../../models/notification-search-result.model';
import { DashboardAppViewSearchResultModel } from '../../models/dashboard-appview-search-result.model';
import { DashboardSearchResultModel } from '../../models/dashboard-search.result.model';
import { AppViewSearchResultModel } from '../../models/appview-search-result.model';
import { WebAppSearchResultModel } from '../../models/webapp-search-result.model';
import { PageSearchResultModel } from '../../models/page-search-result.model';
import { IGlobalSearchResult } from '../../models/global-search-result.interface';
import { GlobalSearchToggleService } from '../../services/global-search.toggler.service';
import { combineLatest, forkJoin, from, Observable, of, Subject } from 'rxjs';
import { catchError, debounceTime, map, switchMap, takeUntil, takeWhile } from 'rxjs/operators';
import { UserRightsService } from '../../../main/services/user-rights/user-rights.service';
import { ApplicationsService } from '../../../applications/services/applications/applications.service';
import {
  ActiveDashboardModel,
  AppViewsClient,
  DashboardDetailItemModel,
  DashboardDetailModel,
  DashboardsClient,
  PaginatedResultOfWebAppViewModel,
  WebAppViewModel,
  UserAppViewModel,
  PagesClient,
  ActivePageModel
} from '@shared-local/clients/workspaces-api';
import { NavigationStart, Router } from '@angular/router';
import { InboxApiService } from '../../../inbox/services/inbox-api/inbox-api.service';
import { NotificationModel } from 'src/app/modules/inbox/models/notification.model';
import { LOGO_PORTAL_DARK } from 'src/app/utils/constants';
import { ImageService } from 'src/app/modules/shared/services/image-service/image.service';
import { UrlResolverService } from 'src/app/modules/shared/services/url-resolver/url-resolver.service';

@Component({
  selector: 'global-search',
  templateUrl: './global-search.component.html',
  animations: [fadeAnimation],
  styleUrls: ['./global-search.component.scss']
})
export class GlobalSearchComponent implements OnDestroy, OnInit, OnDestroy {
  toggleSubscription: Subscription;
  private _isEnabled: boolean = false;
  isVisible: boolean = false;
  value: string = '';
  public searchTerm: string = '';
  private contextId: string = '';
  private minInputLength: number = 1;
  modal: IGlobalSearchResult;
  public globalSearchResultList: Array<IGlobalSearchResult> = null;
  public loading: boolean = false;
  public modelChanged: Subject<string> = new Subject<string>();
  public applicationType: typeof ResultType = ResultType;
  private onDestroy$: Subject<void> = new Subject<void>();
  private stopSearch: boolean = false;
  public noItemImagePrefixPath: string;
  @ViewChild('searchField', { static: true })
  searchField: ElementRef;

  logoUrl: string = '';

  constructor(
    private globalSearchToggle: GlobalSearchToggleService,
    private userRightsService: UserRightsService,
    private router: Router,
    private applicationService: ApplicationsService,
    private appViewsClient: AppViewsClient,
    private dashboardClient: DashboardsClient,
    private inboxApiService: InboxApiService,
    private pageClient: PagesClient,
    private imageService: ImageService,
    private urlResolverService: UrlResolverService
  ) {
    this.toggleSubscription = this.globalSearchToggle.searchToggle.subscribe(
      (toggleValue: string) => {
        this.open();
      }
    );
    this.contextId = this.userRightsService.getContextId();
    this.modelChanged
      .pipe(debounceTime(1000), takeUntil(this.onDestroy$))
      .subscribe((text: string) => {
        if (text.length >= this.minInputLength) {
          this.stopSearch = false;
          this.getSearchResults(this.value);
        }
      });
    this.router.events.pipe(takeUntil(this.onDestroy$)).subscribe((event: NavigationStart) => {
      if (event.navigationTrigger === 'popstate') {
        this.close(true);
      }
    });
    this.noItemImagePrefixPath =
      this.urlResolverService.getAssetsPrefix() + '/assets/images/no-items/';
    this.logoUrl = `${this.urlResolverService.getAssetsPrefix()}${LOGO_PORTAL_DARK}`;
  }

  ngOnInit(): void {}

  @Input() set isEnabled(isEnabled: boolean) {
    this.isEnabled = isEnabled;
  }
  get isEnabled(): boolean {
    return this._isEnabled;
  }

  close($event: boolean): void {
    this.isVisible = false;
    this.stopSearch = true;
    this.value = '';
  }

  open(): void {
    this.isVisible = true;
    this.value = '';
    this.globalSearchResultList = null;
    this.loading = false;
    this.stopSearch = false;
    setTimeout(() => {
      this.searchField.nativeElement.focus();
    }, 10);
  }

  @HostListener('document:keypress', ['$event']) onKeydownHandler(e: any) {
    const nodeName: string = e.target.nodeName;

    if (nodeName === 'INPUT' || nodeName === 'TEXTAREA' || e.target.contentEditable === 'true') {
      return;
    }
    // Ignore Escape
    if (this.isVisible && e.keyCode === 27) {
      this.isVisible = false;
      this.value = '';
    }

    if (
      e.which !== 0 &&
      e.charCode !== 0 &&
      !e.ctrlKey &&
      !e.metaKey &&
      !e.altKey &&
      e.keyCode !== 27 &&
      e.keyCode !== 13
    ) {
      this.isVisible = true;
      if (!this.value) {
        setTimeout(() => {
          this.searchField.nativeElement.focus();
          this.value = String.fromCharCode(e.keyCode | e.charCode);
          this.searchKeyPress(e);
        }, 10);
      }
    }
  }

  searchKeyPress(event: KeyboardEvent): void {
    if (this.isVisible && event.keyCode === 27) {
      this.searchField.nativeElement.blur();
      this.isVisible = false;
      this.value = '';
    }
    if (this.value.length === 0) {
      this.globalSearchResultList = null;
      this.stopSearch = true;
      this.loading = false;
    }
    if (this.value.length >= this.minInputLength) {
      this.modelChanged.next(this.value);
    }
  }

  filterApps(pattern: string): void {
    const filter: string = pattern.toLowerCase();
    this.globalSearchResultList = this.globalSearchResultList.filter(
      (item: IGlobalSearchResult) => {
        return (
          item.text.toLowerCase().includes(filter) || item.parentName.toLowerCase().includes(filter)
        );
      }
    );
  }

  private getSearchResults(text?: string): void {
    if (text.length >= this.minInputLength) {
      this.loading = true;
      forkJoin([
        this.applicationService.getApplications(0, 1000, '+name', text).pipe(
          takeUntil(this.onDestroy$),
          catchError((error: Error) => of({ isError: true, error: error }))
        ),
        this.appViewsClient.getForUser(this.contextId).pipe(
          takeUntil(this.onDestroy$),
          catchError((error: Error) => of({ isError: true, error: error }))
        ),
        this.dashboardClient.getActive(this.contextId).pipe(
          takeUntil(this.onDestroy$),
          map((dashboards: ActiveDashboardModel[]) => {
            return dashboards;
          }),
          switchMap((dashboards: ActiveDashboardModel[]) => {
            if (dashboards.length > 0) {
              const dashObservable: Observable<DashboardDetailModel>[] = dashboards.map(
                (dashboard: ActiveDashboardModel) => {
                  return this.dashboardClient.get(this.contextId, dashboard.id).pipe(
                    takeUntil(this.onDestroy$),
                    map((fullDashboardData: DashboardDetailModel) => {
                      return Object.assign(dashboard, fullDashboardData);
                    })
                  );
                }
              );
              return combineLatest(dashObservable);
            } else {
              return of(null);
            }
          })
        ),
        this.pageClient.getActivePages(this.contextId, text).pipe(
          takeUntil(this.onDestroy$),
          catchError((error: Error) => of({ isError: true, error: error }))
        ),
        from(this.inboxApiService.getList(0, 20, { criteria: 'subject', value: this.value })).pipe(
          takeUntil(this.onDestroy$),
          catchError((error: Error) => of({ isError: true, error: error }))
        ),
        from(this.inboxApiService.getList(0, 20, { criteria: 'fromuser', value: this.value })).pipe(
          takeUntil(this.onDestroy$),
          catchError((error: Error) => of({ isError: true, error: error }))
        )
      ])
        .pipe(takeWhile(() => !this.stopSearch))
        .subscribe((result: Array<any>) => {
          this.loading = false;
          this.concatApplication(result);
          this.filterApps(text);
          this.sortResults();
          this.searchTerm = this.value;
        });
    }
  }
  private concatApplication(result: Array<any>): void {
    this.globalSearchResultList = [];

    if (result[0] && !result[0].isError) {
      result[0].data.forEach((webApp: WebAppViewModel) => {
        if (webApp.key) {
          this.imageService.getImageUrl(webApp.key).then((imageSafeUrl: string) => {
            this.globalSearchResultList.push(new WebAppSearchResultModel(webApp, imageSafeUrl));
            this.sortResults();
          });
        } else {
          this.globalSearchResultList.push(new WebAppSearchResultModel(webApp, null));
        }
      });
    }
    if (result[1] && !result[1].isError) {
      result[1]
        .filter((item: any) => {
          return item.isActive;
        })
        .forEach((appView: UserAppViewModel) => {
          this.globalSearchResultList.push(new AppViewSearchResultModel(appView));
        });
    }
    if (result[2] && !result[2].isError) {
      result[2].forEach((dashboard: DashboardDetailModel) => {
        this.globalSearchResultList.push(new DashboardSearchResultModel(dashboard));
        dashboard.dashboardItems.forEach((dashboardItem: DashboardDetailItemModel) => {
          if (dashboardItem.appView.existsInMsr && dashboardItem.appView.isActive) {
            this.globalSearchResultList.push(
              new DashboardAppViewSearchResultModel(dashboardItem.appView, dashboard)
            );
          }
        });
      });
    }
    if (result[3] && !result[3].isError) {
      result[3].forEach((page: ActivePageModel) => {
        this.globalSearchResultList.push(new PageSearchResultModel(page));
      });
    }

    if (result[4] && !result[4].isError) {
      result[4].forEach((notification: NotificationModel) => {
        this.globalSearchResultList.push(new NotificationSearchResultModel(notification));
      });
    }
    if (result[5] && !result[5].isError) {
      result[5].forEach((notification: NotificationModel) => {
        this.globalSearchResultList.push(new NotificationSearchResultModel(notification));
      });
    }
  }

  public searchByCategory(type: ResultType): void {
    this.stopSearch = true;
    this.value = '';
    this.searchTerm = '';
    const results: Array<any> = [null, null, null, null];
    switch (type) {
      case ResultType.DASHBOARD:
        this.loading = true;
        this.dashboardClient
          .getActive(this.contextId)
          .pipe(
            takeUntil(this.onDestroy$),
            catchError((error: Error) => of({ isError: true, error: error }))
          )
          .subscribe((res: ActiveDashboardModel[]) => {
            const dashList: DashboardDetailModel[] = [];
            res.forEach((item: ActiveDashboardModel) => {
              dashList.push(new DashboardDetailModel({ ...item, dashboardItems: [] }));
            });
            results[2] = dashList;
            this.concatApplication(results);
            this.loading = false;
          });
        break;
      case ResultType.MICRO_APP:
        this.loading = true;
        this.appViewsClient
          .getForUser(this.contextId)
          .pipe(
            takeUntil(this.onDestroy$),
            catchError((error: Error) => of({ isError: true, error: error }))
          )
          .subscribe((res: UserAppViewModel[]) => {
            results[1] = res;
            this.concatApplication(results);
            this.loading = false;
          });
        break;
      case ResultType.INBOX_ITEM:
        this.loading = true;
        from(this.inboxApiService.getList(0, 20))
          .pipe(
            takeUntil(this.onDestroy$),
            catchError((error: Error) => of({ isError: true, error: error }))
          )
          .subscribe((res: any) => {
            results[4] = res;
            this.concatApplication(results);
            this.loading = false;
            results[0] = res;
          });
        break;
      case ResultType.WEB_APP:
        this.loading = true;
        this.applicationService
          .getApplications(0, 1000, '+name', '')
          .pipe(
            takeUntil(this.onDestroy$),
            catchError((error: Error) => of({ isError: true, error: error }))
          )
          .subscribe((res: PaginatedResultOfWebAppViewModel) => {
            results[0] = res;
            this.concatApplication(results);
            this.loading = false;
          });
        break;

      case ResultType.PAGE:
        this.loading = true;
        this.pageClient
          .getActivePages(this.contextId, '')
          .pipe(
            takeUntil(this.onDestroy$),
            catchError((error: Error) => of({ isError: true, error: error }))
          )
          .subscribe((res: ActivePageModel[]) => {
            results[3] = res;
            this.concatApplication(results);
            this.loading = false;
          });
        break;
    }
    this.sortResults();
  }

  private sortResults(): void {
    if (this.globalSearchResultList) {
      this.globalSearchResultList.sort((a: IGlobalSearchResult, b: IGlobalSearchResult) =>
        a.text.replace(/[^a-zA-Z ]/g, '').localeCompare(b.text.replace(/[^a-zA-Z ]/g, ''))
      );
    }
  }
  ngOnDestroy(): void {
    // this.messageService.clearMessage();
    this.onDestroy$.next();
    this.toggleSubscription.unsubscribe();
  }
  goToDashboards(event: MouseEvent): void {
    this.router.navigate(this.urlResolverService.getPathWithPrefix(['dashboards']));
  }
}
