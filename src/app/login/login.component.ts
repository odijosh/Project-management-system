import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  AbstractControl,
  ValidationErrors,
  ReactiveFormsModule
} from '@angular/forms';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AuthService } from '../auth.service'; 

@Component({
  standalone: true,
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  imports: [ReactiveFormsModule, CommonModule]
})
export class LoginComponent {
  loginForm: FormGroup;
  loginError: string = '';

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private authService: AuthService
  ) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email, this.mustContain195]],
      password: ['', [Validators.required]]
    });
  }


  mustContain195(control: AbstractControl): ValidationErrors | null {
    const email = control.value || '';
    if (!email) return null;
    return email.includes('195') ? null : { mustContain195: true };
  }

 onLogin() {
  if (this.loginForm.valid) {
    this.authService.login();
    this.router.navigate(['/dashboard/listing']);
  } else {
    this.loginError = 'Please fill all required fields correctly';
    this.loginForm.markAllAsTouched();
  }
}

}
