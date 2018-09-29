import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { LoginViewComponent } from './login-view/login-view.component';
import { UsersViewComponent } from './users-view/users-view.component';
import { FormsModule } from '@angular/forms';
import { AuthGuard } from './authGuard';

const appRoutes = [
  { path: '', component: LoginViewComponent },
  { path: 'users', component: UsersViewComponent, canActivate: [AuthGuard] }
]

@NgModule({
  declarations: [
    AppComponent,
    LoginViewComponent,
    UsersViewComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    NgbModule.forRoot()
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }