import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { incomesData } from 'src/app/data/income';
import { IncomeData } from 'src/app/data/types';
import { transformDataForChart, transformDataToPreview } from '../helpers/transform';

@Injectable({
  providedIn: 'root'
})
export class IncomeDataService {
  private _data = new BehaviorSubject<IncomeData[]>(incomesData); //narazie nie uzywane
  data$: Observable<IncomeData[]> = this._data.asObservable();

  getPreparedToPreview(month: string) {
    const data = transformDataToPreview(this._data.getValue())
    const monthData = data.find((data)=> data.name === month)

    if(!monthData){
      return;
    }
    return monthData;
  }
}
