import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
    { path: 'default', component: HeaderComponent, outlet: 'headerView' },
    { path: 'home', component: HomeComponent, outlet: 'mainView' },
    { path: '', redirectTo: '/(headerView:default//mainView:home)', pathMatch: 'full' },
    { path: '', component: AppComponent },
];
