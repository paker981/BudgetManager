import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { Color, ScaleType } from '@swimlane/ngx-charts';
import { single } from 'rxjs';
import { incomesData } from 'src/app/data/income';
import { ChartData } from 'src/app/data/types';

@Component({
  selector: 'app-vertical-bar-chart',
  templateUrl: './vertical-bar-chart.component.html',
  styleUrls: ['./vertical-bar-chart.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class VerticalBarChartComponent {

  @Output() private monthHovered = new EventEmitter<string>();
  @Output() private monthSelected = new EventEmitter<string>();

  @Input() set data (value: ChartData[]) {
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


  onBarActivate(event: any) {
    this.monthHovered.emit(event.value.name)
  }

  onBarDeactivate() {
    this.monthHovered.emit('');
  }

  onSelect(event: any){
    this.monthSelected.emit(event.name);
  }
}
