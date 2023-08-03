import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { SchedulerService } from 'src/app/shared-module/scheduler-service/scheduler.service';

@Component({
  selector: 'app-dash',
  templateUrl: './dash.component.html',
  styleUrls: ['./dash.component.css']
})
export class DashComponent implements OnInit{

  caloriiPerOra: number[] = [];
  activitati: any[]=[];
  caloriiPerZi: any[]=[];
  /** Based on the screen size, switch from standard to one column per row */
  cardLayout = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return {
          columns: 2,
          chart: { cols: 2, rows: 2 },
          table: { cols: 2, rows: 2 },
        };
      }
 
     return {
        columns: 2,
        chart: { cols: 1, rows: 2 },
        table: { cols: 2, rows: 2 },
      };
    })
  );

  constructor(private breakpointObserver: BreakpointObserver, private schedulerService: SchedulerService) {}

  ngOnInit() {
    this.schedulerService.setDailyScheduleTest();
    this.caloriiPerOra = this.schedulerService.calculateCaloriesPerHour();
    this.activitati = this.schedulerService.calculateActivityCalories();
    this.caloriiPerZi = this.schedulerService.calculateCaloriesPerDay();
  }
}
