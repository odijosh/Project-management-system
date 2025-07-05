
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private authKey = 'isLoggedIn';

  login() {
    localStorage.setItem(this.authKey, 'true');
  }

  logout() {
    localStorage.removeItem(this.authKey);
  }

  isAuthenticated(): boolean {
    return localStorage.getItem(this.authKey) === 'true';
  }
}
