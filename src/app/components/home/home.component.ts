import { Component, ElementRef, Renderer2, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'; // Import CommonModule
import { LoginComponent } from '../login/login.component';
import { HttpClientModule, HttpParams } from '@angular/common/http';
import { AuthService } from '../../services/auth.service';

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.css',
    imports: [LoginComponent,CommonModule],
    providers: [
      
    ],
})
export class HomeComponent {
  constructor(private el: ElementRef) {}
  isPopupVisible: boolean = false;
buttonText: string = 'Login';

togglePopup() {
  if (this.isPopupVisible) {
    // si popup is visible  hide  and scroll to the top
    this.isPopupVisible = false;
    this.buttonText = 'Login';
    this.scrollToTop();
  } else {
    // contraire
    this.isPopupVisible = true;
    this.buttonText = 'Cancel';
    this.scrollIntoView();
  }
}

private scrollToTop() {
  setTimeout(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, 0);
}

private scrollIntoView() {
  setTimeout(() => {
    window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
  }, 0);
}

}
