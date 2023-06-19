import { Component, Input, OnInit } from '@angular/core';
import icMoreHoriz from '@iconify/icons-ic/twotone-more-horiz';
import icCloudDownload from '@iconify/icons-ic/twotone-cloud-download';
import { ApexOptions } from '../../chart/chart.component';
import { defaultChartOptions } from '../../../utils/default-chart-options';
import { createDateArray } from '../../../utils/create-date-array';

@Component({
  selector: 'vex-widget-large-chart',
  templateUrl: './widget-large-chart.component.html',
  styleUrls: ['./widget-large-chart.component.scss']
})
export class WidgetLargeChartComponent implements OnInit {

  @Input() series: ApexNonAxisChartSeries | ApexAxisChartSeries;
  @Input() options: ApexOptions = defaultChartOptions({
    grid: {
      show: true,
      strokeDashArray: 5,
      padding: {
        left: 20
      }
    },
    chart: {
      type: 'area',
      height: 384,
      sparkline: {
        enabled: false
      },
      zoom: {
        enabled: true
      }
    },
    fill: {
      type: 'gradient',
      gradient: {
        shadeIntensity: 0.9,
        opacityFrom: 0.7,
        opacityTo: 0.5,
        stops: [0, 90, 100]
      }
    },
    colors: ['#f0702c', '#0c1c44'],
    labels:[1628793000000, 1629138600000, 1629570600000, 1630866600000, 1632076200000, 1632594600000, 1632767400000, 1633372200000, 1634581800000, 1635013800000, 1635273000000, 1635359400000],
    xaxis: {
      type: 'datetime',
      labels: {
        show: true
      },
    },
    yaxis: {
      labels: {
        show: true,
      }
    },
    legend: {
      show: true,
      itemMargin: {
        horizontal: 4,
        vertical: 4
      }
    }
  });

  icMoreHoriz = icMoreHoriz;
  icCloudDownload = icCloudDownload;

  constructor() { }

  ngOnInit() {
  }

}
