import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { NavController } from '@ionic/angular';
import {
  ChartComponent,
  ApexNonAxisChartSeries,
  ApexResponsive,
  ApexChart
} from 'ng-apexcharts';

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

  @ViewChild('chart') chart: ChartComponent;
  public chartOptions: Partial<ChartOptions>;

  stanby = false;
  constructor(private navCtrl: NavController) {
    this.chartOptions = {
      series: [0, 0, 0, 0, 0],
      chart: {
        type: 'donut',
      },
      labels: ['Food & drinks', 'Digital wallets', 'Groceries', 'Others', 'Shopping'],
      responsive: [
        {
          breakpoint: 800,
          options: {
            chart: {
              width: '100%',
            },
            colors: ['#827AFE', '#FE3878', '#2A98F0', '#ECEBEC', '#96FC3D'],
            fill: {
            },
            legend: {
              show: false
            },
            tooltip: {
              enabled: false,
            },
            dataLabels: {
              enabled: true,
              enabledOnSeries: undefined,
              offsetX: 0,
              offsetY: 0,
              formatter: (val, {seriesIndex}) => `${Math.round(val)}%`,
              style: {
                fontFamily: 'Maison Neue, sans-serif',
                colors: ['#000000']
              },
              dropShadow: {
                enabled: false,
              }
            },
            plotOptions: {
              pie: {
                expandOnClick: false,
                donut: {
                  size: '72%',
                  labels: {
                    show: true,
                    name: {
                      show: true,
                      fontSize: '12px',
                      fontFamily: 'Maison Neue, sans-serif',
                      fontWeight: 300,
                      color: undefined,
                      offsetY: -5,
                      formatter: function (val) {
                        return val
                      }
                    },
                    value: {
                      show: true,
                      fontSize: '20px',
                      fontFamily: 'Maison Neue, sans-serif',
                      fontWeight: 300,
                      color: undefined,
                      offsetY: 10,
                      formatter: function (val) {
                        return `${-val} HKD`
                      }
                    },
                    total: {
                      show: true,
                      label: 'Total',
                      color: '#000000',
                      fontSize: '20px',
                      fontFamily: 'Maison Neue, sans-serif',
                      fontWeight: 300,
                      formatter: (w) => {
                        const total = w.globals.seriesTotals.reduce((a, b) => a + b, 0);
                        return `${-total} HKD`;
                      }
                    }
                  }
                }
              }
            },
            animations: {
              enabled: true,
              easing: 'easeinout',
              speed: 1600,
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
  ionViewDidEnter () {
    this.chart.updateOptions({
      series: [ 1842.50, 1800.00, 553.90, 375.00, 336.00 ],
    }, true, false);
  }
  gotoDetail() {
    this.navCtrl.navigateForward(["/pages/spending/detail", { type: 'Food & drinks' }]);
  }
}
