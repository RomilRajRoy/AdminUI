import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { MatSnackBar } from '@angular/material/snack-bar';
@Component({
  selector: 'app-view-users',
  templateUrl: './view-users.component.html',
  styleUrls: ['./view-users.component.css']
})
export class ViewUsersComponent implements OnInit {

  userid : string =''
  username: string = ''
  userDetails: any ;
  constructor(private  service:UserService ,
    private activatedroute: ActivatedRoute,private snackbar:MatSnackBar,
    private Router: Router) { }

  ngOnInit(): void {
    this.activatedroute.params.subscribe(data =>{
      this.userid = data.id;
      console.log(this.userid)
    })



    this.service.viewuser(this.userid).subscribe(data=>{
      this.userDetails = data;
    }, err=>{
            this.snackbar.open("Unable To Access the Server");
            this.Router.navigate(['list']);
            
    });
  }

  

}
