import { Routes } from '@angular/router';
import { ChistesComponent } from './components/chistes/chistes.component';
import { CreditosComponent } from './components/creditos/creditos.component';

export const routes: Routes = [
    { path:'', redirectTo: '/home', pathMatch: 'full' },
    { path:'chistes', component:ChistesComponent },
    { path:'creditos', component:CreditosComponent },
  ];
