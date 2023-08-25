import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IncomeModule } from './modules/Income/income.module';
import { OutcomeCategory } from './data/types';
import { OutcomeModule } from './modules/outcome/outcome.module';
import { DashboardModule } from './modules/dashboard/dashboard.module';
import { CustomSnackBarComponent } from './components/custom-snack-bar/custom-snack-bar.component';
import { MaterialModule } from './modules/Shared/material/material.module';

@NgModule({
  declarations: [
    AppComponent,
    CustomSnackBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxChartsModule,
    BrowserAnimationsModule,
    DashboardModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
