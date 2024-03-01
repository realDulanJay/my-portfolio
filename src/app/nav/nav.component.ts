import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
})
export class NavComponent {
  isCollapsed: boolean = true;

  constructor(private router: Router) {}

  navigateAndClose(route: string): void {
    this.router.navigate([route]);
    this.isCollapsed = true;
  }
}
