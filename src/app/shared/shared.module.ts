import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { DayComponent } from './day-component/day.component';



@NgModule({
  declarations: [FooterComponent],
  imports: [
    CommonModule,
    DayComponent
  ],
  exports: [
    FooterComponent
  ]
})
export class SharedModule { }
