import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable()
export class GlobalSearchToggleService {
  // Search Toggle
  private globalSearchToggle: Subject<Object> = new Subject();
  searchToggle: Observable<Object> = this.globalSearchToggle.asObservable();

  toggleSearch(toggle: boolean): void {
    this.globalSearchToggle.next({ text: toggle });
  }
}
