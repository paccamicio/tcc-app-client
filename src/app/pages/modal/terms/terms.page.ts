import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-terms',
  templateUrl: './terms.page.html',
  styleUrls: ['./terms.page.scss'],
})
export class TermsPage implements OnInit {

  constructor(
    public mc: ModalController
  ) { }

  ngOnInit() { }

  /**
   * Close the modal.
   * @returns Promise<boolean>
   */
  public dismiss(): Promise<boolean> {
    return this.mc.dismiss();
  }

}
