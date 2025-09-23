import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { IconButtonComponent } from '../../shared/icon-button/icon-button.component';

@Component({
  selector: 'app-config-permisos',
  standalone: true,
  imports: [CommonModule, RouterModule, IconButtonComponent],
  templateUrl: './config-permisos.component.html',
  styleUrl: './config-permisos.component.scss'
})
export class ConfigPermisosComponent {}
