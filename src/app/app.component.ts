import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  token: any;

  constructor(private router: Router) {
    this.router.events.subscribe(() => this.token = localStorage.getItem('token') );
  }
  title = 'todo-hripunamlax-routing';

  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }
}
