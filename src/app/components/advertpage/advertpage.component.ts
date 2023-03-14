import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from "../navbar/navbar.component";
import { FooterComponent } from "../footer/footer.component";
import { ColorTitleDirective } from 'src/app/directives/color-title.directive';


@Component({
    selector: 'app-advertpage',
    standalone: true,
    templateUrl: './advertpage.component.html',
    styleUrls: ['./advertpage.component.css'],
    imports: [CommonModule, RouterModule, NavbarComponent, FooterComponent, ColorTitleDirective]
})
export class AdvertpageComponent implements OnInit {
    ngOnInit(): void {
        
    }
}
