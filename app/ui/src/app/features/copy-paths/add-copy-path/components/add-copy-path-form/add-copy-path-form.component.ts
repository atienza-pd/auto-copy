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
import { AddCopyPathAddIncludedFilesOnlyComponent } from '../add-copy-path-add-included-files-only/add-copy-path-add-included-files-only.component';
import { AddCopyPathAddExcludedFilesModalComponent } from '../add-copy-path-add-excluded-files-modal/add-copy-path-add-excluded-files-modal.component';
import { AddCopyPathAddExcludedDirectoriesModalComponent } from '../add-copy-path-add-excluded-directories-modal/add-copy-path-add-excluded-directories-modal.component';
import { AddCopyPathAddActiveDaysOfWeekModalComponent } from '../add-copy-path-add-active-days-of-week-modal/add-copy-path-add-active-days-of-week-modal.component';
import { CommonModule } from '@angular/common';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzModalService } from 'ng-zorro-antd/modal';
import { FileFormModalComponent } from '../../../shared/components/file-form-modal/file-form-modal.component';

@Component({
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NzFormModule,
    NzListModule,
    NzButtonModule,
    AddCopyPathAddExcludedFilesModalComponent,
    AddCopyPathAddExcludedDirectoriesModalComponent,
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
    this.showAddExcludedDirectoryModal = false;
  }
  showAddActiveDaysOfWeekModal: boolean = false;
  onRemoveExcludedDirectories(index: number) {
    this.copyPath.excludeDirectories.splice(index, 1);
  }
  onHideAddExcludedDiretoryModal() {
    this.showAddExcludedDirectoryModal = false;
  }
  onOkAddExcludedDiretoryModal(name: string) {
    this.copyPath.excludeDirectories.push(name);
    this.showAddExcludedDirectoryModal = false;
  }

  showAddExcludedDirectoryModal!: boolean;

  onOkAddExcludedFileModal(name: string) {
    this.copyPath.excludeFiles.push(name);
  }

  onRemoveIncludedFiles(index: number) {
    this.copyPath.includeFilesOnly.splice(index, 1);
  }
  onRemoveExcludedFiles(index: number) {
    this.copyPath.excludeFiles.splice(index, 1);
  }
  onHideAddIncludeFileModal() {
    this.showAddIncludeFileModal = false;
  }
  showAddIncludeFileModal = false;

  addExcludeDirectories() {
    this.showAddExcludedDirectoryModal = true;
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
            this.showAddIncludeFileModal = false;
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
            this.showAddIncludeFileModal = false;
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
