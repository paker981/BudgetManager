import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { SpendingData, SpendingForm } from '../../types/outcome.types';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CustomSnackBarComponent } from 'src/app/components/custom-snack-bar/custom-snack-bar.component';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent {

  protected form: FormGroup<SpendingForm>;

  @Output() formSubmitted: EventEmitter<SpendingData> = new EventEmitter<SpendingData>();

  constructor(private snackBar: MatSnackBar){
    this.form = new FormGroup<SpendingForm>({
      name: new FormControl<string>('',Validators.required) as FormControl<string>,
      value: new FormControl<number>('' as unknown as number, Validators.required) as FormControl<number>
    })
  }

  onAddExpense(){
    if(this.form.invalid){
      CustomSnackBarComponent.openErrorSnackBar(this.snackBar, 'Forminvalid', 'Close!')
      return;
    }

    this.formSubmitted.emit(this.form.value as SpendingData);
    this.form.reset();
  }
}
