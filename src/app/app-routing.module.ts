import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { HomeComponent } from './home/home.component';
import { SendComponent } from './send/send.component';

const routes: Routes = [
  {
    path: "", 
    component: HomeComponent
  },
  {
    path: "auth",
    component: AuthComponent
  },
  {
    path: "send",
    component: SendComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
