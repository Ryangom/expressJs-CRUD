import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Users } from 'src/model/user.model';
import { UserServiceService } from 'src/service/user-service.service';

@Component({
  selector: 'app-data-update',
  templateUrl: './data-update.component.html',
  styleUrls: ['./data-update.component.css']
})
export class DataUpdateComponent implements OnInit {

  user:Users= new Users();
  userService:UserServiceService;
  activeRoute:ActivatedRoute;
  userId:string='';

  constructor(userService:UserServiceService, activeRoute:ActivatedRoute, private router:Router) {
    this.userService=userService;
    this.activeRoute=activeRoute;
   }

  ngOnInit(): void {
    this.userId = this.activeRoute.snapshot.params['id'];
    this.userService.getUserById(this.userId).subscribe((data)=>{
        this.user=data;
      });
  }

  updateUser(){
    this.userService.updateUser(this.user).subscribe((data)=>{
      this.user=data;
      
      alert("User Updated Successfully");
      setInterval(()=>{
        this.router.navigate(['/']); 
      } , 1000);


    } ,(error)=>{
      console.log(error);
    }
    );  
  }

}
