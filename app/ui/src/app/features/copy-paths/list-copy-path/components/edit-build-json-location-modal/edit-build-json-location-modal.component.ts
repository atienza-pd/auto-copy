import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzModalModule } from 'ng-zorro-antd/modal';

@Component({
  standalone: true,
  imports: [NzModalModule, FormsModule, NzInputModule],
  selector: 'app-edit-build-json-location-modal',
  templateUrl: './edit-build-json-location-modal.component.html',
  styleUrls: ['./edit-build-json-location-modal.component.scss'],
})
export class EditBuildJsonLocationModalComponent {
  @Output() hide = new EventEmitter();
  @Output() ok = new EventEmitter();
  @Input() show!: boolean;
  @Input() location = '';

  handleOk() {
    this.ok.emit(this.location);
  }
  handleCancel() {
    this.hide.emit();
  }
}
