import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Users } from 'src/model/user.model';
import { UserServiceService } from 'src/service/user-service.service';

@Component({
  selector: 'app-show-all-data',
  templateUrl: './show-all-data.component.html',
  styleUrls: ['./show-all-data.component.css']
})
export class ShowAllDataComponent implements OnInit {

  userdata:Users[]=[];
  userService:UserServiceService;
  router:Router;
  constructor(userService:UserServiceService, router:Router) { 
    this.userService=userService;
    this.router=router;
  }

  ngOnInit(): void {
    this.userService.getsAllUsers().subscribe(data=>{
      this.userdata=data.data;
    })
  }

  update(id:string){
    this.router.navigateByUrl('/update/' + id + ')/');
    

  }
  delete(id:any){
   let a= confirm("Are you sure you want to delete this record?");
   if(a){
    // this.userService.deleteUser(id).subscribe(data=>{
    //   this.userdata=data.data;
    // })
    alert("Deleted Successfully");
   }
  }

}
