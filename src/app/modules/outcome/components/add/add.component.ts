import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { OutcomeDataService } from '../../services/outcome-data.service';
import { transformDataForSingleChartOutcome, transformForMonthList } from '../../helpers/transform';
import { Observable, map, retry, tap } from 'rxjs';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { FormControl, Validators } from '@angular/forms';
import { SingleChartData, SpendingData } from '../../types/outcome.types';
import { CustomSnackBarComponent } from 'src/app/components/custom-snack-bar/custom-snack-bar.component';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Location } from '@angular/common';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/interfaces/appState.interface';
import * as OutcomesActions from '../../store/actions';

@UntilDestroy()
@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AddComponent {

  @Input({required: true}) set data(value: SingleChartData[] | null) {
    if(value){
      this.chartData = value;
      this.months = transformForMonthList(value)
    }
  } 

  @Output() spentAdded: EventEmitter<{data: SpendingData, month: string}> = new EventEmitter<{data: SpendingData, month: string}>();

  protected chartData!: SingleChartData[];
  protected months: string[] | null = null;
  protected form: FormControl<string> = new FormControl('', Validators.required) as FormControl<string>
 
  constructor(
    private snackBar: MatSnackBar
    ){}

  protected onSubmit(data: SpendingData) {
    if(this.spendExistCheck(this.form.value, data.name, this.chartData)){
      CustomSnackBarComponent.openErrorSnackBar(this.snackBar,'Spend with such name already exist!', 'Close!')
      return;
    }

    CustomSnackBarComponent.openSuccessSnackBar(this.snackBar, 'Spend added!', 'Close');
    this.spentAdded.emit({month: this.form.value, data: data});
    this.form.reset();
  }

  private spendExistCheck(month: string, spendName: string, data: SingleChartData[]): boolean{
    const monthToCheck = data.find((data)=>data.name === month)

    if(!monthToCheck){
      return false;
    }
    
    const alreadyExist = monthToCheck.series.find((data)=>data.name === spendName);
    return alreadyExist ? true : false
  }
}
