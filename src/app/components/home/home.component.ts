import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { NavbarComponent } from "../navbar/navbar.component";
// import { AdvertpageComponent } from "../advertpage/advertpage.component";
import { RouterModule } from '@angular/router';
import { NavbarComponent } from '../navbar/navbar.component';
import { FooterComponent } from "../footer/footer.component";

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css'],
    imports: [RouterModule, NavbarComponent, FooterComponent]
})
export class HomeComponent {

}
