import { CopyPathListHttpService } from './../copy-path-list-http/copy-path-list-http.service';
import { Component, OnInit } from '@angular/core';
import { CopyPathDto } from '../../../../../api/src/copy-path/copyPath';
import { DeleteCopyPathHttpService } from '../delete-copy-path-http/delete-copy-path-http.service';

@Component({
  selector: 'app-list-copy-path-container',
  templateUrl: './list-copy-path-container.component.html',
  styleUrls: ['./list-copy-path-container.component.scss'],
})
export class ListCopyPathContainerComponent implements OnInit {
  copyPaths!: CopyPathDto[];
  showRemoveCopyPathModal = false;
  id!: number;
  constructor(
    private httpService: CopyPathListHttpService,
    private httpDeleteService: DeleteCopyPathHttpService
  ) {}

  ngOnInit(): void {
    this.loadData();
  }

  onOkRemoveCopyPathModal() {
    this.showRemoveCopyPathModal = false;
    this.httpDeleteService.execute(this.id).subscribe(() => {
      this.loadData();
    });
  }

  onHideRemoveCopyPathModal() {
    this.showRemoveCopyPathModal = false;
  }

  onShowRemoveCopyPathModal(id: number) {
    this.showRemoveCopyPathModal = true;
    this.id = id;
  }

  loadData() {
    this.httpService.execute().subscribe((copyPaths) => {
      this.copyPaths = copyPaths;
    });
  }
}
