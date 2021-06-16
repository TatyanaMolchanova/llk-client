import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from "@angular/router";
import { AdminLayoutComponent } from './shared/components/admin-layout/admin-layout.component';
import { AuthLayoutComponent } from './shared/layouts/auth-layout/auth-layout.component';
import { LoginPageComponent } from "./login-page/login-page.component";
import { ReactiveFormsModule } from "@angular/forms";
import { RegistrationComponent } from './registration/registration.component';
import { SharedModule } from "../shared/shared.module";

@NgModule({
  declarations: [
    AdminLayoutComponent,
    AuthLayoutComponent,
    LoginPageComponent,
    RegistrationComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        // path: '', component: AdminLayoutComponent, children: [
        path: '', component: AuthLayoutComponent, children: [
          {path: '', redirectTo: '/admin/login', pathMatch: 'full'},
          {path: 'login', component: LoginPageComponent},
          {path: 'register', component: RegistrationComponent},
          //   // {path: 'dashboard', component: DashboardPageComponent, canActivate: [AuthGuard]},
          //   // {path: 'create', component: CreatePageComponent, canActivate: [AuthGuard]},
          //   // {path: 'post/:id/edit', component: EditPageComponent, canActivate: [AuthGuard]}
        ]
      }
    ]),
    ReactiveFormsModule,
    SharedModule,
  ]
})
export class AdminModule { }
