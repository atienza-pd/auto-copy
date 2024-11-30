import {
  Component,
  OnInit,
  Input,
  EventEmitter,
  Output,
  signal,
  inject,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { NZ_MODAL_DATA, NzModalModule } from 'ng-zorro-antd/modal';

@Component({
  standalone: true,
  imports: [NzModalModule, FormsModule, NzCheckboxModule],
  selector: 'app-active-days-of-week-modal',
  templateUrl: './active-days-of-week-modal.component.html',
  styleUrls: ['./active-days-of-week-modal.component.scss'],
})
export class ActiveDaysOfWeekModalComponent implements OnInit {
  private readonly nzModalData: IModalData = inject(NZ_MODAL_DATA);

  public daysOfWeek = signal<CheckBoxModel[]>([
    { label: 'Monday', value: 'Monday' },
    { label: 'Tuesday', value: 'Tuesday' },
    { label: 'Wednesday', value: 'Wednesday' },
    { label: 'Thursday', value: 'Thursday' },
    { label: 'Friday', value: 'Friday' },
    { label: 'Saturday', value: 'Saturday' },
    { label: 'Sunday', value: 'Sunday' },
  ] as CheckBoxModel[]);

  ngOnInit(): void {
    this.daysOfWeek.update((days) => {
      const { selectedDays } = this.nzModalData;

      return [
        ...days.map((day) => {
          if (selectedDays.find((selectedDay) => selectedDay === day.value)) {
            return { ...day, checked: true };
          }
          return day;
        }),
      ];
    });
  }
}

export interface CheckBoxModel {
  label: string;
  value: string;
  checked: boolean;
}

export interface IModalData {
  selectedDays: string[];
}
