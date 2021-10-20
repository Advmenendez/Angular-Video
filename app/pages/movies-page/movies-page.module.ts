import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MoviesPageRoutingModule } from './movies-page-routing.module';
import { MoviesContentComponent } from './components/movies-content/movies-content.component';


@NgModule({
  declarations: [
    MoviesContentComponent
  ],
  imports: [
    CommonModule,
    MoviesPageRoutingModule
  ]
})
export class MoviesPageModule { }
