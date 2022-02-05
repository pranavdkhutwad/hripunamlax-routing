import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './login/login.component';
import { TodoComponent } from './todo/todo.component';
import { AuthService } from './services/auth.service';
const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: "todo", canActivate: [AuthService], component: TodoComponent },
  { path: "contact", canActivate: [AuthService], component: ContactComponent },
  { path: "", redirectTo: 'login', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
