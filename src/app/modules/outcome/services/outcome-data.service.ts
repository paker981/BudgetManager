import { Injectable } from '@angular/core';
import { IncomeData, OutcomeData } from 'src/app/data/types';
import { transformDataForChartOutcome, transformDataForSingleChartOutcome } from '../helpers/transform';
import { outcomesData } from 'src/app/data/outcome';
import { OutcomeToAddData, SingleChartData, SpendingData } from '../types/outcome.types';
import { incomesData } from 'src/app/data/income';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CustomSnackBarComponent } from 'src/app/components/custom-snack-bar/custom-snack-bar.component';

@Injectable({
  providedIn: 'root'
})
export class OutcomeDataService {

  private data: BehaviorSubject<OutcomeData[]> = new BehaviorSubject<OutcomeData[]>(outcomesData);
  data$: Observable<OutcomeData[]> = this.data.asObservable();

  constructor(private snackBar: MatSnackBar){}

  addToOutcome({data, month}: OutcomeToAddData): Observable<boolean>{
    const outcomesData = this.data.getValue()
    const outcomesDataCopy = outcomesData.map(obj => ({ ...obj }));
    const selectedMonthIndex = outcomesData.findIndex(expenseObj => Object.keys(expenseObj)[0] === month);

    if(selectedMonthIndex === -1){
      CustomSnackBarComponent.openErrorSnackBar(this.snackBar, 'Bad request', 'Close');
      throw new Error('Bad request!');
    }

      outcomesDataCopy[selectedMonthIndex] = {
        ...outcomesDataCopy[selectedMonthIndex],
        [month]: {
          ...outcomesDataCopy[selectedMonthIndex][month],
          [data.name]: data.value
        }
      };

    outcomesDataCopy[selectedMonthIndex][month][data.name] = data.value;
    this.data.next(outcomesDataCopy);
    return of(true);
  }
}
