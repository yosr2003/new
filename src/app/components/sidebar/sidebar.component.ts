import { Component, HostListener, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { User } from '../../classes/user';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent implements OnInit{
  constructor( private router: Router ,private authService :AuthService){ }
  user!: User;
  activeMenuItem: string = '';
  currentUser!: User | null;



  ngOnInit(): void {
    this.getCurrentUser();
    const userId = this.authService.getCurrentUserId();
    console.log(userId);
    if (userId !== null) {
      this.authService.getUserDetails(userId).subscribe(
        data => {
          this.user = data;
          console.log('User details:', this.user);
        },
        error => {
          console.error('Error fetching user details:', error);
        }
      );
    } else {
      console.error('No user ID found.');
    }
  }

  toggleMenuItem(menuItemId: string): void {
    this.activeMenuItem = menuItemId;
  }

  logout() {
    this.authService.logout();
  }

  getCurrentUser() {
    this.currentUser = this.authService.getCurrentUser();
    return this.currentUser;
  }
}


