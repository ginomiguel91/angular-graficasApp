import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { ChartConfiguration, ChartData, ChartEvent, ChartType } from 'chart.js';

@Component({
  selector: 'app-grafica-barra',
  templateUrl: './grafica-barra.component.html',
})
export class GraficaBarraComponent implements OnInit {
  @Input() horizontal: boolean = false;

  public barChartOptions: ChartConfiguration['options'] = {
    responsive: true,
  };
  public barChartType: ChartType = 'bar';

  @Input() barChartData: ChartData<'bar'> = {
    labels: ['2020', '2021', '2022', '2023', '2024', '2025', '2026'],
    datasets: [
      {
        indexAxis: 'x',
        data: [65, 59, 80, 81, 56, 55, 40],
        label: 'Series A',
        backgroundColor: '#442CEB',
        hoverBackgroundColor: 'red',
      },
      {
        indexAxis: 'x',
        data: [28, 48, 40, 19, 86, 27, 90],
        label: 'Series B',
        backgroundColor: '#A7BDF4',
        hoverBackgroundColor: 'red',
      },
      {
        indexAxis: 'x',
        data: [8, 38, 70, 59, 66, 80, 100],
        label: 'Series C',
        backgroundColor: '#2DEB5F',
        hoverBackgroundColor: 'red',
      },
    ],
  };

  constructor() {}
  ngOnInit(): void {
    if (this.horizontal) {
      this.barChartData.datasets.forEach((m) => {
        m.indexAxis = 'y';
      });
    }
  }
}
