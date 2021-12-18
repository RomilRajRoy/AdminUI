import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddUsersComponent } from './users/add-users/add-users.component';
import { DeleteUsersComponent } from './users/delete-users/delete-users.component';
import { EditUsersComponent } from './users/edit-users/edit-users.component';
import { ListUsersComponent } from './users/list-users/list-users.component';

const routes: Routes = [

  {path:'create', component: AddUsersComponent},

 
  {path: 'list',
  children:[
    {path:'', component: ListUsersComponent},
    {path:'delete/:id', component: DeleteUsersComponent},
    {path:'edit/:id', component: EditUsersComponent},
    
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
