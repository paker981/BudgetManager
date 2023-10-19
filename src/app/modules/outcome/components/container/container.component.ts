import { Component, OnInit } from '@angular/core';
import { outcomeCallback, transformDataForChartOutcome, transformDataForSingleChartOutcome } from '../../helpers/transform';
import { outcomesData } from 'src/app/data/outcome';
import { ChartData, OutcomeData } from 'src/app/data/types';
import { OutcomeDataService } from '../../services/outcome-data.service';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { Observable, filter, map, switchMap, tap } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { ViewMonthComponent } from '../dialogs/view-month/view-month.component';
import { transformDataForChart } from 'src/app/modules/Shared/chart/helpers/transform';
import { Store, select } from '@ngrx/store';
import { AppState } from 'src/app/interfaces/appState.interface';
import { isLoadingSelector, outcomesSelector } from '../../store/selectors';
import * as OutcomesActions from '../../store/actions';
import { OutcomeToAddData, SingleChartData, SpendingData } from '../../types/outcome.types';
import { OutcomeState } from 'src/app/interfaces/outcomeState.interface';

@UntilDestroy()
@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss']
})
export class ContainerComponent implements OnInit {

  private _outcomes$ = this.store.pipe(
    select(outcomesSelector),
    tap((data)=>this.outcomeData = data)
    );

  protected isLoading$: Observable<boolean> = this.store.pipe(select(isLoadingSelector));
  protected data$: Observable<ChartData[]> = this._outcomes$.pipe(
    map(val => transformDataForChart(val, outcomeCallback))
  );
  protected singleChartData$: Observable<SingleChartData[]> = this._outcomes$.pipe(
    map(transformDataForSingleChartOutcome)
  );
  
  protected addMode: boolean = false;
  protected outcomeData!: OutcomeData[];

  
  constructor(
    private dialog: MatDialog,
    private store: Store<AppState>
    ){}

  ngOnInit(): void {
    this.store.dispatch(OutcomesActions.getOutcomes());
  }  

  onSelectedMonth(month: string) {
    const singleCharData = transformDataForSingleChartOutcome(this.outcomeData);
    const monthData = singleCharData.find((data)=> data.name === month);

    const dialogRef = this.dialog.open(ViewMonthComponent, {
      width: 'auto',
      height: 'auto',
      // data: { subject$ }
      data: { chartData: monthData } // Przekazujesz dane wybranego miesiąca do dialogu
    });
    // subject$.sub(() => this.addData())
    dialogRef.afterClosed().pipe(
      untilDestroyed(this),
      filter(Boolean),
      tap(result=>this.store.dispatch(OutcomesActions.addOutcome({data: result})))
    ).subscribe();
  }

  onSpentAdd(data: OutcomeToAddData){
    this.store.dispatch(OutcomesActions.addOutcome({data: data}))
  }
}
