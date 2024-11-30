import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzModalModule } from 'ng-zorro-antd/modal';

@Component({
  standalone: true,
  imports: [NzModalModule, FormsModule, NzInputModule],
  selector: 'app-excluded-files-modal',
  templateUrl: './excluded-files-modal.component.html',
  styleUrls: ['./excluded-files-modal.component.scss'],
})
export class ExcludedFilesModalComponent {
  public value!: string;
}
