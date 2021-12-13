import { Component, Input, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-semi-navbar',
  templateUrl: './semi-navbar.component.html',
  styleUrls: ['./semi-navbar.component.scss'],
})
export class SemiNavbarComponent implements OnInit {

  @Input() backPath: string;

  constructor(
    public nc: NavController
  ) { }

  ngOnInit() {}

  /**
   * Return to the last page.
   * @returns void
   */
  public goBack(): void {
    return this.nc.back();
  }
}
