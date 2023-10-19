import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, delay, of, tap } from 'rxjs';
import { incomesData } from 'src/app/data/income';
import { IncomeData } from 'src/app/data/types';
import { transformDataToPreview } from '../helpers/transform';
import { Store, select } from '@ngrx/store';
import * as IncomesActions from '../store/actions';
import { incomesSelector } from '../store/selectors';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';

@UntilDestroy()
@Injectable()
export class IncomeDataService {
  private _data = new BehaviorSubject<IncomeData[]>(incomesData);
  data$: Observable<IncomeData[]> = this._data.asObservable().pipe(delay(2000));

  getPreparedToPreview(month: string) {
    const data = transformDataToPreview(this._data.getValue())
    const monthData = data.find((data)=> data.name === month)

    if(!monthData){
      return;
    }
    return monthData;
  }
}
