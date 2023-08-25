import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Color, LegendPosition, ScaleType } from '@swimlane/ngx-charts';
import { incomesData } from 'src/app/data/income';
import { ChartData } from 'src/app/data/types';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PieChartComponent {
  @Input() set data (value: ChartData[]) {
    console.log(value)
    this.chartData = value;
  }

  // options
  protected view: [number,number] = [700, 400];
  protected chartData!: any[];
  protected showXAxis = true;
  protected showYAxis = true;
  protected showLegend = true;
  protected showXAxisLabel = true;
  protected showYAxisLabel = true;
  protected xAxisLabel = 'Priority';
  protected yAxisLabel = 'Percentage%';
}
