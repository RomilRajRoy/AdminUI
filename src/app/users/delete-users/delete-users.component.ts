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

  userid: string = '';

  listUsers :any  =  fetch('https://geektrust.s3-ap-southeast-1.amazonaws.com/adminui-problem/members.json')
  .then(res => res.json())
  .then(data => {
    this.listUsers = data;
    console.log(this.listUsers)
    console.log(this.listUsers.name)
  }) 

  constructor(private service: UserService,
    private activatedroute: ActivatedRoute,
    private snackbar :MatSnackBar,
    private router: Router) { }

  ngOnInit(): void {
    this.activatedroute.params.subscribe(data => {
      this.userid = data.id;

    });

   

    

    if(this.userid){
      this.service.deleteUser(this.userid).subscribe(data=>{
        this.snackbar.open("user deleted");
        this.router.navigate(['list']);
      }, err =>{
        this.snackbar.open('unable to delete user')
        this.router.navigate(['list']);
      })
  }}


}
