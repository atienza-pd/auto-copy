import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-delete-copy-path-modal',
  templateUrl: './delete-copy-path-modal.component.html',
  styleUrls: ['./delete-copy-path-modal.component.scss'],
})
export class DeleteCopyPathModalComponent implements OnInit {
  @Output() hide = new EventEmitter();
  @Output() ok = new EventEmitter();
  @Input() show!: boolean;
  @Input() id!: number;
  handleOk() {
    this.ok.emit();
  }
  handleCancel() {
     this.hide.emit();
  }

  constructor() {}

  ngOnInit(): void {}
}
