import { Component } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { AuthService } from '../auth.service'; 
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-dash-board-component',
  imports: [RouterModule, CommonModule],
  templateUrl: './dash-board-component.html',
  styleUrls: ['./dash-board-component.css']
})
export class DashBoardComponentComponent {
  showLogoutModal = false;

  constructor(
    private router: Router,
    private authService: AuthService
  ) {}

  navigateTo(route: string) {
    this.router.navigate([route]);
  }

  confirmLogout() {
    this.authService.logout();
    this.router.navigate(['/']);
    this.showLogoutModal = false;
  }

  cancelLogout() {
    this.showLogoutModal = false;
  }
}
