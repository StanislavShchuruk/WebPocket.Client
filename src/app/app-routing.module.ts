import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './shared/helpers/guards/auth.guard';
import { CanAuthGuard } from './shared/helpers/guards/can-auth.guard';

const routes: Routes = [
  {
    path: 'authentication',
    loadChildren: './pages/authentication/authentication.module#AuthenticationModule',
    canActivate: [CanAuthGuard],
  },
  {
    path: 'home',
    loadChildren: './pages/home/home.module#HomeModule',
    canActivate: [AuthGuard]
  },
  { path: '',   redirectTo: '/home', pathMatch: 'full' },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
