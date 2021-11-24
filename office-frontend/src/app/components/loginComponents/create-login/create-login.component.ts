import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { User } from 'src/app/User';

@Component({
  selector: 'app-create-login',
  templateUrl: './create-login.component.html',
  styleUrls: ['./create-login.component.css']
})
export class CreateLoginComponent implements OnInit {

  @Output() createUser: EventEmitter<User> = new EventEmitter();
  FirstName: string;
  LastName: string;
  Username: string;
  Email: string;
  Password: string;
  VerifyPassword: string;

  constructor() { }

  ngOnInit(): void {
  }

  onCreateUser(){
    const newUser = {
      Id: "temp",
      UserName: this.Username,
      FirstName: this.LastName,
      LastName: this.LastName,
      Email: this.Email,
      Password: this.Password,
    }


    this.createUser.emit(newUser);
  }

}
