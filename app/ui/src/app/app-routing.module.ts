import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListCopyPathContainerComponent } from './features/copy-paths/list-copy-path/list-copy-path-container/list-copy-path-container.component';
import { AddCopyPathContainerComponent } from './features/copy-paths/add-copy-path/add-copy-path-container/add-copy-path-container.component';
import { EditCopyPathContainerComponent } from './features/copy-paths/edit-copy-path/edit-copy-path-container/edit-copy-path-container.component';

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
