import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  inject,
  input,
  Input,
  model,
  OnInit,
  Output,
  ViewContainerRef,
} from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { CopyPathDto } from '../../../models';
import { CommonModule } from '@angular/common';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzListModule } from 'ng-zorro-antd/list';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzSwitchModule } from 'ng-zorro-antd/switch';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzModalService } from 'ng-zorro-antd/modal';
import { ExcludedFilesModalComponent } from '../excluded-files-modal/excluded-files-modal.component';
import { ExcludedDirectoriesModalComponent } from '../excluded-directories-modal/excluded-directories-modal.component';
import { FileFormModalComponent } from '../file-form-modal/file-form-modal.component';
import { ActiveDaysOfWeekModalComponent } from '../active-days-of-week-modal/active-days-of-week-modal.component';

@Component({
  standalone: true,
  imports: [
    CommonModule,
    NzFormModule,
    ReactiveFormsModule,
    NzButtonModule,
    NzListModule,
    NzSwitchModule,
    NzInputModule,
  ],
  selector: 'app-form-editor',
  templateUrl: './form-editor.component.html',
  styleUrls: ['./form-editor.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormEditorComponent implements OnInit {
  private modalService = inject(NzModalService);
  private viewContainerRef = inject(ViewContainerRef);
  private fb = inject(FormBuilder);
  public span: number = 12;
  public copyPath = model<CopyPathDto>({} as CopyPathDto);
  @Output() submitForm = new EventEmitter();

  public validateForm!: FormGroup;

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      name: [this.copyPath.name, [Validators.required]],
      source: [this.copyPath().source, [Validators.required]],
      destination: [this.copyPath().destination, [Validators.required]],
      showProgressInLogs: this.copyPath().showProgressInLogs,
      disable: this.copyPath().disable,
    });
  }

  public onRemoveActiveDaysOfWeek(index: number) {
    this.copyPath.update((x) => {
      x.activeDaysOfWeek.splice(index, 1);
      return x;
    });
  }

  public onRemoveExcludedDirectories(index: number) {
    this.copyPath.update((x) => {
      x.excludeDirectories.splice(index, 1);
      return x;
    });
  }

  public onRemoveIncludedFiles(index: number) {
    this.copyPath.update((x) => {
      x.includeFilesOnly.splice(index, 1);
      return x;
    });
  }

  public onRemoveExcludedFiles(index: number) {
    this.copyPath.update((x) => {
      x.excludeFiles.splice(index, 1);
      return x;
    });
  }

  public openExcludeFilesModal() {
    this.modalService.create({
      nzTitle: 'Exclude Files',
      nzContent: ExcludedFilesModalComponent,
      nzViewContainerRef: this.viewContainerRef,
      nzOnOk: ({ value }) => {
        this.copyPath.update((x) => {
          x.excludeFiles.push(value);
          return x;
        });
      },
    });
  }

  public openExcludeDirectoriesModal() {
    this.modalService.create({
      nzTitle: 'Exclude Directory',
      nzContent: ExcludedDirectoriesModalComponent,
      nzViewContainerRef: this.viewContainerRef,
      nzOnOk: ({ value }) => {
        this.copyPath.update((x) => {
          x.excludeDirectories.push(value);
          return x;
        });
      },
    });
  }

  public openIncludeFileModal() {
    this.modalService.create({
      nzTitle: 'Included File',
      nzContent: FileFormModalComponent,
      nzViewContainerRef: this.viewContainerRef,
      nzOnOk: ({ value }) => {
        this.copyPath.update((x) => {
          x.includeFilesOnly.push(value);
          return x;
        });
      },
    });
  }

  public openActiveDaysOfWeekModal() {
    this.modalService.create({
      nzTitle: 'Active Day of Week',
      nzContent: ActiveDaysOfWeekModalComponent,
      nzViewContainerRef: this.viewContainerRef,
      nzData: { selectedDays: this.copyPath().activeDaysOfWeek },
      nzOnOk: ({ daysOfWeek }) => {
        this.copyPath.update((previous) => {
          previous.activeDaysOfWeek = [
            ...daysOfWeek()
              .filter((y) => y.checked)
              .map((y) => y.label),
          ];
          return { ...previous };
        });
      },
    });
  }

  public onSubmitForm() {
    this.submitForm.emit({
      ...this.copyPath(),
      ...this.validateForm.getRawValue(),
    });
  }
}
