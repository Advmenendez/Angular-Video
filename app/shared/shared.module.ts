import { VimeModule } from '@vime/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TitleComponent } from './components/title-component/title.component';
import { TextComponent } from './components/text-component/text.component';
import { ImageComponent } from './components/image-component/image.component';
import { VideoComponent } from './components/video-component/video.component';
import { ButtonComponent } from './components/button-component/button.component';
import { CollapseComponent } from './components/collapse-component/collapse.component';
import { ModalComponent } from './components/modal-component/modal.component';




@NgModule({
  declarations: [
    TitleComponent,
    TextComponent,
    ImageComponent,
    VideoComponent,
    ButtonComponent,
    CollapseComponent,
    ModalComponent,
  ],
  imports: [
    CommonModule,
    VimeModule
  ],
  exports: [
    TitleComponent,
    VideoComponent
    
  ]
})
export class SharedModule { }
