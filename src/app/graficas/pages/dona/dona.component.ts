import { Component } from '@angular/core';
import { ChartData, ChartType, Color } from 'chart.js';
import { baseColors } from 'ng2-charts';

@Component({
  selector: 'app-dona',
  templateUrl: './dona.component.html',
})
export class DonaComponent {
  public colors: Color[] = ['#E88905', '#C7A6F5', '#C6D3F0', '#DB079F'];
  public doughnutChartLabels: string[] = [
    'Download Sales',
    'In-Store Sales',
    'Mail-Order Sales',
    'Other',
  ];
  public doughnutChartData: ChartData<'doughnut'> = {
    labels: this.doughnutChartLabels,
    datasets: [
      {
        data: [350, 450, 100, 150],
        backgroundColor: this.colors,
      },
    ],
  };
  public doughnutChartType: ChartType = 'doughnut';
}
