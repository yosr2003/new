import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';  
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule, HttpParams } from '@angular/common/http';
import { AuthService } from '../../services/auth.service';
import { UserService } from '../../services/user.service';
import { User } from '../../classes/user';



@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, HttpClientModule],
  providers: [AuthService, UserService],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit  {
  loginForm: FormGroup;

    constructor(
        private fb: FormBuilder,
        private authService: AuthService,
        private router: Router
    ) {
        this.loginForm = this.fb.group({
            email: ['', [Validators.required, Validators.email]],
            password: ['', [Validators.required]]
        });
    }

    ngOnInit(): void {}

    login(): void {
        if (this.loginForm.valid) {
            const { email, password } = this.loginForm.value;
            this.authService.login(email, password).subscribe(
                success => {
                    if (success) {
                        this.router.navigate(['/userInter/fyp']);
                    } else {
                        alert('Invalid credentials');
                    }
                },
                error => {
                    console.error('Login failed', error);
                }
            );
        } else {
            alert('Form is invalid');
        }
    }

    useroblig(): boolean {
      const emailControl = this.loginForm.get('email');
      return emailControl?.invalid && (emailControl.dirty || emailControl.touched) || false;
  }

  pwdoblig(): boolean {
      const passwordControl = this.loginForm.get('password');
      return passwordControl?.invalid && (passwordControl.dirty || passwordControl.touched) || false;
  }



  }
  


  
  

