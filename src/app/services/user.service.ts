import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../user';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  localData: any = [];
  userList: any = [];


  load() {
    if (localStorage.getItem('admin') === null || localStorage.getItem('admin') == undefined) {
      console.log('No users found...creating new users...');
      fetch('https://geektrust.s3-ap-southeast-1.amazonaws.com/adminui-problem/members.json')
        .then(res => res.json())
        .then(data => {
          this.userList = data
          console.log(this.userList)
          localStorage.setItem('admin', JSON.stringify(this.userList))
          this.localData = JSON.parse(localStorage.getItem('admin') || '{}')
          console.log(this.localData);

        });

      return

    } else {
      console.log('found users.....');
    }
  }

  

  constructor(private http: HttpClient) { this.load() }

  

  getUsers() {
    let users = JSON.parse(localStorage.getItem('admin') || "{}")
    return users
  }

  

  

  deleteUser(id: number) {
    let users = JSON.parse(localStorage.getItem('admin')|| '{}')
    for(let i = 0 ; i < users.length; i++){
      if(users[i].id == id){
        users.splice(i,1);
      }
    }
    localStorage.setItem('admin', JSON.stringify(users));
  }

  deleteselecteduser(ids:Array<any>){

  }
  
  userUpdate(olduser: any, newuser: any) {
    let users = JSON.parse(localStorage.getItem('admin')|| '{}');

    for (let i = 0; i < users.length; i++) {
      if (users[i].id == olduser.id) {
        users[i] = newuser;
      }
    }
    localStorage.setItem('admin', JSON.stringify(users));
  }

  addUser(newUser:any){
    let user = JSON.parse(localStorage.getItem('admin')|| '{}')
    user.push(newUser)
    localStorage.setItem('admin',JSON.stringify(user));

  }

}
