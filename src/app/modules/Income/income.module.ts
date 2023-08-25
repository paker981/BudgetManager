import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContainerComponent } from './components/container/container.component';
import { PreviewComponent } from './components/preview/preview.component';
import { ChartModule } from '../Shared/chart/chart.module';
import { MaterialModule } from '../Shared/material/material.module';
import { IncomeRoutingModule } from './income-routing.module';




@NgModule({
  declarations: [
    ContainerComponent,
    PreviewComponent
  ],
  imports: [
    CommonModule,
    ChartModule,
    MaterialModule,
    IncomeRoutingModule
  ]
})
export class IncomeModule { }
