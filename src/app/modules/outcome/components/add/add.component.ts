import { Component, OnInit } from '@angular/core';
import { OutcomeDataService } from '../../services/outcome-data.service';
import { transformDataForMonthList, transformDataForSingleChartOutcome, transformForMonthList } from '../../helpers/transform';
import { map, retry } from 'rxjs';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { FormControl, Validators } from '@angular/forms';
import { SingleChartData, SpendingData } from '../../types/outcome.types';
import { CustomSnackBarComponent } from 'src/app/components/custom-snack-bar/custom-snack-bar.component';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Location } from '@angular/common';

@UntilDestroy()
@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {

  protected data: SingleChartData[] | null = null;
  protected months: string[] | null = null;
  protected form: FormControl<string> = new FormControl('', Validators.required) as FormControl<string>
 
  constructor(
    private outcomeService: OutcomeDataService,
    private snackBar: MatSnackBar,
    private location: Location
    ){}

  ngOnInit(): void {
    this.outcomeService.data$.pipe(
      map(transformDataForSingleChartOutcome),
      untilDestroyed(this)
    ).subscribe(val=>{
      this.data=val;
      this.months = transformForMonthList(val);
    })
  }

  protected onSubmit(data: SpendingData) {
    console.log(this.spendExistCheck(this.form.value, data.name))
    console.log(this.months?.includes(this.form.value))

    if(this.spendExistCheck(this.form.value, data.name)){
      CustomSnackBarComponent.openErrorSnackBar(this.snackBar,'Spend with such name already exist!', 'Close!')
      return;
    }

    this.outcomeService.addToOutcome(data, this.form.value)
    CustomSnackBarComponent.openSuccessSnackBar(this.snackBar, 'Spend added!', 'Close');
    this.location.back();
  }

  private spendExistCheck(month: string, spendName: string): boolean{
    const monthToCheck = this.data?.find((data)=>data.name === month)

    if(!monthToCheck){
      return false;
    }
    const alreadyExist = monthToCheck.series.find((data)=>data.name === spendName);

    return alreadyExist ? true : false
  }
}
