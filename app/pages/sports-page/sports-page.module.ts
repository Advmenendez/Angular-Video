import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SportsPageRoutingModule } from './sports-page-routing.module';
import { SportsContentComponent } from './components/sports-content/sports-content.component';


@NgModule({
  declarations: [
    SportsContentComponent
  ],
  imports: [
    CommonModule,
    SportsPageRoutingModule
  ]
})
export class SportsPageModule { }
