import { Component, Input, OnChanges } from '@angular/core';
import { ChartConfiguration } from 'chart.js';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.css']
})
export class BarChartComponent implements OnChanges{

  @Input() caloriiPerZi: any[] = [];
  @Input() typeChart: 'kcal' | 'kcalDimS' = 'kcal';

  public barChartLegend = true;
  public barChartPlugins = [];

  public barChartData: ChartConfiguration<'bar'>['data'] = {
    labels: ['Luni','Marti','Miercuri','Joi','Vineri'],
    datasets: []
  };

  public barChartOptions: ChartConfiguration<'bar'>['options'] = {
    responsive: false,
  };

  constructor() {
  }

  ngOnChanges() {
    if (this.typeChart === 'kcal') {
      this.barChartData.datasets.push({
        data: this.caloriiPerZi.map(ziuaData => ziuaData.morningCal + ziuaData.eveningCal),
        label: 'KCal Arse pe Zi',
        backgroundColor: 'rgba(255, 99, 132, 0.5)'
      });
    } else if (this.typeChart === 'kcalDimS') {
      this.barChartData.datasets.push({
        data: this.caloriiPerZi.map(ziuaData => ziuaData.morningCal),
        label: 'KCal Dimineata',
        backgroundColor: 'rgba(255, 99, 132, 0.5)'
      });

      this.barChartData.datasets.push({
        data: this.caloriiPerZi.map(ziuaData => ziuaData.eveningCal),
        label: 'KCal Seara',
        backgroundColor: 'rgba(54, 162, 235, 0.5)'
      });
    }
//     console.log('Datasets:', this.barChartData.datasets);
//     console.log('date:', this.caloriiPerZi);

    this.barChartData.datasets[0].label = this.typeChart === 'kcal' ? 'KCal Arse pe Zi' : 'KCal Dimineata';
  }
}
