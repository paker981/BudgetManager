import { Component } from '@angular/core';
import { transformDataForChartOutcome } from '../../helpers/transform';
import { outcomesData } from 'src/app/data/outcome';
import { ChartData } from 'src/app/data/types';
import { OutcomeDataService } from '../../services/outcome-data.service';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';

import { filter, map } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { ViewMonthComponent } from '../dialogs/view-month/view-month.component';

@UntilDestroy()
@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss']
})
export class ContainerComponent {

  protected data!: ChartData[];

  constructor(
    private outcomeService: OutcomeDataService,
    private dialog: MatDialog
    ){
    this.outcomeService.data$.pipe(
      map(transformDataForChartOutcome),
      untilDestroyed(this)
    ).subscribe(val=>this.data=val)
  }

  onSelectedMonth(month: string) {
    
    const dialogData = this.outcomeService.getSingleChartData(month);
    console.log(dialogData);

    const dialogRef = this.dialog.open(ViewMonthComponent, {
      width: 'auto',
      height: 'auto',
      data: { chartData: dialogData } // Przekazujesz dane wybranego miesiąca do dialogu
    });
  
    dialogRef.afterClosed().pipe(
      untilDestroyed(this),
      filter(Boolean)
    )
    .subscribe(result => {
      console.log(result)
      this.outcomeService.addToOutcome(result.data, result.name)
    });
  }
}
