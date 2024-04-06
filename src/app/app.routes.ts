import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { TreasureComponent } from './shared/treasure/treasure.component';
import { HomeComponent } from './home/home.component';
import { CharacterInfoComponent } from './shared/character-info/character-info.component';
import { PartyComponent } from './party/party.component';

export const routes: Routes = [
    { path: 'loot', component: TreasureComponent },
    { path: 'home', component: HomeComponent },
    { path: 'party', component: PartyComponent },
    { path: 'characters', component: CharacterInfoComponent },
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: '', component: AppComponent },
];
