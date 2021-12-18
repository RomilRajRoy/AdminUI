import { Component, OnInit , ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute ,Router } from '@angular/router';
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
  dataLoaded: boolean = false;
  capturedUser: any = [];
  
  constructor(private activatedroute : ActivatedRoute,
    private userservice : UserService,
    private formbuilder : FormBuilder,
    private snackbar: MatSnackBar,
    private router: Router) { }
    @ViewChild("f") form: any;
  ngOnInit(): void {
//   this.dataLoaded = false;
  //  this.activatedroute.params.subscribe(data =>{
    //  this.userId =data.id;


    //});

    this.userId =this.activatedroute.snapshot.params['id'];
    let users = this.userservice.getUsers()
    this.capturedUser = users.find((p: { id: number; })=> p.id==this.userId)
    console.log(this.capturedUser);


   /* if(this.userId! ==""){
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
          this.dataLoaded = true;
      })
      .catch(err=>{
        console.log(err);
      })
    } */
  }

  //updateUser(){
   // this.userservice.updateUser(this.userId, this.editUserForm.value).subscribe(data=>{
    //  this.snackbar.open('user updated successfully');
    //},err=>{
    //  this.snackbar.open('unable to update user');
    //})
 // }
 onSubmit() {
  if (this.form.value) {
    console.log(this.form.value)
  this.userservice.userUpdate(this.capturedUser,this.form.value);
  this.snackbar.open('user edited succesfully ')
  this.router.navigate(['list']);
  } else{
    
  }
  

}

}
