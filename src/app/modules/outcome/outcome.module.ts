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



@NgModule({
  declarations: [
    ContainerComponent,
    ViewMonthComponent,
    FormComponent,
    AddComponent
  ],
  imports: [
    CommonModule,
    ChartModule,
    MaterialModule,
    ReactiveFormsModule,
    OutcomeRoutingModule
  ]
})
export class OutcomeModule { }
