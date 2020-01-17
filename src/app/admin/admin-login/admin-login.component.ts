import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-admin-login',
    templateUrl: './admin-login.component.html',
    styleUrls: ['./admin-login.component.scss']
})
export class AdminLoginComponent implements OnInit {
    username: string;
    password: string;

    constructor() {}

    ngOnInit() {
        // this.auth.adminLogin();
    }

    login() {
        // this.auth.adminLogin(this.username, this.password);
    }
}
