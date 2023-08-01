import { Component } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { ActivityComponent } from 'src/app/home-module/activity-component/activity.component';



@Component({
  selector: 'app-day',
  templateUrl: './day.component.html',
  styleUrls: ['./day.component.css', '../../../src/styles.css'],
  standalone: true,
  imports: [MatCardModule, MatButtonModule, ActivityComponent],

})
export class DayComponent {

}

