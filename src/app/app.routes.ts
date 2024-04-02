import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { TreasureComponent } from './shared/treasure/treasure.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
    { path: 'default', component: HeaderComponent, outlet: 'headerView' },
    { path: 'loot', component: TreasureComponent },
    { path: 'inventory', component: HomeComponent, outlet: 'mainView' },
    { path: '', redirectTo: '/(headerView:default//mainView:inventory)', pathMatch: 'full' },
    { path: '', component: AppComponent },
];
