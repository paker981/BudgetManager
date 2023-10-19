import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContainerComponent } from './components/container/container.component';
import { PreviewComponent } from './components/preview/preview.component';
import { ChartModule } from '../Shared/chart/chart.module';
import { MaterialModule } from '../Shared/material/material.module';
import { IncomeRoutingModule } from './income-routing.module';
import { StoreModule } from '@ngrx/store';
import { reducers } from './store/reducers';
import { IncomeDataService } from './services/income-data.service';
import { EffectsModule } from '@ngrx/effects';
import { IncomeEffects } from './store/effects';

const INCOME_MODULE_KEY = 'incomes';

@NgModule({
  declarations: [
    ContainerComponent,
    PreviewComponent
  ],
  imports: [
    StoreModule.forFeature(INCOME_MODULE_KEY, reducers),
    EffectsModule.forFeature([IncomeEffects]),
    CommonModule,
    ChartModule,
    MaterialModule,
    IncomeRoutingModule
  ],
  providers: [
    IncomeDataService
  ]
})
export class IncomeModule { }
