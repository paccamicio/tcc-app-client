import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'brand-header',
  templateUrl: './brand-header.component.html',
  styleUrls: ['./brand-header.component.scss'],
})
export class BrandHeaderComponent implements OnInit {

  @Input() name: string;

  constructor() { }

  ngOnInit() {}

}
