import {Component, OnInit} from '@angular/core';
import {SyntheseService} from '../services/synthese.service';
import {ChartOptions, ChartType} from 'chart.js';
import {Color, Label, monkeyPatchChartJsLegend, monkeyPatchChartJsTooltip, SingleDataSet} from 'ng2-charts';


@Component({
  selector: 'app-synthese',
  templateUrl: './synthese.component.html',
  styleUrls: ['./synthese.component.css']
})
export class SyntheseComponent implements OnInit {

  public pieChartOptions: ChartOptions = {
    responsive: true,
    tooltips: {
      callbacks: {
        label: (tooltipItem, data) => {
          return this.pieChartLabels[tooltipItem.index]
            + ': ' +
            data.datasets[tooltipItem.datasetIndex].data[tooltipItem.index]
            + '%';
        }
      }
    }
  };
  public pieChartLabels: Label[] = [['Non Traité'], ['SGE'], ['SGO'], ['GEC']];
  public pieChartData: SingleDataSet = [];
  public pieChartType: ChartType = 'pie';
  public pieChartLegend = true;
  public pieChartPlugins = [];
  public pieChartColors: Color[] = [
    {backgroundColor: ['#d9534f', '#5cb85c', '#f0ad4e', '#5bc0de']}
  ];

  constructor(private syntheseService: SyntheseService) {
    monkeyPatchChartJsTooltip();
    monkeyPatchChartJsLegend();
  }

  ngOnInit(): void {
    this.getSyntheseData();
  }

  public getSyntheseData(): void {
    this.syntheseService.getSynthese().subscribe(data =>
      this.pieChartData = data
    );
  }
}
