import { Component } from '@angular/core';
import { MatTabChangeEvent } from '@angular/material/tabs';

@Component({
  selector: 'app-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.css'],
})
export class TabComponent {
  previousDay = 'Vineri';
  nextDay = 'Marti';
  selectedDayIndex = 0;
  arr = ['Luni', 'Marti', 'Miercuri', 'Joi', 'Vineri', 'Rezumat'];

  onClick(value: number) {
    console.log('Value:', value);
    this.previousDay = this.arr[value - 1];
    this.nextDay = this.arr[value + 1];

    this.selectedDayIndex = value;

    if (this.arr[value] == 'Rezumat') {
      this.previousDay = this.arr[value - 1];
      this.nextDay = this.arr[0];
    }

    if (this.arr[value] == 'Luni') {
      this.previousDay = this.arr[this.arr.length - 1];
      this.nextDay = this.arr[value + 1];
    }
  }
}
