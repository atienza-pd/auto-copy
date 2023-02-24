import { CopyPathListHttpService } from './../copy-path-list-http/copy-path-list-http.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-copy-path-container',
  templateUrl: './list-copy-path-container.component.html',
  styleUrls: ['./list-copy-path-container.component.scss']
})
export class ListCopyPathContainerComponent implements OnInit {

  constructor(private httpService : CopyPathListHttpService) { }

  ngOnInit(): void {
    this.httpService.execute().subscribe();
  }

}
