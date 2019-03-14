import { Component } from '@angular/core';
import { IonicPage, ModalController } from 'ionic-angular';
import { CalendarModal, CalendarModalOptions } from 'ion2-calendar';
@IonicPage()
@Component({
  selector: 'page-calendar-demo',
  templateUrl: 'calendar-demo.html',
})
export class CalendarDemoPage {

  constructor(
    public modalCtrl: ModalController, ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CalendarDemoPage');
  }

  openCalendar() {
    const from = new Date();
    from.setMonth(from.getMonth() - 6); // 半年前
    const options: CalendarModalOptions = {
      title: '',
      pickMode: 'range',
      closeLabel: '关闭',
      doneLabel: '确定',
      monthFormat: 'YYYY 年 MM 月 ',
      weekdays: ['天', '一', '二', '三', '四', '五', '六'],
    };

    const myCalendar = this.modalCtrl.create(CalendarModal, {
      options
    });


    myCalendar.present();

    myCalendar.onDidDismiss(date => {
      console.log(date);
    });
  }



}
