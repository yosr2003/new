import { Component } from '@angular/core';
import { CalendrierComponent } from "../../calendrier/calendrier.component";

@Component({
    selector: 'app-espace-classe',
    standalone: true,
    templateUrl: './espace-classe.component.html',
    styleUrl: './espace-classe.component.css',
    imports: [CalendrierComponent]
})
export class EspaceClasseComponent {
isEnseignat=false;
}
