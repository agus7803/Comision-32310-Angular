import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppMaterialModule } from '../shared/app.material.module';
import { ToolBarRoutingModule } from './toolbar-routing.module';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    SharedModule,
    ToolBarRoutingModule
  ]
})
export class ToolbarModule { }
