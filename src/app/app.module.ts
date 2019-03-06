import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HttpModule } from '@angular/http';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { RestProvider } from '../providers/rest/rest';
import { IonicStorageModule } from '@ionic/storage';
/**
 * 导入4个外部加载的组件
 * 安装方法
 * npm install --save @ionic-native/camera @ionic-native/file @ionic-native/file-path @ionic-native/transfer
 * ionic cordova plugin add cordova-plugin-camera --save
 * ionic cordova plugin add cordova-plugin-file --save
 * ionic cordova plugin add cordova-plugin-file-transfer --save
 * ionic cordova plugin add cordova-plugin-filepath --save
 */
import { File } from '@ionic-native/file';
import { Transfer } from '@ionic-native/transfer';
import { FilePath } from '@ionic-native/file-path';
import { Camera } from '@ionic-native/camera';

import { TabsPage } from '../pages/tabs/tabs';
@NgModule({
  declarations: [
    MyApp,
    TabsPage,
  ],
  imports: [
    BrowserModule,
    HttpModule, //全局需要导入 HTTP
    IonicModule.forRoot(MyApp, {
      backButtonText: '返回',
    }),
    IonicStorageModule.forRoot() //全局定义 storage 的模块
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TabsPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    RestProvider, //rest 的定义导入
    File,
    Transfer,
    FilePath,
    Camera,
  ]
})
export class AppModule { }
