import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutPageRoutingModule } from './about-page-routing.module';
import { AboutContentComponent } from './components/about-content/about-content.component';


@NgModule({
  declarations: [
    AboutContentComponent
  ],
  imports: [
    CommonModule,
    AboutPageRoutingModule
  ]
})
export class AboutPageModule { }
