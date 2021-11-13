import { Component, OnInit ,ViewChild } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { UsersModule } from '../users.module';
import { User } from 'src/app/user';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';

const ELEMENT_DATA: User[] = []

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.css']
})
export class ListUsersComponent implements OnInit {
  
  @ViewChild(MatPaginator) paginator: MatPaginator | any 
  @ViewChild(MatSort) sort: MatSort | any


  displayedColumns: string[] = ['Select All','id', 'name', 'email', 'role','actions'];


  listUsers: User[] = [];
  searchValue: string= '' ;
  filterTable: any ='';
  sortbyParam: any ='';
  sortdirection: any = 'asc';
  dataSource : MatTableDataSource<User> | any

 checks = false;
  userid: User[] = []
  isChecked: any =[]
 startIndex = 0 ;
 endIndex = 10;
 // capturedId: any =[]
  
  
  constructor( private service: UserService, 
    private  snackbar : MatSnackBar ) { }

  
  ngOnInit(): void {
    this.service.listUsers().subscribe(data =>{
      this.listUsers = data;
    })

  }
  
  ngAfterViewInit(){

    this.dataSource = new MatTableDataSource(this.listUsers);
    this.dataSource.paginator =this.paginator
  }
  
  
  bulk(event: any){
    if(event.target.checked== true){
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
    this.userid = $event.target.value;
    this.isChecked = $event.target.checked;
    console.log(this.userid , this.isChecked);

    //  this.listUsers.map((data: any)=>{
     // if(data.id === this.userid){
     //   data.select = this.isChecked;
      //  this.capturedId = data
        //console.log(this.capturedId)
    //        return this.capturedId;
      
    // }
      //return this.capturedId;
      //});
  }

  deleteAll(){
    if(this.isChecked == true){
      this.service.deleteUser(this.userid).subscribe(data=>{
        this.snackbar.open('selected users deleted')
      },err=>{
        this.snackbar.open('unable to delete selected users')
      })

  }
  }

  getArrayOfNumber(length: number){

    return new Array(length/2);

  }

  updateIndex(pageIndex: number){
    this.startIndex = pageIndex * 10;
    this.endIndex = this.startIndex + 10;

  }

}
