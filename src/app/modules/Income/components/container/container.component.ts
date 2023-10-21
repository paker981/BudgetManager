import { Component, OnInit, ViewChild } from '@angular/core';
import { ChartData, IncomeCategory, IncomeData, OutcomeData } from 'src/app/data/types';
import { IncomeDataService } from '../../services/income-data.service';
import { Observable, delay, map, tap } from 'rxjs';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { PreviewData } from '../../types/incomeData.types';
import { PreviewComponent } from '../preview/preview.component';
import { transformDataForChart } from 'src/app/modules/Shared/chart/helpers/transform';
import { incomeCallback, transformDataToPreview } from '../../helpers/transform';
import { AppState } from 'src/app/interfaces/appState.interface';
import { Store, select } from '@ngrx/store';
import { selector } from 'd3-selection';
import { incomesSelector, isLoadingSelector } from '../../store/selectors';
import { getIncomes } from '../../store/actions';
import * as IncomesActions from '../../store/actions';
import { IncomeState } from 'src/app/interfaces/incomeState.inteface';


@UntilDestroy()
@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss']
})
export class ContainerComponent implements OnInit {
  protected selectedMonth!: PreviewData | null;
  protected isLoading$: Observable<boolean> = this.store.pipe(select(isLoadingSelector))
  protected data$: Observable<ChartData[]> = this.store.pipe(
    select(incomesSelector),
    tap((data)=>this._data=data),
    map((val=>transformDataForChart(val,incomeCallback))),
  )
  private _data!: IncomeData[]

  constructor(private store: Store<IncomeState>) {}
  
  ngOnInit(): void {
    // this.store
    this.store.dispatch(IncomesActions.getIncomes())
  }

  onMonthHovered(month: string){
    if(month.length === 0){
      this.selectedMonth = null;
      return;
    }

    const data = transformDataToPreview(this._data);
    const monthData = data.find((data)=> data.name === month);

    this.selectedMonth = monthData ? monthData : null
  }
}
