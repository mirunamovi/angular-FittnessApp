import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabComponent } from './tab.component';
import { SharedModule } from '../shared-module/shared.module';
import { SummaryComponent } from './summary-component/summary.component';
import { MatTabNav, MatTabsModule } from '@angular/material/tabs';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';



@NgModule({
  declarations: [SummaryComponent, TabComponent],
  imports: [
    CommonModule,
    SharedModule,
    MatTabsModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule, 
    MatButtonModule, 
    MatFormFieldModule, 
    FormsModule,  
    MatSelectModule, 
    MatInputModule,
  ]
})
export class HomeModule { }
