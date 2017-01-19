import { Injectable } from '@angular/core';
import { BehaviorSubject } from "rxjs/BehaviorSubject";
import { Observable } from "rxjs/Rx";
import { DataService } from "../shared/data/data.module";
import { Client } from "./client";

@Injectable()
export class ClientService {
private _clients: BehaviorSubject<Client[]> = new BehaviorSubject([]);
    clients: Observable<Client[]> = this._clients.asObservable();
    private _editClient: BehaviorSubject<Client> = new BehaviorSubject(null);
    editClient: Observable<Client> = this._editClient.asObservable();
    private editing: boolean = false;

    private dataStore: {
        clients: Client[]
    };

    loadall() {
        this.dataService.GetAll("Clients")
            .subscribe(clients => {
                this.dataStore.clients = clients;
                this._clients.next(this.dataStore.clients);
            }, error => console.log(error), () => { });
    }

    setEditClient(edit: Client) {
        this._editClient.next(edit);
        this.editing = true;
    }

    initEditClient() {
        this._editClient.next(this.newClient());
    }

    newClient() {
        return new Client('', '');
    }

    submit(client: Client) {
        if (this.editing) {
            this.update(client);
        }
        else {
            this.add(client);
        }
        this.editing = false;
    }

    add(client: Client) {
        this.dataService.Add('Clients', client).subscribe(client => {
            this.dataStore.clients.push(client);
            this._clients.next(this.dataStore.clients);
        }, error => console.log(error));
    }

    update(client: Client) {
        this.dataService.Update('Clients', client.clientId, client).subscribe(response => {
            this.dataStore.clients.forEach((m, i) => {
                if (m.clientId === client.clientId) { this.dataStore.clients[i] = client; }
            });
            this._clients.next(this.dataStore.clients);
        }, error => console.log(error));
    }

    delete(clientId: number) {
        this.dataService.Delete('Clients', clientId).subscribe(response => {
            this.dataStore.clients.forEach((m, i) => {
                if (m.clientId === clientId) { this.dataStore.clients.splice(i, 1); }
            });
            this._clients.next(this.dataStore.clients);
        }, error => console.log(error));
    }

    constructor(private dataService: DataService) {
        this.initEditClient();
        this.dataStore = { clients: [] };
        // Get the list of clients
        this.loadall();
    }
}
