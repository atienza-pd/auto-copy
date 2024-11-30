import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzModalModule } from 'ng-zorro-antd/modal';

@Component({
  standalone: true,
  imports: [NzModalModule, FormsModule, NzInputModule],
  selector: 'app-included-files-modal',
  templateUrl: './included-files-modal.component.html',
  styleUrls: ['./included-files-modal.component.scss'],
})
export class IncludedFilesModalComponent {
  public value!: string;
}
