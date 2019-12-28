export class Server {
    server: string;
    name: string;
    name_english: string;
    isSelect = false;

    constructor(obj) {
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
