import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from '../shared/services/auth.service';

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.css'
})
export class AuthComponent implements OnInit {
  authForm!: FormGroup;
  isLoginMode = false;

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.authForm = new FormGroup({
      'user_name': new FormControl(null, Validators.required),
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'first_name': new FormControl(null, Validators.required),
      'last_name': new FormControl(null, Validators.required),
      'password': new FormControl(null, [Validators.required, Validators.minLength(8)]),
      'password_confirmation': new FormControl(null, [Validators.required, this.matchPassword.bind(this)])
    });

  }

  matchPassword(control: FormControl): { [s: string]: boolean } | null {
    if (this.authForm && this.authForm.get('password') && control.value !== this.authForm.get('password')?.value) {
      return { 'passwordsNotMatch': true };
    }
    return null;
  }

  switchMode() {
    this.isLoginMode = !this.isLoginMode;
  }

  onSubmit() {
    if (this.authForm.invalid) {
      console.log('Invalid form');
      const invalidField = Object.keys(this.authForm.controls).find(field => this.authForm.controls[field].invalid);
      console.log('Invalid field:', invalidField);
    }

    if (this.isLoginMode) {
      // login logic here
      this.authService.login(this.authForm.value).subscribe({
        next: response => {
          console.log(response);
        },
        error: error => {
          console.log(error);
        },
        complete: () => {
          console.log('Login complete');
        }
      });

    } else {
      this.authService.signup(this.authForm.value).subscribe({
        next: response => {
          console.log(response);
        },
        error: error => {
          console.log(error);
        },
        complete: () => {
          console.log('Signup complete');
        }
      });

    }

    this.authForm.reset();
  }
}
