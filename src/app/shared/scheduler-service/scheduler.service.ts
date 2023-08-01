import { Injectable, OnInit } from '@angular/core';
import { DaySchedule } from './shared/day-schedule.model';
import { Activity } from './shared/activity.model';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SchedulerService {
  // captaincalculator.com
  private CALORIES_ARRAY: {}[] = [
    {
      activityType: 'Inot',
      caloriesPerMinute: 8,
    },
    {
      activityType: 'Karate',
      caloriesPerMinute: 6,
    },
    {
      activityType: 'Tenis',
      caloriesPerMinute: 9,
    },
    {
      activityType: 'Fotbal',
      caloriesPerMinute: 8,
    },
    {
      activityType: 'Handbal',
      caloriesPerMinute: 10,
    },
    {
      activityType: 'Volei',
      caloriesPerMinute: 5,
    },
  ];
  private dailySchedule: DaySchedule[] = [];
  schedule = new Subject<DaySchedule[]>();

  constructor() {
    if (!this.fetchFromLocalStorage()) {
      for (let index = 0; index < 5; index++) {
        this.dailySchedule.push(
          new DaySchedule(
            new Activity(new Date(0), new Date(0), ''),
            new Activity(new Date(0), new Date(0), '')
          )
        );
      }
    }
    this.schedule.next(this.dailySchedule);
  }

  getScheduleByDay(index: number) {
    return this.dailySchedule.slice()[index];
  }

  getFullSchedule() {
    return this.dailySchedule.slice();
  }

  setDaySchedule(daySchedule: DaySchedule, index: number) {
    this.dailySchedule[index] = daySchedule;
    this.schedule.next(this.dailySchedule);
  }

  saveToLocalStorage() {
    localStorage.setItem('dailySchedule', JSON.stringify(this.dailySchedule));
    console.log(JSON.stringify(this.dailySchedule));
  }

  fetchFromLocalStorage() {
    const fetchedData: string | null = localStorage.getItem('dailySchedule');
    if (fetchedData) {
      this.dailySchedule = JSON.parse(fetchedData);
      this.schedule.next(this.dailySchedule);
      return true;
    }
    return false;
  }

  
}
