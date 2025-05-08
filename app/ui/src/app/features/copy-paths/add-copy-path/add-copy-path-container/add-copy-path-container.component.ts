import { Component } from '@angular/core';
import { AddCopyPathDataService } from '../../services/add-copy-path-data/add-copy-path-data.service';
import { Router } from '@angular/router';
import { CopyPathDto } from '../../models';
import { FormEditorComponent } from '../../shared/components/form-editor/form-editor.component';
@Component({
  standalone: true,
  selector: 'app-add-copy-path-container',
  templateUrl: './add-copy-path-container.component.html',
  styleUrls: ['./add-copy-path-container.component.scss'],
  imports: [FormEditorComponent],
})
export class AddCopyPathContainerComponent {
  onSubmitForm(data: CopyPathDto) {
    this.httpService.execute(data).subscribe(() => {
      this.router.navigate(['..']);
    });
  }

  constructor(
    private httpService: AddCopyPathDataService,
    private router: Router
  ) {}
}
