import { Injectable } from '@angular/core';
import { IncomeData, OutcomeData } from 'src/app/data/types';
import { transformDataForChartOutcome, transformDataForSingleChartOutcome } from '../helpers/transform';
import { outcomesData } from 'src/app/data/outcome';
import { SpendingData } from '../types/outcome.types';
import { incomesData } from 'src/app/data/income';
import { BehaviorSubject, Observable } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CustomSnackBarComponent } from 'src/app/components/custom-snack-bar/custom-snack-bar.component';

@Injectable({
  providedIn: 'root'
})
export class OutcomeDataService {

  private data: BehaviorSubject<OutcomeData[]> = new BehaviorSubject<OutcomeData[]>(outcomesData);
  data$: Observable<OutcomeData[]> = this.data.asObservable();

  constructor(private snackBar: MatSnackBar){}

  getSingleChartData(month: string) {
    const singleCharData = transformDataForSingleChartOutcome(this.data.getValue());
    const monthData = singleCharData.find((data)=> data.name === month)

    if(!monthData){
      return;
    }
    return monthData;
  }


  addToOutcome(data: SpendingData, month: string){
    const outcomesData = this.data.getValue()
    const selectedMonthIndex = outcomesData.findIndex(expenseObj => Object.keys(expenseObj)[0] === month);

    if(selectedMonthIndex === -1){
      CustomSnackBarComponent.openErrorSnackBar(this.snackBar, 'Bad request', 'Close');
      return;
    }
      // Dodaj nowy wydatek do istniejącego miesiąca
    outcomesData[selectedMonthIndex][month][data.name] = data.value;
    this.data.next(outcomesData);
  }
}
