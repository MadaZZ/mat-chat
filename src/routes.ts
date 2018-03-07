import { NgModule } from '@angular/core'; 
import { Routes } from '@angular/router';
import { SignupFormComponent } from './app/signup-form/signup-form.component';
import { LoginFormComponent } from './app/login-form/login-form.component';
import {ChatroomComponent} from './app/chatroom/chatroom.component'

export const appRoutes: Routes = [
    { path: 'login', component: LoginFormComponent },
    { path: 'signup', component: SignupFormComponent },
    { path: 'chat', component: ChatroomComponent },
    { path: '', redirectTo: '/login', pathMatch: 'full' }
];