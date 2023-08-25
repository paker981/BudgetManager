import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContainerComponent } from './modules/outcome/components/container/container.component';
import { DashboardComponent } from './modules/dashboard/components/dashboard/dashboard.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    children: [
      {
        path: 'income',
        loadChildren: () => import("./modules/Income/income.module").then(m => m.IncomeModule),
      },
      {
        path: 'outcome',
        loadChildren: () => import("./modules/outcome/outcome.module").then(m => m.OutcomeModule),
      },
    ],
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
