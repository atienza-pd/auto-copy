import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-edit-build-json-location-modal',
  templateUrl: './edit-build-json-location-modal.component.html',
  styleUrls: ['./edit-build-json-location-modal.component.scss']
})
export class EditBuildJsonLocationModalComponent implements OnInit {
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
