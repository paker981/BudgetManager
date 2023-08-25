import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VerticalBarChartComponent } from './components/vertical-bar-chart/vertical-bar-chart.component';
import { PieChartComponent } from './components/pie-chart/pie-chart.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';



@NgModule({
  declarations: [
    VerticalBarChartComponent,
    PieChartComponent
  ],
  imports: [
    CommonModule,
    NgxChartsModule

    
  ],
  exports: [
    VerticalBarChartComponent,
    PieChartComponent
  ]
})
export class ChartModule { }
