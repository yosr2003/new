import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./components/header/header.component";
import { LoginComponent } from "./components/login/login.component";
import { HomeComponent } from './components/home/home.component';
import { EspaceClasseComponent } from "./components/user-interface/espace-classe/espace-classe.component";
import { UserInterfaceComponent } from './components/user-interface/user-interface.component';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, HeaderComponent, LoginComponent, HomeComponent, EspaceClasseComponent, UserInterfaceComponent ]
})
export class AppComponent {
  title = 'projv2';
}
