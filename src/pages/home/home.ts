import { Component } from '@angular/core';
import { NavController, IonicPage, ModalController, Modal } from 'ionic-angular';
@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public mds: Modal;
  public showModal: boolean = false;
  constructor(public navCtrl: NavController,
    public modalCtrl: ModalController) {
  }

  gotoQuestion() {
    let modal = this.modalCtrl.create("QuestionPage");
    modal.present();
  }



  openModal() {
    this.mds = this.modalCtrl.create("CModalPage", {
      navigationDockId: 1
    }, {
        showBackdrop: true,
        enableBackdropDismiss: true,
        enterAnimation: 'modal-from-bottom-enter',
        leaveAnimation: 'modal-from-bottom-leave'
      });
    this.mds.onDidDismiss(data => {
      this.showModal = false;
    });
    this.mds.present().then(data => {
      this.showModal = true;
    });
  }

  openModalFromRight() {
    this.mds = this.modalCtrl.create("ModalFromRightPage", {
      navigationDockId: 1
    }, {
        showBackdrop: true,
        enableBackdropDismiss: true,
        enterAnimation: 'modal-from-right-enter',
        leaveAnimation: 'modal-from-right-leave'
      });
    this.mds.onDidDismiss(data => {
      this.showModal = false;
    });
    this.mds.present().then(data => {
      this.showModal = true;
    });
  }

  openModalMenuFromRight() {
    if (this.mds && this.showModal) {
      this.mds.dismiss();
    } else {
      this.openModalFromRight();
    }
  }

  openModalMenu() {
    if (this.mds && this.showModal) {
      this.mds.dismiss();
    } else {
      this.openModal();
    }
  }

  alloylever() {
    this.navCtrl.push("AllowleverDemoPage");
  }
}
