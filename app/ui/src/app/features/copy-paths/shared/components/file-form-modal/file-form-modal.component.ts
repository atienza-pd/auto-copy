import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NZ_MODAL_DATA, NzModalModule } from 'ng-zorro-antd/modal';

@Component({
  standalone: true,
  imports: [NzModalModule, FormsModule, NzInputModule],
  selector: 'app-file-form-modal',
  templateUrl: './file-form-modal.component.html',
  styleUrls: ['./file-form-modal.component.scss'],
})
export class FileFormModalComponent {
  public data: { placeHolder: string } | null = inject(NZ_MODAL_DATA);

  public value!: string;
}
