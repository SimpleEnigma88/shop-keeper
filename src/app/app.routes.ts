import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { TreasureComponent } from './shared/treasure/treasure.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
    { path: 'loot', component: TreasureComponent },
    { path: 'home', component: HomeComponent },
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: '', component: AppComponent },
];
