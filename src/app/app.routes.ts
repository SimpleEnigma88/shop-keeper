import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { TreasureComponent } from './shared/treasure/treasure.component';
import { HomeComponent } from './home/home.component';
import { CharacterInfoComponent } from './shared/character-info/character-info.component';
import { PartyComponent } from './party/party.component';
import { AuthComponent } from './auth/auth.component';

export const routes: Routes = [
    { path: '', redirectTo: '/auth', pathMatch: 'full' },
    {
        path: 'loot',
        loadComponent: () => import('./shared/treasure/treasure.component').then(m => m.TreasureComponent)
    },
    {
        path: 'home',
        loadComponent: () => import('./home/home.component').then(m => m.HomeComponent)
    },
    {
        path: 'party',
        loadComponent: () => import('./party/party.component').then(m => m.PartyComponent)
    },
    { path: 'auth', component: AuthComponent },
    {
        path: 'characters',
        loadComponent: () => import('./shared/character-info/character-info.component').then(m => m.CharacterInfoComponent)
    },
];
