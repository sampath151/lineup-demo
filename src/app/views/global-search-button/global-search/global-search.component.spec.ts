import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GlobalSearchComponent } from './global-search.component';
import { TestHelperModule } from '../../../shared/tests/test-helper/test-helper.module';
import { UserRightsService } from '../../../main/services/user-rights/user-rights.service';
import { MessageCommunicationService } from '@shared-local/services/message-communication/message-communication.service';
import { UrlResolverService } from '../../../shared/services/url-resolver/url-resolver.service';
import { ApplicationsService } from '../../../applications/services/applications/applications.service';
import { RouterTestingModule } from '@angular/router/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { GlobalSearchToggleService } from '../../services/global-search.toggler.service';

describe('GlobalSearchComponent', () => {
  let component: GlobalSearchComponent;
  let fixture: ComponentFixture<GlobalSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [GlobalSearchComponent],
      imports: [TestHelperModule, RouterTestingModule],
      providers: [
        UserRightsService,
        MessageCommunicationService,
        GlobalSearchToggleService,
        UrlResolverService,
        ApplicationsService
      ],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GlobalSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
