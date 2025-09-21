import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MenuLeftComponent } from "./shared/menu-left/menu-left.component";
import { IconButtonComponent } from './shared/icon-button/icon-button.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MenuLeftComponent, IconButtonComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'habitz';
}
