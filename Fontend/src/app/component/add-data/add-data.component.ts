import { Component, OnInit } from '@angular/core';
import { Users } from 'src/model/user.model';
import { UserServiceService } from 'src/service/user-service.service';

@Component({
  selector: 'app-add-data',
  templateUrl: './add-data.component.html',
  styleUrls: ['./add-data.component.css']
})
export class AddDataComponent implements OnInit {

  user:Users= new Users();
  usersService:UserServiceService;


  constructor(usersService:UserServiceService) { 
    this.usersService=usersService;
  }
  
  ngOnInit(): void {
  }

  addUser(){
    // this.usersService.addUser(this.user).subscribe(data=>{
    //   console.log(data);
    // }
    // )
    console.log(this.user);
    
  }

}
