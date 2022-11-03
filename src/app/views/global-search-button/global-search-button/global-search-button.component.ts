import { Component, OnInit } from '@angular/core';
import { GlobalSearchToggleService } from '../../services/global-search.toggler.service';

@Component({
  selector: 'global-search-button',
  templateUrl: './global-search-button.component.html',
  styleUrls: ['./global-search-button.component.scss']
})
export class GlobalSearchButtonComponent implements OnInit {
  constructor(private globalSearchToggler: GlobalSearchToggleService) {}
  ngOnInit(): void {}

  /** @function openGlobalSearch
   *   @description Show Global Search Component - Service
   */
  openGlobalSearch($e: Event): void {
    $e.preventDefault();
    this.globalSearchToggler.toggleSearch(true);
  }
}
