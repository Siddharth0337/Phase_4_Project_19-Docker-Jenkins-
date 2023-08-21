import { Component, OnInit } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  errorMsg: string | undefined;
  loginInProcess: boolean = false;
  user: any;

  loginForm: UntypedFormGroup = new UntypedFormGroup({
    email: new UntypedFormControl(null, [Validators.required, Validators.email]),
    password: new UntypedFormControl(null, [Validators.required])
  });

  constructor(
    private authService: AuthService
  ) { }

  ngOnInit(): void {
  }

  loginUser = () => this.authService.loginUser(this.loginForm.value);
}
