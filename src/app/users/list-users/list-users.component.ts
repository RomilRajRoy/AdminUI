  import { Component, OnInit ,ViewChild } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/user';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';




const ELEMENT_DATA: User[] = []

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.css']
})
export class ListUsersComponent implements OnInit {
  
  
  displayedColumns: string[] = ['Select All','id', 'name', 'email', 'role','actions'];

 
  listUsers: User[] = [];
  searchValue: string= '' ;
  filterTable: any ='';
  sortbyParam: any ='';
  sortdirection: any = 'asc';
 checks = false;
  userid: any = []
  isChecked: any =[]
 startIndex = 0 ;
 endIndex = 10;
 

 
 
  constructor( private service: UserService, 
    private  snackbar : MatSnackBar, private router: Router ) { }


    ngOnInit(): void {
   // this.service.listUsers().subscribe(data =>{
     // this.listUsers = data;
    //})

    this.listUsers = this.service.getUsers()
    console.log(this.listUsers)
  }

  
  
  bulk(event: any){
    if(event.target.checked  == true){
      
      this.checks= true;

    }
    else{
      this.checks= false;
    }
  }
  
  filter(){
    this.filterTable = this.searchValue;
  }

  clearFilter(){
    this.filterTable ="";
    this.searchValue = "";
  }
  sortDirection(){
    if(this.sortdirection==="desc"){
      this.sortdirection === "asc";
    }else{
      this.sortdirection = "desc";
    }
  }

  onChange($event: any){
    if($event.target.checked){
      this.userid = $event.target.value;
    }
    
    //this.isChecked = $event.target.checked;
    //console.log(this.userid , this.isChecked);

    
   
  }

  deleteAll(){
    if(this.isChecked== true){
      this.service.deleteUser(this.userid);
      this.snackbar.open('Selected USers Deleted')
    }
}

  delete(id:any){
    for(let i=0 ; i<this.listUsers.length; i++){
    if(this.listUsers[i].id == id){
      this.listUsers.splice(i,1);  
      console.log()
    }
  }
  this.service.deleteUser(id);
  this.snackbar.open('user deleted succesfully');
  this.router.navigate(['list'])
}

  getArrayOfNumber(length: number){

    return new Array(Math.round(length/8.5));

  }

  updateIndex(pageIndex: number){
    this.startIndex = pageIndex * 10;
    this.endIndex = this.startIndex + 10;

  }

}
