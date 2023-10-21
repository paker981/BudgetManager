import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContainerComponent } from './components/container/container.component';
import { ViewMonthComponent } from './components/dialogs/view-month/view-month.component';
import { ChartModule } from '../Shared/chart/chart.module';
import { MaterialModule } from '../Shared/material/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { FormComponent } from './components/form/form.component';
import { AddComponent } from './components/add/add.component';
import { OutcomeRoutingModule } from './outcome-routing.module';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { reducers } from './store/reducers';
import { OutcomeEffects } from './store/effects';
import { OutcomeDataService } from './services/outcome-data.service';
import { OUTCOME_MODULE_KEY } from './types/outcome.types';

@NgModule({
  declarations: [
    ContainerComponent,
    ViewMonthComponent,
    FormComponent,
    AddComponent
  ],
  imports: [
    StoreModule.forFeature(OUTCOME_MODULE_KEY, reducers),
    EffectsModule.forFeature([OutcomeEffects]),
    CommonModule,
    ChartModule,
    MaterialModule,
    ReactiveFormsModule,
    OutcomeRoutingModule
  ],
  providers: [
    OutcomeDataService
  ]
})
export class OutcomeModule { }
