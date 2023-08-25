import { Component } from '@angular/core';
import { ChartData, IncomeCategory, IncomeData, OutcomeData } from 'src/app/data/types';
import { IncomeDataService } from '../../services/income-data.service';
import { transformDataForChart } from '../../helpers/transform';
import { map } from 'rxjs';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { PreviewData } from '../../types/incomeData.types';

@UntilDestroy()
@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss']
})
export class ContainerComponent {

  protected selectedMonth!: PreviewData | null;
  protected data!: ChartData[] 

  constructor(private incomeDataService: IncomeDataService){
    this.incomeDataService.data$.pipe(
      map(transformDataForChart),
      untilDestroyed(this),
    ).subscribe(val=>this.data=val)
  }

  onMonthHovered(month: string){
    if(month.length === 0){
      this.selectedMonth = null;
      return;
    }

    const monthSummary = this.incomeDataService.getPreparedToPreview(month);
    this.selectedMonth = monthSummary ? monthSummary : null
  }
}
