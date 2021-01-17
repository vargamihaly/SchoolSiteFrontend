import { Component } from '@angular/core';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';
import { NotificationService } from '../common/services/toastr.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  templateUrl: './login.component.html',
  styles: [`
    em {float: right; color:#E05C65; padding-left:10px;}
  `]
})

export class LoginComponent {

  constructor(private authService: AuthService, private router: Router, private toastr: NotificationService) {
  }

  userName!: string
  password!: string
  mouseOverLogin!: boolean

  async login(formValues) {
    let errors: HttpErrorResponse | undefined = undefined;
    await this.authService.loginUser(formValues.username, formValues.password).catch(error => {
      if (error != undefined) {
        errors = error;
      }
    });

    if (!errors?.error) {
      this.toastr.showSuccess("Sikeres bejelentkezés", "");
    } else {
      this.toastr.showError("Sikertelen bejelentkezés", "");
    }
    this.router.navigate(['/news']);
  }


  cancel() {
    this.router.navigate(['/news']);
  }
}