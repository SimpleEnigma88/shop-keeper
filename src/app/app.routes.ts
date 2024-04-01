import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';

export const routes: Routes = [
    { path: '', component: AppComponent },
    { path: 'default', component: HeaderComponent, outlet: 'headerView' },
    { path: '', redirectTo: '/(headerView:default)', pathMatch: 'full' },
];
