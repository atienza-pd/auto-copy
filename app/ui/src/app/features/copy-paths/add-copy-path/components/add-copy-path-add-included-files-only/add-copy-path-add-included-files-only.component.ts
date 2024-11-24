import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzModalModule } from 'ng-zorro-antd/modal';

@Component({
  standalone: true,
  imports: [NzModalModule, FormsModule, NzInputModule],
  selector: 'app-add-copy-path-add-included-files-only',
  templateUrl: './add-copy-path-add-included-files-only.component.html',
  styleUrls: ['./add-copy-path-add-included-files-only.component.scss'],
})
export class AddCopyPathAddIncludedFilesOnlyComponent {
  @Output() hide = new EventEmitter();
  @Output() ok = new EventEmitter();
  value!: string;
  handleOk() {
    this.ok.emit(this.value);
    this.value = '';
  }
  handleCancel() {
    this.hide.emit();
  }
  @Input() isVisible!: boolean;
}
