import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-add-users',
  templateUrl: './add-users.component.html',
  styleUrls: ['./add-users.component.css']
})
export class AddUsersComponent implements OnInit {

  addUserForm : FormGroup = new FormGroup({});

  constructor(private formbuilder : FormBuilder,
    private service:UserService ,private snackbar: MatSnackBar) { }

  ngOnInit(): void {
    this.addUserForm = this.formbuilder.group({
      'username': new FormControl('',[Validators.required, Validators.minLength(3)]),
      'email': new FormControl('',[Validators.required, Validators.email]),
      'role': new FormControl('',[Validators.required, Validators.minLength(3)])
    })
  }

  createUser(){

    this.service.addUser(this.addUserForm.value).subscribe(data =>{
      this.snackbar.open("user successfully added")
    },err =>{
      this.snackbar.open('unable to add user')
    })
  }

}
