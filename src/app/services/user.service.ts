import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../user';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  baseUrl : string = 'https://geektrust.s3-ap-southeast-1.amazonaws.com/adminui-problem/members.json'

  constructor(private http: HttpClient) { }

  listUsers(): Observable<User[]>{
    return this.http.get<User[]>(this.baseUrl);
  }

  viewuser(id:string){
    return this.http.get(this.baseUrl + id )

  }

  addUser(userObj:any){
    return this.http.post(this.baseUrl+ 'list',userObj)
  }

  deleteUser(id: any){
    return this.http.delete(this.baseUrl  + id)
  }

  updateUser(id: any, userObj: any){
    return this.http.put(this.baseUrl + 'list/'+id, userObj)
}
}
