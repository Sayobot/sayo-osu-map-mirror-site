import { Injectable, Inject } from '@angular/core';
import { Server } from './class/server.class';
import { HttpClient } from '@angular/common/http';
import { LocalStorageService } from '@service/LocalStorage';

@Injectable({
    providedIn: 'root'
})
export class ServerMangeService {
    serveList: Server[] = [];
    currentServer = '0';

    constructor(@Inject('BASE_CONFIG') private config, private http: HttpClient, private local: LocalStorageService) {
        this.getServerList();
        setTimeout(() => {
            this.local.getItem('server') ? this.changeServer(this.local.getItem('server')) : this.saveServer();
        }, 500);
    }

    saveServer() {
        this.local.setItem('server', this.currentServer);
    }

    getServerList() {
        this.http.get(this.config.serviceList).subscribe((res: any) => {
            const arr = res.data;
            arr.forEach((element) => {
                this.serveList.push(new Server(element));
            });
        });
    }

    changeServer(server: string) {
        this.currentServer = server;
        this.saveServer();
        this.serveList.forEach((serve: Server) => {
            serve.changeStatus(server);
        });
    }
}
