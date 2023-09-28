import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { DemoComponent } from './demo/demo.component';
import { CommanRoutingModule } from './comman-routing.module';



@NgModule({
  declarations: [
    HeaderComponent,
    DemoComponent
  ],
  imports: [
    CommonModule,
    CommanRoutingModule
  ],

  exports: [
    HeaderComponent
  ]
})
export class CommanModule { }
