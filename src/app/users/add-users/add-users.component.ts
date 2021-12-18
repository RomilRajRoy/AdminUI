import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';
import { v4 as uuid } from 'uuid';
@Component({
  selector: 'app-add-users',
  templateUrl: './add-users.component.html',
  styleUrls: ['./add-users.component.css']
})
export class AddUsersComponent implements OnInit {

  addUserForm : FormGroup = new FormGroup({});
  users: any = [];
  newId: any =1;
  ID(){
    
  } 
  

  constructor(private formbuilder : FormBuilder,
    private service:UserService ,private snackbar: MatSnackBar,
   private router:Router) {
     
    
     
}

  ngOnInit(): void {

    this.users = this.service.getUsers();

    
          this.newId += this.users.length ;
        
    this.addUserForm = this.formbuilder.group({
      'name': new FormControl('',[Validators.required, Validators.minLength(3)]),
      'email': new FormControl('',[Validators.required, Validators.email]),
      
      'role': new FormControl('',[Validators.required, Validators.minLength(3)])
    })
  }

  createUser(){
      let newUser={
        id: this.newId,
        name:this.addUserForm.value.name,
        email:this.addUserForm.value.email,
        role:this.addUserForm.value.role,
      }
      this.users.push(newUser);
      this.service.addUser(newUser);
      this.snackbar.open('User Created Successfully');
      this.router.navigate(['list'])

  }

}
