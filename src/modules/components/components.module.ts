import { NgModule} from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { CommonModule } from '@angular/common';
import {  CModalComponent, CModalRightComponent } from './index';
@NgModule({
	declarations: [
		CModalComponent,
		CModalRightComponent
	],
	imports: [
	  IonicModule,
	  CommonModule
	],
	exports: [
		CModalComponent,
		CModalRightComponent
	],
	entryComponents: [
		CModalComponent,
		CModalRightComponent
	],
	providers: [
	]
  })
export class ComponentsModule { }
