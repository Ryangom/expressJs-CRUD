import { Component, OnInit } from '@angular/core';
import { Users } from 'src/model/user.model';
import { UserServiceService } from '../service/user-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'expressJS';

  userService: UserServiceService;
  users: Users[] = [];
  constructor(userService: UserServiceService) {
    this.userService = userService;
  }
  ngOnInit(): void {
    this.userService.getsAllUsers().subscribe((data) => {
      this.users = data.data;
      console.log(this.users);
    });
  }
}
