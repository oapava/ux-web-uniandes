import { Component } from '@angular/core';
import { MainButtonComponent } from '../../shared/main-button/main-button.component';
import { IconButtonComponent } from "../../shared/icon-button/icon-button.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MainButtonComponent, IconButtonComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
