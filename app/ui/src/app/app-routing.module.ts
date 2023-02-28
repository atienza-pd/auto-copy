import { EditCopyPathContainerComponent } from './edit-copy-path/edit-copy-path-container/edit-copy-path-container.component';
import { AddCopyPathContainerComponent } from './add-copy-path/add-copy-path-container/add-copy-path-container.component';
import { ListCopyPathContainerComponent } from './list-copy-path/list-copy-path-container/list-copy-path-container.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: ListCopyPathContainerComponent },
  { path: 'add', component: AddCopyPathContainerComponent },
  { path: 'edit/:id', component: EditCopyPathContainerComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
