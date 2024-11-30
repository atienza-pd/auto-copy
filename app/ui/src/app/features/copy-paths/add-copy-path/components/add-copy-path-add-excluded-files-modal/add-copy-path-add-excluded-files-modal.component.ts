import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzModalModule } from 'ng-zorro-antd/modal';

@Component({
  standalone: true,
  imports: [NzModalModule, FormsModule, NzInputModule],
  selector: 'app-excluded-files-modal',
  templateUrl: './add-copy-path-add-excluded-files-modal.component.html',
  styleUrls: ['./add-copy-path-add-excluded-files-modal.component.scss'],
})
export class AddCopyPathAddExcludedFilesModalComponent {
  @Output() hide = new EventEmitter();
  @Output() ok = new EventEmitter();
  @Input() show!: boolean;
  value!: string;

  handleOk() {
    this.ok.emit(this.value);
    this.value = '';
  }
  handleCancel() {
    this.hide.emit();
  }
}
