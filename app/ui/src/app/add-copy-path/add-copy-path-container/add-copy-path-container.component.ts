import { CopyPath } from './../../../../../api/src/copy-path/copyPath';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-copy-path-container',
  templateUrl: './add-copy-path-container.component.html',
  styleUrls: ['./add-copy-path-container.component.scss'],
})
export class AddCopyPathContainerComponent implements OnInit {
  onSubmitForm(data: CopyPath) {
    console.log(data);
  }

  constructor() {}

  ngOnInit(): void {}
}
