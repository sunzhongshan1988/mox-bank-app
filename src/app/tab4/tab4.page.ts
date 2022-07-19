import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import {
  ChartComponent,
  ApexNonAxisChartSeries,
  ApexResponsive,
  ApexChart
} from "ng-apexcharts";

export type ChartOptions = {
  series: ApexNonAxisChartSeries;
  chart: ApexChart;
  responsive: ApexResponsive[];
  labels: any;
};

@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
})
export class Tab4Page implements OnInit, AfterViewInit {

  @ViewChild("chart") chart: ChartComponent;
  public chartOptions: Partial<ChartOptions>;

  stanby: boolean = false;
  constructor() {
    this.chartOptions = {
      series: [10,11,11,11,11],
      chart: {
        type: "donut",
      },
      labels: ["Team A", "Team B", "Team C", "Team D", "Team E"],
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 300
            },
            legend: {
              show: false
            },
            tooltip: {
              enabled: true,
            },
            dataLabels: {
              enabled: true,
              enabledOnSeries: undefined,
              formatter: function (val) {
                  return Math.round(val)+`%`;
              },
            },
            animations: {
              enabled: true,
              easing: 'easeinout',
              speed: 800,
              animateGradually: {
                  enabled: true,
                  delay: 150
              },
              dynamicAnimation: {
                  enabled: true,
                  speed: 350
              }
          }
      
          }
        }
      ]
    };
  }
  ngOnInit() {
  }
  ngAfterViewInit() {
    this.stanby = true;
  }
}
