import { Component } from '@angular/core';
import { NavController, IonicPage, ModalController } from 'ionic-angular';
@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController,
    public modalCtrl: ModalController) {

  }

  gotoQuestion() {
    let modal = this.modalCtrl.create("QuestionPage");
    modal.present();
  }
}
