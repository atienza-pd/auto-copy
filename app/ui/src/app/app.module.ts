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
registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,
    ListCopyPathContainerComponent,
    CopyPathMenuControlComponent,
    CopyPathTableComponent,
    AddCopyPathContainerComponent,
    AddCopyPathFormComponent
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
    NzCheckboxModule
  ],
  providers: [CopyPathListHttpService, { provide: NZ_I18N, useValue: en_US }],
  bootstrap: [AppComponent],
})
export class AppModule {}
