import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CopyPathDto } from '../../../../../api/src/copy-path/copyPathDto';
import { EditCopyPathHttpService } from '../edit-copy-path-http/edit-copy-path-http.service';
import { GetOneCopyPathHttpService } from '../get-one-copy-path-http/get-one-copy-path-http.service';
@Component({
  selector: 'app-edit-copy-path-container',
  templateUrl: './edit-copy-path-container.component.html',
  styleUrls: ['./edit-copy-path-container.component.scss'],
})
export class EditCopyPathContainerComponent implements OnInit {
  copyPath: CopyPathDto = {
    name: '',
    source: '',
    destination: '',
    includeFilesOnly: [],
    excludeDirectories: [],
    excludeFiles: [],
    activeDaysOfWeek: [],
  };
  routeId!: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private getOneCopyPathHttpService: GetOneCopyPathHttpService,
    private editCopyPathHttpService: EditCopyPathHttpService
  ) {}

  ngOnInit(): void {
    this.routeId = this.route.snapshot.paramMap.get('id') ?? '';
    if (this.routeId === '') {
      return;
    }

    this.getOneCopyPathHttpService
      .execute(parseInt(this.routeId))
      .subscribe((copyPath: CopyPathDto) => {
        this.copyPath = copyPath;
      });
  }
  onSubmitForm(copyPath: CopyPathDto) {
    this.editCopyPathHttpService
      .execute(parseInt(this.routeId), copyPath)
      .subscribe(() => {
        this.router.navigate(['..']);
      });
  }
}
