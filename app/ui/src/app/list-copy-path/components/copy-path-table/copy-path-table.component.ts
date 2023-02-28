import { CopyPathDto } from '../../../../../../api/src/copy-path/copyPathDto';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NzButtonSize } from 'ng-zorro-antd/button';
interface Person {
  key: string;
  name: string;
  age: number;
  address: string;
}
@Component({
  selector: 'app-copy-path-table',
  templateUrl: './copy-path-table.component.html',
  styleUrls: ['./copy-path-table.component.scss'],
})
export class CopyPathTableComponent implements OnInit {
  @Input() copyPaths: CopyPathDto[] = [];
  @Output() showRemoveCopyPathModal = new EventEmitter();
  size: NzButtonSize = 'large';
  onShowRemoveCopyPathModal(id: number | undefined){
    this.showRemoveCopyPathModal.emit(id);
  }
  constructor() {}

  ngOnInit(): void {}
}
