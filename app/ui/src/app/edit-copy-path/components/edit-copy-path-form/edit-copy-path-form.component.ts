import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CopyPathDto } from '../../../../../../api/src/copy-path/copyPathDto';

@Component({
  selector: 'app-edit-copy-path-form',
  templateUrl: './edit-copy-path-form.component.html',
  styleUrls: ['./edit-copy-path-form.component.scss']
})
export class EditCopyPathFormComponent implements OnInit {

  @Input() copyPath!: CopyPathDto;

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

  onSubmitForm() {
    this.copyPath.name = this.validateForm.controls['name'].value;
    this.copyPath.source = this.validateForm.controls['source'].value;
    this.copyPath.destination = this.validateForm.controls['destination'].value;
    this.submitForm.emit(this.copyPath);
  }

  validateForm!: FormGroup;
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      name: [this.copyPath.name, [Validators.required]],
      source: [this.copyPath.source, [Validators.required]],
      destination: [this.copyPath.destination, [Validators.required]],
    });
  }

}
