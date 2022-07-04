import { Component, OnInit } from '@angular/core';
import { UserServiceService } from 'src/service/user-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  userService: UserServiceService;

  constructor(userService: UserServiceService) {
    this.userService = userService;
  }

  ngOnInit(): void {
    // this.userService.getsAllUsers().subscribe(data => {
    //   console.log(data);
    // });
  }

}
