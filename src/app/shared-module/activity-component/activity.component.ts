import { Component, Input, OnInit, OnChanges, Output, EventEmitter } from '@angular/core';
import { SchedulerService } from '../scheduler-service/scheduler.service'; 

interface Sport {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-activity',
  templateUrl: './activity.component.html',
  styleUrls: ['./activity.component.css',],
})
export class ActivityComponent implements OnInit{
  // @Input() label!: string;
  // @Input() day = '';

  // @Output() input1 = new EventEmitter<string>();
  // @Output() input2= new EventEmitter<Date>();
  // @Output() input3= new EventEmitter<Date>();

  constructor(private schedulerService : SchedulerService){
  }
  
  ngOnInit(): void{
    // console.log(this.currentDay);

  }
 
  sports: Sport[] = [
    {value: 'Alergare Usoara', viewValue: 'Alergare Usoara'},
    {value: 'Karate', viewValue: 'Karate'},
    {value: 'Tenis', viewValue: 'Tenis'},
    {value: 'Inot', viewValue: 'Inot'},
    {value: 'Fotbal', viewValue: 'Fotbal'},
    {value: 'Handbal', viewValue: 'Handbal'},
    {value: 'Volei', viewValue: 'Volei'}

  ];

  @Input() label!: string;
  @Input() index!: number; 


  onActivityChange(event: any, label: string) {
    const selectedActivity = event.target.value;
    this.schedulerService.updateActivityByIndex(this.index, label, selectedActivity);
  }

  onStartTimeChange(event: any, label: string) {
    const startTime = event.target.value;
    this.schedulerService.updateTimeByIndex(this.index, label, startTime);
  }

  onEndTimeChange(event: any, label: string) {
    const endTime = event.target.value;
    this.schedulerService.updateTimeByIndex(this.index, label, endTime);
  }
}

