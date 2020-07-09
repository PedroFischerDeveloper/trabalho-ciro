import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
Router;
@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css'],
})
export class NavBarComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  logout() {
    localStorage.removeItem('@user:token');
    setTimeout(() => {
      this.router.navigate(['']);
    }, 200);
  }
}
