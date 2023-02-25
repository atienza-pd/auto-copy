import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-add-copy-path-add-excluded-files-modal',
  templateUrl: './add-copy-path-add-excluded-files-modal.component.html',
  styleUrls: ['./add-copy-path-add-excluded-files-modal.component.scss']
})
export class AddCopyPathAddExcludedFilesModalComponent implements OnInit {
  @Output() hide = new EventEmitter();
  @Output() ok = new EventEmitter();
  @Input() show!: boolean;
  value!: string;
  constructor() { }

  ngOnInit(): void {
  }

  handleOk() {
    this.ok.emit(this.value);
    this.value = '';
  }
  handleCancel() {
    this.hide.emit();
  }

}
