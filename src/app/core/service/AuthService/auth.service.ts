import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    isAdminLogin = false;
    adminUrl: string;

    mockAdminUsername = 'admin';
    mockAdminPassword = 'admin';

    constructor(private router: Router) {}

    adminLogin(username = '', password = ''): void {
        if (sessionStorage.getItem('isAdminLogin') === 'true') {
            this.isAdminLogin = true;
            this.router.navigate(['/admin']);
        }

        if (username === this.mockAdminUsername && password === this.mockAdminPassword) {
            this.isAdminLogin = true;
            sessionStorage.setItem('isAdminLogin', 'true');
            this.router.navigate(['/admin']);
        }
    }

    adminLogout(): void {
        this.isAdminLogin = false;
    }
}
