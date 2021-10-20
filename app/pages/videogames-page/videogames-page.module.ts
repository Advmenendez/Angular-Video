import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VideogamesPageRoutingModule } from './videogames-page-routing.module';
import { VideogamesContentComponent } from './components/videogames-content/videogames-content.component';


@NgModule({
  declarations: [
    VideogamesContentComponent
  ],
  imports: [
    CommonModule,
    VideogamesPageRoutingModule
  ]
})
export class VideogamesPageModule { }
