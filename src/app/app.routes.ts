import { Routes } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { authGuard } from './shared/services/auth.guard';

export const routes: Routes = [
    { path: '', redirectTo: '/auth', pathMatch: 'full' },
    {
        path: 'loot',
        loadComponent: () => import('./shared/treasure/treasure.component').then(m => m.TreasureComponent),
        canActivate: [authGuard]
    },
    {
        path: 'home',
        loadComponent: () => import('./home/home.component').then(m => m.HomeComponent),
        canActivate: [authGuard]
    },
    {
        path: 'party',
        loadComponent: () => import('./party/party.component').then(m => m.PartyComponent),
        canActivate: [authGuard]
    },
    { path: 'auth', component: AuthComponent },
    {
        path: 'characters',
        loadComponent: () => import('./shared/character-info/character-info.component').then(m => m.CharacterInfoComponent),
        canActivate: [authGuard]
    },
];
