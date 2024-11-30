import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzModalModule } from 'ng-zorro-antd/modal';

@Component({
  standalone: true,
  imports: [NzModalModule, FormsModule, NzInputModule],
  selector: 'app-active-days-of-week-modal',
  templateUrl: './add-copy-path-add-active-days-of-week-modal.component.html',
  styleUrls: ['./add-copy-path-add-active-days-of-week-modal.component.scss'],
})
export class AddCopyPathAddActiveDaysOfWeekModalComponent implements OnInit {
  @Input() show = false;
  @Output() ok = new EventEmitter();
  @Output() hide = new EventEmitter();
  handleCancel() {
    this.hide.emit();
  }
  handleOk() {
    this.ok.emit(this.value);
    this.value = '';
  }
  value = '';
  constructor() {}

  ngOnInit(): void {}
}
