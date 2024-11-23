import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({ standalone: false,
  selector: 'app-add-copy-path-add-active-days-of-week-modal',
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
