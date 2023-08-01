import { Component } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';

@Component({
  selector: 'app-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.css'],
  standalone: true,
  imports: [
    MatTabsModule,
    MatIconModule,
    MatButtonModule,
    MatInputModule,
    CommonModule,
    SharedModule,
  ],
})
export class TabComponent {
  previousDay!: string;
  nextDay!: string;
  arr = ['Luni', 'Marti', 'Miercuri', 'Joi', 'Vineri', 'Rezumat'];

  onClick(value: number) {
    console.log('dsd');
    this.previousDay = this.arr[value++];
    this.nextDay = this.arr[value--];
  }
}
