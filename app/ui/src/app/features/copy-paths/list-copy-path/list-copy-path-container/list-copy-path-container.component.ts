import { CopyPathListHttpService } from './../copy-path-list-http/copy-path-list-http.service';
import {
  ChangeDetectionStrategy,
  Component,
  Injectable,
  OnInit,
  effect,
  inject,
  resource,
} from '@angular/core';
import { DeleteCopyPathHttpService } from '../delete-copy-path-http/delete-copy-path-http.service';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { CopyPathDto, JsonLocationDto } from '../../models';
import { CopyPathMenuControlComponent } from '../components/copy-path-menu-control/copy-path-menu-control.component';
import { CopyPathTableComponent } from '../components/copy-path-table/copy-path-table.component';
import { DeleteCopyPathModalComponent } from '../components/delete-copy-path-modal/delete-copy-path-modal.component';
import { EditBuildJsonLocationModalComponent } from '../components/edit-build-json-location-modal/edit-build-json-location-modal.component';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-list-copy-path-container',
  templateUrl: './list-copy-path-container.component.html',
  styleUrls: ['./list-copy-path-container.component.scss'],
  imports: [
    CopyPathMenuControlComponent,
    CopyPathTableComponent,
    DeleteCopyPathModalComponent,
    EditBuildJsonLocationModalComponent,
    CommonModule,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListCopyPathContainerComponent implements OnInit {
  private httpDeleteService = inject(DeleteCopyPathHttpService);
  showRemoveCopyPathModal = false;
  showEditBuildJsonModal = false;
  id!: number;
  location!: string;
  locationId = 0;
  private locationSubject = new BehaviorSubject<string>('');
  location$ = this.locationSubject.asObservable();
  constructor(
    private getFirstBuildJsonLocationHttpService: GetFirstBuildJsonLocationHttpService,
    private editFirstBuildJsonLocationHttpService: EditFirstBuildJsonLocationHttpService
  ) {}

  public copyPaths = resource({
    loader: async () => {
      const res = await fetch(`${environment.host}/copy-path/list`);
      return await (res.json() as Promise<CopyPathDto[]>);
    },
  });

  ngOnInit(): void {
    this.loadBuildJsonLocation();
  }

  loadBuildJsonLocation() {
    this.getFirstBuildJsonLocationHttpService
      .execute()
      .subscribe((x: JsonLocationDto) => {
        this.location = x.location;
        this.locationId = x.id ?? 0;
        this.locationSubject.next(this.location);
      });
  }

  onOkRemoveCopyPathModal() {
    this.showRemoveCopyPathModal = false;
    this.httpDeleteService.execute(this.id).subscribe(() => {});
  }

  onHideRemoveCopyPathModal() {
    this.showRemoveCopyPathModal = false;
  }

  onShowRemoveCopyPathModal(id: number) {
    this.showRemoveCopyPathModal = true;
    this.id = id;
  }

  onShowEditBuildJsonLocationModal() {
    this.loadBuildJsonLocation();
    this.showEditBuildJsonModal = true;
  }

  onOkEditBuildJsonModal(location: string) {
    this.editFirstBuildJsonLocationHttpService
      .execute(this.locationId, {
        id: this.locationId,
        location: location,
      })
      .subscribe(() => {
        this.showEditBuildJsonModal = false;
        this.loadBuildJsonLocation();
      });
  }

  onHideEditBuildJsonModal() {
    this.showEditBuildJsonModal = false;
  }
}

@Injectable({
  providedIn: 'root',
})
export class GetFirstBuildJsonLocationHttpService {
  constructor(private http: HttpClient) {}

  execute(): Observable<any> {
    return this.http.get<any>(
      `${environment.host}/copy-path/build-json-location/first`
    );
  }
}

@Injectable({
  providedIn: 'root',
})
export class EditFirstBuildJsonLocationHttpService {
  constructor(private http: HttpClient) {}

  execute(id: number, location: JsonLocationDto): Observable<any> {
    return this.http.put<any>(
      `${environment.host}/copy-path/build-json-location/edit/${id}`,
      location
    );
  }
}
