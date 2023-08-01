import { Component, Input } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import {FormsModule} from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {NgFor} from '@angular/common';


interface Sport {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-activity',
  templateUrl: './activity.component.html',
  styleUrls: ['./activity.component.css',],
  standalone: true,
  imports: [MatCardModule, MatButtonModule, MatFormFieldModule, FormsModule, MatFormFieldModule, MatSelectModule, MatInputModule, NgFor],
})
export class ActivityComponent {
  @Input() label!: string;

  sports: Sport[] = [
    {value: 'Alergare Usoara', viewValue: 'Alergare Usoara'},
    {value: 'Karate', viewValue: 'Karate'},
    {value: 'Tenis', viewValue: 'Tenis'},
    {value: 'Inot', viewValue: 'Inot'},
    {value: 'Fotbal', viewValue: 'Fotbal'},
    {value: 'Handbal', viewValue: 'Handbal'},
    {value: 'Volei', viewValue: 'Volei'}

  ];




}
