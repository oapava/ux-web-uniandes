import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-config-permisos',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './config-permisos.component.html',
  styleUrl: './config-permisos.component.scss'
})
export class ConfigPermisosComponent {}
