import { ProfileComponent } from './profile.component';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { userRoutes } from './user.routes';
import { LoginComponent } from './login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule
  ({
    imports: [
      CommonModule,
      FormsModule,
      ReactiveFormsModule,
      RouterModule.forChild(userRoutes)
    ],
    declarations: [
      ProfileComponent,
      LoginComponent
    ],
    providers: [
    ]
  })

export class UserModule {
}
