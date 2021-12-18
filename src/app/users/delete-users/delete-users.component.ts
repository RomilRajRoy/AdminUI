import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-delete-users',
  templateUrl: './delete-users.component.html',
  styleUrls: ['./delete-users.component.css']
})
export class DeleteUsersComponent implements OnInit {

  userId: string = '';
  capturedUser: any = '';
  // listUsers :any  =  fetch('https://geektrust.s3-ap-southeast-1.amazonaws.com/adminui-problem/members.json')
  //.then(res => res.json())
  //.then(data => {
  // this.listUsers = data;
  //console.log(this.listUsers)
  //console.log(this.listUsers.name)
  //}) 

  constructor(private service: UserService,
    private activatedroute: ActivatedRoute,
    private snackbar: MatSnackBar,
    private router: Router) { }

  ngOnInit(): void {
    //    this.activatedroute.params.subscribe(data => {
    //    this.userid = data.id;

    this.userId = this.activatedroute.snapshot.params['id'];
    let users = this.service.getUsers()
    this.capturedUser = users.find((p: { id: any; }) => p.id == this.userId)
    console.log(this.capturedUser);


   




    // if(this.userId){
    // this.service.getUsers()
    // this.snackbar.open("user deleted");
    // this.router.navigate(['list']);
    // }, err =>{
    // this.snackbar.open('unable to delete user')
    //  this.router.navigate(['list']);
    // })

  }
}



