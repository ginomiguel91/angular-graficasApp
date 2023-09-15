import { Component, OnInit } from '@angular/core';
import { GraficasService } from '../../services/graficas.service';
import { ChartData, ChartType } from 'chart.js';
@Component({
  selector: 'app-dona-http',
  templateUrl: './dona-http.component.html',
})
export class DonaHttpComponent implements OnInit {
  constructor(private graficaService: GraficasService) {}
  ngOnInit(): void {
    this.graficaService
      .getUsuariosRedesSocialesData()
      .subscribe(({ labels, values }) => {
        this.doughnutChartLabels.push(...labels);
        this.doughnutChartData.datasets[0].data.push(...values);
      });
  }
  public doughnutChartLabels: string[] = [];
  public doughnutChartData: ChartData<'doughnut'> = {
    labels: this.doughnutChartLabels,
    datasets: [
      {
        data: [],
      },
    ],
  };
  public doughnutChartType: ChartType = 'doughnut';
}
