import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CopyPath } from '../../../../../../api/src/copy-path/copyPath';

@Component({
  selector: 'app-add-copy-path-form',
  templateUrl: './add-copy-path-form.component.html',
  styleUrls: ['./add-copy-path-form.component.scss'],
})
export class AddCopyPathFormComponent implements OnInit {
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
  showAddIncludeFileModal: boolean = false;
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
  copyPath: CopyPath = {
    name: '',
    source: '',
    destination: '',
    includeFilesOnly: [],
    excludeDirectories: [],
    excludeFiles: [],
  };
  onSubmitForm() {
    this.copyPath.name = this.validateForm.controls['name'].value;
    this.copyPath.source = this.validateForm.controls['source'].value;
    this.copyPath.destination = this.validateForm.controls['destination'].value;
    this.submitForm.emit(this.copyPath);
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
