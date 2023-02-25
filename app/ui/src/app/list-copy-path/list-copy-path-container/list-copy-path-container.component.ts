import { CopyPathListHttpService } from './../copy-path-list-http/copy-path-list-http.service';
import { Component, OnInit } from '@angular/core';
import { CopyPath } from '../../../../../api/src/copy-path/copyPath';

@Component({
  selector: 'app-list-copy-path-container',
  templateUrl: './list-copy-path-container.component.html',
  styleUrls: ['./list-copy-path-container.component.scss']
})
export class ListCopyPathContainerComponent implements OnInit {
  copyPaths! : CopyPath[];
  constructor(private httpService : CopyPathListHttpService) { }

  ngOnInit(): void {
    this.httpService.execute().subscribe(copyPaths => {
      this.copyPaths = copyPaths;
    });
  }

}
