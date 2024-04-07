import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from '../shared/services/auth.service';
import { Router } from '@angular/router';
import { Player } from '../models/player';

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.css'
})
export class AuthComponent implements OnInit {
  authForm!: FormGroup;
  isLoginMode = true;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
    this.authForm = new FormGroup({
      'user_name': new FormControl(null, Validators.required),
      'password': new FormControl(null, [Validators.required, Validators.minLength(5)]),
      'email': new FormControl(null, this.isLoginMode ? [] : [Validators.required, Validators.email]),
      'first_name': new FormControl(null, this.isLoginMode ? [] : Validators.required),
      'last_name': new FormControl(null, this.isLoginMode ? [] : Validators.required),
      'password_confirmation': new FormControl(null, this.isLoginMode ? [] : [Validators.required, this.matchPassword.bind(this)])
    });
  }

  matchPassword(control: FormControl): { [s: string]: boolean } | null {
    if (
      this.authForm &&
      this.authForm.get('password') &&
      this.authForm.get('password')?.value &&
      control.value !== this.authForm.get('password')?.value
    ) {
      return { 'passwordsNotMatch': true };
    }
    return null;
  }

  switchMode() {
    this.isLoginMode = !this.isLoginMode;
    this.authForm.get('email')?.setValidators(this.isLoginMode ? [] : [Validators.required, Validators.email]);
    this.authForm.get('first_name')?.setValidators(this.isLoginMode ? [] : Validators.required);
    this.authForm.get('last_name')?.setValidators(this.isLoginMode ? [] : Validators.required);
    this.authForm.get('password_confirmation')?.setValidators(this.isLoginMode ? [] : [Validators.required, this.matchPassword.bind(this)]);
    this.authForm.updateValueAndValidity();
  }

  onSubmit() {
    // Temp error handling TODO: Implement proper error handling
    if (this.authForm.invalid) {
      console.log('Invalid form');
      const invalidField = Object.keys(this.authForm.controls).find(field => this.authForm.controls[field].invalid);
      console.log('Invalid field:', invalidField);
      if (invalidField) {
        console.log('Errors:', this.authForm.controls[invalidField]?.errors)
      }
    }

    if (this.isLoginMode) {
      this.authService.login(this.authForm.value.user_name, this.authForm.value.password).subscribe({
        next: (response: any) => {
          console.log(response);
          localStorage.setItem('token', response.token);
          this.router.navigate(['/home']);
        },
        error: error => {
          console.log(error);
        },
        complete: () => {
          console.log('Login complete');
        }
      });

    } else {
      const player: Player = {
        user_name: this.authForm.value.user_name,
        password: this.authForm.value.password,
        password_confirmation: this.authForm.value.password_confirmation,
        email: this.authForm.value.email,
        first_name: this.authForm.value.first_name,
        last_name: this.authForm.value.last_name
      };

      this.authService.signup(player).subscribe({
        next: (response: any) => {
          console.log(response);
        },
        error: error => {
          console.log(error);
        },
        complete: () => {
        }
      });

    }

    this.authForm.reset();
  }
}
