import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ResponseBase, ServerItem } from '@app/shared/models';

export class Server {
    server: string;
    name: string;
    name_english: string;
    isSelect = false;

    constructor(obj: ServerItem) {
        this.server = obj.server;
        this.name = obj.server_nameU;
        this.name_english = obj.server_name;

        if (Object.is(this.server, '0')) {
            this.select();
        }
    }

    select() {
        this.isSelect = true;
    }

    changeStatus(server: string) {
        this.server === server ? this.select() : (this.isSelect = false);
    }
}

@Injectable({
    providedIn: 'root'
})
export class ServerMangeService {
    serveList: Server[] = [];
    currentServer = '0';

    constructor(
        @Inject('BASE_CONFIG') private config,
        private http: HttpClient
    ) {
        this.getServerList();
        setTimeout(() => {
            localStorage.getItem('server')
                ? this.changeServer(localStorage.getItem('server'))
                : this.saveServer();
        }, 500);
    }

    saveServer() {
        localStorage.setItem('server', this.currentServer);
    }

    getServerList() {
        this.http
            .get(this.config.serviceList)
            .subscribe((res: ResponseBase<ServerItem[]>) => {
                res.data.forEach((element) => {
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
