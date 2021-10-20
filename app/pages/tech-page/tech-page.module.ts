import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TechPageRoutingModule } from './tech-page-routing.module';
import { TechContentComponent } from './components/tech-content/tech-content.component';


@NgModule({
  declarations: [
    TechContentComponent
  ],
  imports: [
    CommonModule,
    TechPageRoutingModule
  ]
})
export class TechPageModule { }
