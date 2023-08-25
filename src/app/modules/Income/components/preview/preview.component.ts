import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { IncomeCategory, IncomeData } from 'src/app/data/types';
import { PreviewData } from '../../types/incomeData.types';

@Component({
  selector: 'app-preview',
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PreviewComponent {
  @Input({required: true}) data: PreviewData | null = null;
}
