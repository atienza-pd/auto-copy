import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzModalModule } from 'ng-zorro-antd/modal';

@Component({
  standalone: true,
  imports: [NzModalModule, FormsModule, NzInputModule],
  selector: 'app-excluded-directories-modal',
  templateUrl: './excluded-directories-modal.component.html',
  styleUrls: ['./excluded-directories-modal.component.scss'],
})
export class ExcludedDirectoriesModalComponent {
  public value!: string;
}
