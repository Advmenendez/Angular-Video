import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewsPageRoutingModule } from './news-page-routing.module';
import { NewsContentComponent } from './components/news-content/news-content.component';


@NgModule({
  declarations: [
    NewsContentComponent
  ],
  imports: [
    CommonModule,
    NewsPageRoutingModule
  ]
})
export class NewsPageModule { }
