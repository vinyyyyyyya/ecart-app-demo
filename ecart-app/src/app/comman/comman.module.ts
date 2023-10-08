import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { DemoComponent } from './demo/demo.component';
import { CommanRoutingModule } from './comman-routing.module';
import { MainHeaderComponent } from './main-header/main-header.component';



@NgModule({
  declarations: [
    HeaderComponent,
    DemoComponent,
    MainHeaderComponent
  ],
  imports: [
    CommonModule,
    CommanRoutingModule
  ],

  exports: [
    HeaderComponent,
    MainHeaderComponent
  ]
})
export class CommanModule { }
