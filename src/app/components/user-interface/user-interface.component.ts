import { Component } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { SidebarComponent } from "../sidebar/sidebar.component";
import { RouterOutlet } from '@angular/router';

@Component({
    selector: 'app-user-interface',
    standalone: true,
    templateUrl: './user-interface.component.html',
    styleUrl: './user-interface.component.css',
    imports: [HeaderComponent, SidebarComponent,RouterOutlet],
    
})
export class UserInterfaceComponent {
    
}
