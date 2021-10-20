import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GridLayoutComponent } from './components/grid-layout/grid-layout.component';
import { FlexLayoutComponent } from './components/flex-layout/flex-layout.component';
import { FooterComponent } from './components/footer/footer.component';



@NgModule({
  declarations: [
    GridLayoutComponent,
    FlexLayoutComponent,
    FooterComponent,
  
  ],
  imports: [
    CommonModule
  ]
})
export class CoreModule { }
