import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomePageRoutingModule } from './home-page-routing.module';
import { HomeContentComponent } from './components/home-content/home-content.component';


@NgModule({
  declarations: [
    HomeContentComponent
  ],
  imports: [
    CommonModule,
    HomePageRoutingModule
  ]
})
export class HomePageModule { }
