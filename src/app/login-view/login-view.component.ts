import { Component, OnInit } from '@angular/core';
import { User, ApiResponse, ApiError } from '../interface';
import { AuthService } from '../auth.service';
import { Router } from "@angular/router";

@Component({
  selector: 'app-login-view',
  templateUrl: './login-view.component.html',
  styleUrls: ['./login-view.component.css']
})
export class LoginViewComponent implements OnInit {
  public user: User = {
    email: '',
    password: ''
  };
  public error: string = '';
  public processing: boolean;
  constructor(private auth: AuthService, private router: Router) {

  }

  ngOnInit() {
  }

  onLoginFail(response: ApiResponse) {
    if (response.status === 400) {
      this.error = response.error.error;
      this.processing = false;
    }
  }

  onLoginSuccess(res) {
    this.router.navigate(['/users']);
    this.auth.setToken(res.token);
  }

  login(event: Event) {
    event.preventDefault();
    this.processing = true;
    this.auth
        .login(this.user)
        .subscribe(this.onLoginSuccess.bind(this), this.onLoginFail.bind(this))
  }

}
