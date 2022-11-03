import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-overlaypanel',
  templateUrl: './overlaypanel.component.html',
  styleUrls: ['./overlaypanel.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush

})
export class OverlaypanelComponent implements OnInit {

  active = false;
  constructor() { }

  ngOnInit() {
  }
toggle() {
    this.active = !this.active;
  }

  close() {
    this.active = !this.active;
  }

}