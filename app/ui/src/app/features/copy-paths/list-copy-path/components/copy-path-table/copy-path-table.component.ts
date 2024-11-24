import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NzButtonModule, NzButtonSize } from 'ng-zorro-antd/button';
import {
  NzTableFilterFn,
  NzTableFilterList,
  NzTableModule,
  NzTableSortFn,
  NzTableSortOrder,
} from 'ng-zorro-antd/table';
import { CopyPathDto } from '../../../models';
import { RouterLink } from '@angular/router';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { CommonModule, NgClass } from '@angular/common';
interface DataItem {
  name: string;
  source: string;
  destination: string;
  includeFilesOnly: string;
  excludeDirectories: string;
  excludeFiles: string;
}

interface ColumnItem {
  name: string;
  sortOrder: NzTableSortOrder | null;
  sortFn: NzTableSortFn<DataItem> | null;
  listOfFilter: NzTableFilterList;
  filterFn: NzTableFilterFn<DataItem> | null;
}

@Component({
  standalone: true,
  imports: [
    NzTableModule,
    NzButtonModule,
    RouterLink,
    NzDividerModule,
    NgClass,
    CommonModule,
  ],
  selector: 'app-copy-path-table',
  templateUrl: './copy-path-table.component.html',
  styleUrls: ['./copy-path-table.component.scss'],
})
export class CopyPathTableComponent {
  trackByName(_: number, item: ColumnItem): string {
    return item.name;
  }
  listOfColumns: ColumnItem[] = [
    {
      name: 'Name',
      sortOrder: null,
      sortFn: (a: DataItem, b: DataItem) => a.name.localeCompare(b.name),
      listOfFilter: [
        { text: 'Online', value: 'Online' },
        { text: 'Local', value: 'Local' },
        { text: 'Network', value: 'Network' },
      ],
      filterFn: (list: string[], item: DataItem) =>
        list.some((name) => item.name.indexOf(name) !== -1),
    },
  ];
  @Input() copyPaths: CopyPathDto[] = [];
  @Output() showRemoveCopyPathModal = new EventEmitter();
  size: NzButtonSize = 'large';
  onShowRemoveCopyPathModal(id: number | undefined) {
    this.showRemoveCopyPathModal.emit(id);
  }
}
