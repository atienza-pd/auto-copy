import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NZ_MODAL_DATA } from 'ng-zorro-antd/modal';

@Component({
  selector: 'app-directory-form-modal',
  imports: [CommonModule, FormsModule, NzInputModule],
  templateUrl: './directory-form-modal.component.html',
  styleUrl: './directory-form-modal.component.scss',
})
export class DirectoryFormModalComponent {
  public data: { placeHolder: string } = inject(NZ_MODAL_DATA);
  public value: string = '';
}
