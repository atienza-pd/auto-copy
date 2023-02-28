import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListCopyPathContainerComponent } from './list-copy-path/list-copy-path-container/list-copy-path-container.component';
import { CopyPathMenuControlComponent } from './list-copy-path/components/copy-path-menu-control/copy-path-menu-control.component';
import { NZ_I18N, en_US } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NzPageHeaderModule } from 'ng-zorro-antd/page-header';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { CopyPathTableComponent } from './list-copy-path/components/copy-path-table/copy-path-table.component';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { CopyPathListHttpService } from './list-copy-path/copy-path-list-http/copy-path-list-http.service';
import { AddCopyPathContainerComponent } from './add-copy-path/add-copy-path-container/add-copy-path-container.component';
import { AddCopyPathFormComponent } from './add-copy-path/components/add-copy-path-form/add-copy-path-form.component';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { NzListModule } from 'ng-zorro-antd/list';
import { AddCopyPathAddIncludedFilesOnlyComponent } from './add-copy-path/components/add-copy-path-add-included-files-only/add-copy-path-add-included-files-only.component';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { AddCopyPathAddExcludedFilesModalComponent } from './add-copy-path/components/add-copy-path-add-excluded-files-modal/add-copy-path-add-excluded-files-modal.component';
import { AddCopyPathAddExcludedDirectoriesModalComponent } from './add-copy-path/components/add-copy-path-add-excluded-directories-modal/add-copy-path-add-excluded-directories-modal.component';
import { AddCopyPathHttpService } from './add-copy-path/add-copy-path-http/add-copy-path-http.service';
import { DeleteCopyPathModalComponent } from './list-copy-path/components/delete-copy-path-modal/delete-copy-path-modal.component';
import { DeleteCopyPathHttpService } from './list-copy-path/delete-copy-path-http/delete-copy-path-http.service';
import { EditCopyPathContainerComponent } from './edit-copy-path/edit-copy-path-container/edit-copy-path-container.component';
import { EditCopyPathFormComponent } from './edit-copy-path/components/edit-copy-path-form/edit-copy-path-form.component';

registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,
    ListCopyPathContainerComponent,
    CopyPathMenuControlComponent,
    CopyPathTableComponent,
    AddCopyPathContainerComponent,
    AddCopyPathFormComponent,
    AddCopyPathAddIncludedFilesOnlyComponent,
    AddCopyPathAddExcludedFilesModalComponent,
    AddCopyPathAddExcludedDirectoriesModalComponent,
    DeleteCopyPathModalComponent,
    EditCopyPathContainerComponent,
    EditCopyPathFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NzPageHeaderModule,
    NzButtonModule,
    NzTableModule,
    NzDividerModule,
    HttpClientModule,
    NzFormModule,
    ReactiveFormsModule,
    NzInputModule,
    NzCheckboxModule,
    NzListModule,
    NzModalModule,
  ],
  providers: [
    CopyPathListHttpService,
    AddCopyPathHttpService,
    DeleteCopyPathHttpService,
    { provide: NZ_I18N, useValue: en_US },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
