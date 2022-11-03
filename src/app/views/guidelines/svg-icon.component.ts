import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'svg-icon',
  templateUrl: './svg-icon.component.html',
  
})
export class SvgIconComponent implements OnInit {
  @Input() id: string;
  @Input() path: string;

  constructor() {}

  ngOnInit(): void {}
}
