import { NgModule, isDevMode } from '@angular/core';
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
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { CONFIG_CHART_TOKEN } from './tokens/config.token';
import { BASIC_CHART_CONFIG } from './config';



@NgModule({
  declarations: [
    AppComponent,
    CustomSnackBarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxChartsModule,
    BrowserAnimationsModule,
    DashboardModule,
    MaterialModule,
    StoreModule.forRoot({}),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() }),
    EffectsModule.forRoot()
  ],
  providers: [
    {
      provide: CONFIG_CHART_TOKEN,
      useValue: BASIC_CHART_CONFIG
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }


// store
// reducer

// action
// effect

//selector


// 30 componentów  -- wyświeetlić aktualny stan + edycja równych elementów
// getResource - dispatchowana na onInit
// updateResource - dispatchowana przy edycji
// updateResourceEffect - efekt który odpowiada na updateResource => wykonuje request
// resourceUpdated => akcja
// reducer

