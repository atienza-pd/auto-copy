import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NzModalModule } from 'ng-zorro-antd/modal';

@Component({
  standalone: true,
  imports: [NzModalModule, FormsModule],
  selector: 'app-delete-copy-path-modal',
  templateUrl: './delete-copy-path-modal.component.html',
  styleUrls: ['./delete-copy-path-modal.component.scss'],
})
export class DeleteCopyPathModalComponent {
  @Output() hide = new EventEmitter();
  @Output() ok = new EventEmitter();
  @Input() show!: boolean;
  handleOk() {
    this.ok.emit();
  }
  handleCancel() {
    this.hide.emit();
  }
}
