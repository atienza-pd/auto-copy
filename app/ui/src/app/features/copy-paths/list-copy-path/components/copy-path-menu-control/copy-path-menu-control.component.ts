import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd/message';
import { Observable } from 'rxjs';
import { BuildCopyPathJsonHttpService } from '../../build-copy-path-json-http/build-copy-path-json-http.service';
import { FormsModule } from '@angular/forms';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzPageHeaderModule } from 'ng-zorro-antd/page-header';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { AsyncPipe, CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzIconModule } from 'ng-zorro-antd/icon';

@Component({
  standalone: true,
  imports: [
    NzPageHeaderModule,
    FormsModule,
    NzButtonModule,
    NzToolTipModule,
    NzDropDownModule,
    AsyncPipe,
    CommonModule,
    RouterModule,
    NzMenuModule,
    NzIconModule,
  ],
  selector: 'app-copy-path-menu-control',
  templateUrl: './copy-path-menu-control.component.html',
  styleUrls: ['./copy-path-menu-control.component.scss'],
})
export class CopyPathMenuControlComponent {
  @Output() showEditBuildJsonLocationModal = new EventEmitter();
  @Input() location$!: Observable<string>;
  constructor(
    private buildJsonHttp: BuildCopyPathJsonHttpService,
    private message: NzMessageService
  ) {}
  onBuildJson() {
    this.buildJsonHttp.execute().subscribe(() => {
      this.message.info('Building Json Succeed');
    });
  }

  onShowEditBuildJsonLocationModal() {
    this.showEditBuildJsonLocationModal.emit();
  }
}
