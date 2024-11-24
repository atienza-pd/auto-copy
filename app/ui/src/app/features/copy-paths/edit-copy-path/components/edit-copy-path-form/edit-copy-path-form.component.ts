import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
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
import { AddCopyPathAddIncludedFilesOnlyComponent } from '../../../add-copy-path/components/add-copy-path-add-included-files-only/add-copy-path-add-included-files-only.component';
import { AddCopyPathAddExcludedFilesModalComponent } from '../../../add-copy-path/components/add-copy-path-add-excluded-files-modal/add-copy-path-add-excluded-files-modal.component';
import { AddCopyPathAddExcludedDirectoriesModalComponent } from '../../../add-copy-path/components/add-copy-path-add-excluded-directories-modal/add-copy-path-add-excluded-directories-modal.component';
import { AddCopyPathAddActiveDaysOfWeekModalComponent } from '../../../add-copy-path/components/add-copy-path-add-active-days-of-week-modal/add-copy-path-add-active-days-of-week-modal.component';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzSwitchModule } from 'ng-zorro-antd/switch';
import { NzInputModule } from 'ng-zorro-antd/input';

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
    AddCopyPathAddIncludedFilesOnlyComponent,
    AddCopyPathAddExcludedFilesModalComponent,
    AddCopyPathAddExcludedDirectoriesModalComponent,
    AddCopyPathAddActiveDaysOfWeekModalComponent,
  ],
  selector: 'app-edit-copy-path-form',
  templateUrl: './edit-copy-path-form.component.html',
  styleUrls: ['./edit-copy-path-form.component.scss'],
})
export class EditCopyPathFormComponent implements OnInit {
  public span: number = 12;
  @Input() copyPath!: CopyPathDto;
  showAddActiveDaysOfWeekModal = false;

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
  showAddExcludedFileModal!: boolean;
  showAddExcludedDirectoryModal!: boolean;

  onHideAddExcludedFileModal() {
    this.showAddExcludedFileModal = false;
  }
  onOkAddExcludedFileModal(name: string) {
    this.copyPath.excludeFiles.push(name);
    this.showAddExcludedFileModal = false;
  }

  onRemoveIncludedFiles(index: number) {
    this.copyPath.includeFilesOnly.splice(index, 1);
  }
  onRemoveExcludedFiles(index: number) {
    this.copyPath.excludeFiles.splice(index, 1);
  }
  onOkAddIncludeFileModal(name: string) {
    this.copyPath.includeFilesOnly.push(name);
    this.showAddIncludeFileModal = false;
  }
  onHideAddIncludeFileModal() {
    this.showAddIncludeFileModal = false;
  }
  showAddIncludeFileModal = false;
  addExcludeFiles() {
    this.showAddExcludedFileModal = true;
  }
  addExcludeDirectories() {
    this.showAddExcludedDirectoryModal = true;
  }
  addIncludeFile() {
    this.showAddIncludeFileModal = true;
  }

  @Output() submitForm = new EventEmitter();

  onSubmitForm() {
    this.submitForm.emit({
      ...this.copyPath,
      ...this.validateForm.getRawValue(),
    });
  }
  addActiveDaysOfWeek() {
    this.showAddActiveDaysOfWeekModal = true;
  }
  onRemoveActiveDaysOfWeek(index: number) {
    this.copyPath.activeDaysOfWeek.splice(index, 1);
  }

  onOkAddActiveDaysOfWeekModal(day: string) {
    this.copyPath.activeDaysOfWeek.push(day);
    this.showAddExcludedDirectoryModal = false;
  }
  onHideAddActiveDaysOfWeekModal() {
    this.showAddActiveDaysOfWeekModal = false;
  }
  validateForm!: FormGroup;
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      name: [this.copyPath.name, [Validators.required]],
      source: [this.copyPath.source, [Validators.required]],
      destination: [this.copyPath.destination, [Validators.required]],
      showProgressInLogs: this.copyPath.showProgressInLogs,
      disable: this.copyPath.disable,
    });
  }
}
