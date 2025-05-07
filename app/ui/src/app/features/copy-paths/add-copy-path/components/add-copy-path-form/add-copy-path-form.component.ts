import { Component, EventEmitter, inject, OnInit, Output } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { CopyPathDto } from '../../../models';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzListModule } from 'ng-zorro-antd/list';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { AddCopyPathAddActiveDaysOfWeekModalComponent } from '../add-copy-path-add-active-days-of-week-modal/add-copy-path-add-active-days-of-week-modal.component';
import { CommonModule } from '@angular/common';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzModalService } from 'ng-zorro-antd/modal';
import { FileFormModalComponent } from '../../../shared/components/file-form-modal/file-form-modal.component';
import { DirectoryFormModalComponent } from '../../../shared/components/directory-form-modal/directory-form-modal.component';

@Component({
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NzFormModule,
    NzListModule,
    NzButtonModule,
    AddCopyPathAddActiveDaysOfWeekModalComponent,
    NzInputModule,
  ],
  selector: 'app-add-copy-path-form',
  templateUrl: './add-copy-path-form.component.html',
  styleUrls: ['./add-copy-path-form.component.scss'],
})
export class AddCopyPathFormComponent implements OnInit {
  private modalService = inject(NzModalService);

  onRemoveActiveDaysOfWeek(index: number) {
    this.copyPath.activeDaysOfWeek.splice(index, 1);
  }
  onHideAddActiveDaysOfWeekModal() {
    this.showAddActiveDaysOfWeekModal = false;
  }
  onOkAddActiveDaysOfWeekModal(day: string) {
    this.copyPath.activeDaysOfWeek.push(day);
  }
  showAddActiveDaysOfWeekModal: boolean = false;
  onRemoveExcludedDirectories(index: number) {
    this.copyPath.excludeDirectories.splice(index, 1);
  }
  onHideAddExcludedDiretoryModal() {}
  onOkAddExcludedDiretoryModal(name: string) {
    this.copyPath.excludeDirectories.push(name);
  }

  onOkAddExcludedFileModal(name: string) {
    this.copyPath.excludeFiles.push(name);
  }

  onRemoveIncludedFiles(index: number) {
    this.copyPath.includeFilesOnly.splice(index, 1);
  }

  onRemoveExcludedFiles(index: number) {
    this.copyPath.excludeFiles.splice(index, 1);
  }

  public addExcludedDirectory(): void {
    const modal = this.modalService.create({
      nzTitle: 'Add Excluded Directory',
      nzContent: DirectoryFormModalComponent,
      nzData: {
        placeHolder: 'Excluded Directory Only',
      },
      nzFooter: [
        {
          label: 'Close',
          onClick: () => modal.destroy(),
        },
        {
          label: 'Confirm',
          type: 'primary',
          onClick: (component) => {
            this.copyPath.excludeDirectories.push(component?.value);
            modal.destroy();
          },
        },
      ],
      nzCentered: true,
      nzWidth: '600px',
      nzStyle: { top: '20px' },
      nzBodyStyle: { padding: '2em' },
    });
  }

  public addExcludeFiles(): void {
    const modal = this.modalService.create({
      nzTitle: 'Add Excluded Files Only',
      nzContent: FileFormModalComponent,
      nzData: {
        placeHolder: 'Excluded Files Only',
      },
      nzFooter: [
        {
          label: 'Close',
          onClick: () => modal.destroy(),
        },
        {
          label: 'Confirm',
          type: 'primary',
          onClick: (component) => {
            this.copyPath.excludeFiles.push(component?.value);
            modal.destroy();
          },
        },
      ],
      nzCentered: true,
      nzWidth: '600px',
      nzStyle: { top: '20px' },
      nzBodyStyle: { padding: '2em' },
    });
  }

  public addIncludeFile(): void {
    const modal = this.modalService.create({
      nzTitle: 'Add Included Files Only',
      nzContent: FileFormModalComponent,
      nzData: {
        placeHolder: 'Included Files Only',
      },
      nzFooter: [
        {
          label: 'Close',
          onClick: () => modal.destroy(),
        },
        {
          label: 'Confirm',
          type: 'primary',
          onClick: (component) => {
            this.copyPath.includeFilesOnly.push(component?.value);
            modal.destroy();
          },
        },
      ],
      nzCentered: true,
      nzWidth: '600px',
      nzStyle: { top: '20px' },
      nzBodyStyle: { padding: '2em' },
    });
  }

  @Output() submitForm = new EventEmitter();
  copyPath: CopyPathDto = {
    name: '',
    source: '',
    destination: '',
    includeFilesOnly: [],
    excludeDirectories: [],
    excludeFiles: [],
    activeDaysOfWeek: [],
    disable: false,
    showProgressInLogs: false,
    id: undefined,
  };
  onSubmitForm() {
    if (this.validateForm.invalid) {
      return;
    }
    this.copyPath.name = this.validateForm.controls['name'].value;
    this.copyPath.source = this.validateForm.controls['source'].value;
    this.copyPath.destination = this.validateForm.controls['destination'].value;
    this.submitForm.emit(this.copyPath);
  }

  addActiveDaysOfWeek() {
    this.showAddActiveDaysOfWeekModal = true;
  }

  validateForm!: FormGroup;
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      name: [null, [Validators.required]],
      source: [null, [Validators.required]],
      destination: [null, [Validators.required]],
    });
  }
}
