import { Component, OnInit } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd/message';
import { BuildCopyPathJsonHttpService } from '../../build-copy-path-json-http/build-copy-path-json-http.service';

@Component({
  selector: 'app-copy-path-menu-control',
  templateUrl: './copy-path-menu-control.component.html',
  styleUrls: ['./copy-path-menu-control.component.scss'],
})
export class CopyPathMenuControlComponent {
  constructor(private buildJsonHttp: BuildCopyPathJsonHttpService, private message: NzMessageService) {

  }
  onBuildJson() {
    this.buildJsonHttp.execute().subscribe(() => {
      this.message.info('Building Json Succeed')
    });
  }

  onBack() { }
}
