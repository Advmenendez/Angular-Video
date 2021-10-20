import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MusicPageRoutingModule } from './music-page-routing.module';
import { MusicContentComponent } from './components/music-content/music-content.component';


@NgModule({
  declarations: [
    MusicContentComponent
  ],
  imports: [
    CommonModule,
    MusicPageRoutingModule
  ]
})
export class MusicPageModule { }
