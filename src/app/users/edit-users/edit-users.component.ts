import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-edit-users',
  templateUrl: './edit-users.component.html',
  styleUrls: ['./edit-users.component.css']
})
export class EditUsersComponent implements OnInit {

  userId : any = '';
  userdetails: any ='';
  editUserForm: FormGroup = new FormGroup({});
 // dataLoaded: boolean = false;

  constructor(private activatedroute : ActivatedRoute,
    private userservice : UserService,
    private formbuilder : FormBuilder,
    private snackbar: MatSnackBar) { }

  ngOnInit(): void {
 //  this.dataLoaded = false;
    this.activatedroute.params.subscribe(data =>{
      this.userId =data.id;
    });

    if(this.userId! ==""){
      this.userservice.viewuser(this.userId)
      .toPromise()
      .then(data=>{
          this.userdetails = data;
          Object.assign(this.userdetails,data);
          console.log(this.userdetails)
          
          this.editUserForm = this.formbuilder.group({
            'name': new FormControl(this.userdetails.name),
            'email': new FormControl(this.userdetails.email),
            'role': new FormControl(this.userdetails.role),
          })
         // this.dataLoaded = true;
      })
      .catch(err=>{
        console.log(err);
      })
    }
  }

  updateUser(){
    this.userservice.updateUser(this.userId, this.editUserForm.value).subscribe(data=>{
      this.snackbar.open('user updated successfully');
    },err=>{
      this.snackbar.open('unable to update user');
    })
  }

}
