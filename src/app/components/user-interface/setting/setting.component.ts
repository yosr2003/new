import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../../services/auth.service';
import { User } from '../../../classes/user';
import { UserService } from '../../../services/user.service';
import { ReactiveFormsModule } from '@angular/forms'; // Import ReactiveFormsModule here

@Component({
  selector: 'app-setting',
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.css'],
  imports:[ReactiveFormsModule],
  standalone: true
})
export class SettingComponent implements OnInit {
  currentUser!: User | null;
  profileForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private userService: UserService,
  ) {}

  ngOnInit() {
    this.profileForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required],
      dob: ['', Validators.required]
    });

    this.getCurrentUser();
  }

  getCurrentUser() {
    // this.currentUser = this.authService.getCurrentUser();
    // if (this.currentUser) {
    //   this.profileForm.patchValue({
    //     firstName: this.currentUser.nom,
    //     lastName: this.currentUser.prenom,
    //     email: this.currentUser.email,
    //     phone: this.currentUser.numTel,
        
    //   });
    // }
  }

  onSubmit() {
    if (this.profileForm.valid && this.currentUser) {
      const updatedUser: User = {
        ...this.currentUser,
        nom: this.profileForm.value.firstName,
        prenom: this.profileForm.value.lastName,
        email: this.profileForm.value.email,
        numTel: this.profileForm.value.phone
      };

      this.userService.updateUser(updatedUser).subscribe(
        response => {
          console.log('Profile updated successfully', response);
          alert('Profile updated successfully');
        },
        error => {
          console.error('Error updating profile', error);
          alert('Error updating profile. Please try again later.');
        }
      );
    }
  }
}
