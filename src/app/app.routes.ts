import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'configuracion/permisos',
    loadComponent: () =>
      import('./pages/config-permisos/config-permisos.component')
        .then(m => m.ConfigPermisosComponent)
  },
  { path: '**', redirectTo: '' }
];
