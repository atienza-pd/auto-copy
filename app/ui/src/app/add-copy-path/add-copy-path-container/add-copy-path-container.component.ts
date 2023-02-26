import { CopyPath } from './../../../../../api/src/copy-path/copyPath';
import { Component, OnInit } from '@angular/core';
import { AddCopyPathHttpService } from '../add-copy-path-http/add-copy-path-http.service';

@Component({
  selector: 'app-add-copy-path-container',
  templateUrl: './add-copy-path-container.component.html',
  styleUrls: ['./add-copy-path-container.component.scss'],
})
export class AddCopyPathContainerComponent implements OnInit {
  onSubmitForm(data: CopyPath) {
    this.httpService.execute(data).subscribe();
  }

  constructor(private httpService : AddCopyPathHttpService) {}

  ngOnInit(): void {}
}
