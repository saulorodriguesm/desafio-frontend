import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './pages/login/login.component';
import { PaymentsComponent } from './pages/payments/payments.component';
import { SessionGuard } from './guards/session.guard';

const routes: Routes = [
  {
    path: 'login',
    pathMatch: 'full',
    component: LoginComponent,
  },
  {
    path: 'app',
    component: PaymentsComponent,
    canActivate: [SessionGuard],
  },
  {
    path: '**',
    redirectTo: 'login',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
