import { ChangeDetectionStrategy, Component, EventEmitter, Inject, Input, Output } from '@angular/core';
import { Color, ScaleType } from '@swimlane/ngx-charts';
import { single } from 'rxjs';
import { Config } from 'src/app/config';
import { incomesData } from 'src/app/data/income';
import { ChartData } from 'src/app/data/types';
import { CONFIG_CHART_TOKEN } from 'src/app/tokens/config.token';
import { getSingleChartDataByMonth } from '../../helpers/transform';
import { SingleChartData } from 'src/app/modules/outcome/types/outcome.types';

@Component({
  selector: 'app-vertical-bar-chart',
  templateUrl: './vertical-bar-chart.component.html',
  styleUrls: ['./vertical-bar-chart.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class VerticalBarChartComponent {
  @Output() monthHovered = new EventEmitter<string>();
  @Output() monthSelected = new EventEmitter<string>();
  @Input() set data (value: ChartData[] | null) {
    this.chartData = value ? value : [];
  }

  constructor(@Inject(CONFIG_CHART_TOKEN) protected config: Config){}

  // options
  protected view: [number,number] = [700, 400];
  protected chartData!: any[];
  // TODO: konfiga ustawia parent CONFIG => DI przekazuje config'a



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
