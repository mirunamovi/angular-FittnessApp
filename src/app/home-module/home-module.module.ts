import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabComponent } from './tab.component';
import { SharedModule } from '../shared/shared.module';
import { SummaryComponent } from './summary-component/summary.component';
import { ActivityComponent } from './activity-component/activity.component';



@NgModule({
  declarations: [SummaryComponent],
  imports: [
    CommonModule,
    TabComponent,
    SharedModule,
    ActivityComponent
  ]
})
export class HomeModuleModule { }
