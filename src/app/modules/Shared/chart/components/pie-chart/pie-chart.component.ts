import { ChangeDetectionStrategy, Component, Inject, Input } from '@angular/core';
import { Color, LegendPosition, ScaleType } from '@swimlane/ngx-charts';
import { Config } from 'src/app/config';
import { incomesData } from 'src/app/data/income';
import { ChartData } from 'src/app/data/types';
import { CONFIG_CHART_TOKEN } from 'src/app/tokens/config.token';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PieChartComponent {
  @Input() set data (value: ChartData[] | null) {
    this.chartData = value ? value : [];
  }

  constructor(@Inject(CONFIG_CHART_TOKEN) protected config: Config){}

  // options
  protected view: [number,number] = [700, 400];
  protected chartData!: any[];
}
