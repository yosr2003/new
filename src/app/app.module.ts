import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { FypComponent } from "./fyp/fyp.component";
import { SidebarComponent } from "./components/sidebar/sidebar.component";
import { UserInterfaceComponent } from "./components/user-interface/user-interface.component";




@NgModule({
  declarations: [SidebarComponent

  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    UserInterfaceComponent,
    SidebarComponent
   

  ]
})
export class AppModule { }
