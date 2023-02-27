import { CopyPathDto } from './../../../../../../api/src/copy-path/copyPath';
import { Component, Input, OnInit } from '@angular/core';
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

  size: NzButtonSize = 'large';
  
  constructor() {}

  ngOnInit(): void {}
}
