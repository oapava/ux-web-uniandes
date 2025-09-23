import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ConfigComponent } from './pages/config/config.component';
import { AgendaRulesComponent } from './pages/agenda-rules/agenda-rules.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { 
        path: 'configuracion', 
        component: ConfigComponent,
        children: [
            { path: 'reglas-de-agenda', component: AgendaRulesComponent }
        ]
    },
    {
    path: 'configuracion/permisos',
    loadComponent: () =>
      import('./pages/config-permisos/config-permisos.component')
        .then(m => m.ConfigPermisosComponent)
    },
    {
        path: 'habitos/crear',
        loadComponent: () =>
        import('./pages/crear-habito/crear-habito.component')
            .then(m => m.CrearHabitoComponent)
    },
    { path: '**', redirectTo: '' }
];
