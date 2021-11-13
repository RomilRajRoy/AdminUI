import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-view-users',
  templateUrl: './view-users.component.html',
  styleUrls: ['./view-users.component.css']
})
export class ViewUsersComponent implements OnInit {

  userid : string =''
  username: string = ''
  constructor(private  service:UserService ,
    private activatedroute: ActivatedRoute ) { }

  ngOnInit(): void {
    this.activatedroute.params.subscribe(data =>{
      this.userid = data.id;
      console.log(this.userid)
    })

    this.activatedroute.params.subscribe(data=>{
      this.username = data.name;
      console.log(this.username)
    })

    this.service.viewuser(this.userid).subscribe(data=>{
      console.log(data)
    })
  }

}
