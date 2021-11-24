import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import { User } from 'src/app/User';

@Component({
  selector: 'app-login-container',
  templateUrl: './login-container.component.html',
  styleUrls: ['./login-container.component.css']
})
export class LoginContainerComponent implements OnInit {
  showCreateLogin: boolean = true;

  constructor(private loginService: LoginService) { }

  ngOnInit(): void {
  }

  changeShowTask(){
    this.showCreateLogin = !this.showCreateLogin;
  }

  createUser(user: User){
    this.loginService.createProjects(user).subscribe((user) => (this.user.push) );
    //console.log(user);
  }

}




