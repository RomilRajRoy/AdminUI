import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListUsersComponent } from './list-users/list-users.component';

import { AddUsersComponent } from './add-users/add-users.component';
import { EditUsersComponent } from './edit-users/edit-users.component';
import { DeleteUsersComponent } from './delete-users/delete-users.component';
import { MatListModule } from '@angular/material/list';
import { RouterModule } from '@angular/router';
import {MatIconModule} from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatTableModule} from '@angular/material/table';
import { FormsModule } from '@angular/forms';
import {MatSnackBarModule, MAT_SNACK_BAR_DEFAULT_OPTIONS} from '@angular/material/snack-bar';
import { SearchfilterPipe } from '../searchfilter.pipe';
import { SortfilterPipe } from '../sortfilter.pipe';
import { MatSortModule } from '@angular/material/sort';

//import { MatPaginatorModule} from '@angular/material/paginator';
//import { NgbModule } from '@ng-bootstrap/ng-bootstrap'
@NgModule({
  declarations: [
    ListUsersComponent,
    
    AddUsersComponent,
    EditUsersComponent,
    DeleteUsersComponent,
    SearchfilterPipe,
    SortfilterPipe
  ],
  imports: [
    CommonModule,
    MatListModule,
    RouterModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    ReactiveFormsModule,
    MatCardModule,
    MatButtonModule,
    MatSnackBarModule,
    MatTableModule,
    FormsModule,
    MatSortModule,
  //  MatPaginatorModule,
  //  NgbModule
    
  ],
  providers: [{provide: MAT_SNACK_BAR_DEFAULT_OPTIONS, useValue:{duration: 2500}}]
})
export class UsersModule { }
