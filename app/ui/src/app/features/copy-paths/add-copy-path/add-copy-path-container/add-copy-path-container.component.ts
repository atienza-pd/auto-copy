import { Component } from '@angular/core';
import { AddCopyPathDataService } from '../../services/add-copy-path-data/add-copy-path-data.service';
import { Router } from '@angular/router';
import { CopyPathDto } from '../../models';
import { AddCopyPathFormComponent } from '../components/add-copy-path-form/add-copy-path-form.component';
@Component({
  standalone: true,
  selector: 'app-add-copy-path-container',
  templateUrl: './add-copy-path-container.component.html',
  styleUrls: ['./add-copy-path-container.component.scss'],
  imports: [AddCopyPathFormComponent],
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
