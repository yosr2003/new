import { Component } from '@angular/core';
import{MatDatepickerModule} from'@angular/material/datepicker';
import{MatNativeDateModule} from'@angular/material/core';
import { MatCardModule } from '@angular/material/card';
import { CalendarModule } from '@syncfusion/ej2-angular-calendars';


@Component({
  selector: 'app-calendrier',
  standalone: true,
  imports: [
    MatDatepickerModule,
    MatNativeDateModule,
    MatCardModule,
    CalendarModule
    
  ],
  templateUrl: './calendrier.component.html',
  styleUrl: './calendrier.component.css'
})
export class CalendrierComponent {
  selected: Date;

  constructor() {
    this.selected = new Date(); // Initialize selected date
  }
}
