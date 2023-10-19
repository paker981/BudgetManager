import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { OutcomeToAddData, SpendingData, SpendingForm } from '../../../types/outcome.types';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { OutcomeDataService } from '../../../services/outcome-data.service';
import { CustomSnackBarComponent } from 'src/app/components/custom-snack-bar/custom-snack-bar.component';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-view-month',
  templateUrl: './view-month.component.html',
  styleUrls: ['./view-month.component.scss']
})
export class ViewMonthComponent implements OnInit {
  protected showAddForm: boolean = false;
  protected chartData!: any[];

  constructor(
    private dialog: MatDialogRef<ViewMonthComponent>,
    @Inject(MAT_DIALOG_DATA) protected data: any,
    private snackBar: MatSnackBar){}

  ngOnInit(): void {
    this.chartData = this.data.chartData.series;
  }

  protected onAdd(data: SpendingData){
    const alreadyExist = this.data.chartData.series.find((chartData: { name: string; })=>chartData.name === data.name)
    if(alreadyExist){
      CustomSnackBarComponent.openErrorSnackBar(this.snackBar,'Spend with such name already exist!', 'Close!')
      return;
    }
    
    this.dialog.close({month: this.data.chartData.name, data: data} as OutcomeToAddData);
    CustomSnackBarComponent.openSuccessSnackBar(this.snackBar, 'Spend added!', 'Close');
  }
}
