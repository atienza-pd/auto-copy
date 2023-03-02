import { CopyPathListHttpService } from './../copy-path-list-http/copy-path-list-http.service';
import { Component, Injectable, OnInit } from '@angular/core';
import { CopyPathDto } from '../../../../../api/src/copy-path/copyPathDto';
import { BuildJsonLocationDto } from '../../../../../api/src/copy-path/buildJsonLocationDto';
import { DeleteCopyPathHttpService } from '../delete-copy-path-http/delete-copy-path-http.service';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';

@Component({
  selector: 'app-list-copy-path-container',
  templateUrl: './list-copy-path-container.component.html',
  styleUrls: ['./list-copy-path-container.component.scss'],
})
export class ListCopyPathContainerComponent implements OnInit {
  copyPaths!: CopyPathDto[];
  showRemoveCopyPathModal = false;
  showEditBuildJsonModal = false;
  id!: number;
  location!: string;
  locationId = 0;
  private locationSubject = new BehaviorSubject<string>('');
  location$ = this.locationSubject.asObservable();
  constructor(
    private httpService: CopyPathListHttpService,
    private httpDeleteService: DeleteCopyPathHttpService,
    private getFirstBuildJsonLocationHttpService: GetFirstBuildJsonLocationHttpService,
    private editFirstBuildJsonLocationHttpService: EditFirstBuildJsonLocationHttpService
  ) { }

  ngOnInit(): void {
    this.loadData();
    this.loadBuildJsonLocation();
  }

  loadBuildJsonLocation() {
    this.getFirstBuildJsonLocationHttpService.execute().subscribe((x: BuildJsonLocationDto) => {
      this.location = x.location
      this.locationId = x.id ?? 0
      this.locationSubject.next(this.location);
    });
  }

  onOkRemoveCopyPathModal() {
    this.showRemoveCopyPathModal = false;
    this.httpDeleteService.execute(this.id).subscribe(() => {
      this.loadData();
    });
  }

  onHideRemoveCopyPathModal() {
    this.showRemoveCopyPathModal = false;
  }

  onShowRemoveCopyPathModal(id: number) {
    this.showRemoveCopyPathModal = true;
    this.id = id;
  }

  loadData() {
    this.httpService.execute().subscribe((copyPaths) => {
      this.copyPaths = copyPaths;
    });
  }

  onShowEditBuildJsonLocationModal() {
    this.loadBuildJsonLocation();
    this.showEditBuildJsonModal = true;
  }

  onOkEditBuildJsonModal(location: string) {
    this.editFirstBuildJsonLocationHttpService.execute(this.locationId, { id: this.locationId, location: location })
      .subscribe(() => {
        this.showEditBuildJsonModal = false
        this.loadBuildJsonLocation();
      });
  }

  onHideEditBuildJsonModal() {
    this.showEditBuildJsonModal = false;
  }
}

@Injectable({
  providedIn: 'root'
})
export class GetFirstBuildJsonLocationHttpService {

  constructor(private http: HttpClient) { }

  execute(): Observable<any> {
    return this.http.get<any>(
      'http://localhost:3000/copy-path/build-json-location/first'
    );
  }
}

@Injectable({
  providedIn: 'root'
})
export class EditFirstBuildJsonLocationHttpService {

  constructor(private http: HttpClient) { }

  execute(id: number, location: BuildJsonLocationDto): Observable<any> {
    return this.http.put<any>(
      `http://localhost:3000/copy-path/build-json-location/edit/${id}`, location
    );
  }
}
