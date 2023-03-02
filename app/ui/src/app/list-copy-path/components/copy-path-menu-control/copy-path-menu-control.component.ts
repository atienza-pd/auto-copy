
import { Component, EventEmitter, Injectable, Input, OnInit, Output } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd/message';
import { Observable } from 'rxjs';
import { BuildJsonLocationDto } from '../../../../../../api/src/copy-path/buildJsonLocationDto';
import { BuildCopyPathJsonHttpService } from '../../build-copy-path-json-http/build-copy-path-json-http.service';
import { GetFirstBuildJsonLocationHttpService } from '../../list-copy-path-container/list-copy-path-container.component';

@Component({
  selector: 'app-copy-path-menu-control',
  templateUrl: './copy-path-menu-control.component.html',
  styleUrls: ['./copy-path-menu-control.component.scss'],
})
export class CopyPathMenuControlComponent implements OnInit {
  @Output() showEditBuildJsonLocationModal = new EventEmitter();
  @Input() location$!: Observable<string>;
  constructor(private buildJsonHttp: BuildCopyPathJsonHttpService,
    private message: NzMessageService) {

  }
  ngOnInit(): void {

  }
  onBuildJson() {
    this.buildJsonHttp.execute().subscribe(() => {
      this.message.info('Building Json Succeed')
    });
  }

  onShowEditBuildJsonLocationModal() {
    this.showEditBuildJsonLocationModal.emit();
  }

  onBack() { }
}


