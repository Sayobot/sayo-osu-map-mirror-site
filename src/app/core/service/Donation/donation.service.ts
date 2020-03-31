import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { DonationInfo, Supports, SupportDetails } from '@app/shared/models';

@Injectable({
    providedIn: 'root'
})
export class DonationService {
    BASE_URL = 'https://api.sayobot.cn/';

    constructor(private http: HttpClient) {}

    getDonationInfo(): Observable<DonationInfo> {
        return this.http
            .get(`${this.BASE_URL}support`)
            .pipe(map((res: { data: DonationInfo }) => res.data));
    }

    getSupperList(): Observable<Supports[]> {
        return this.http
            .get(`${this.BASE_URL}static/supportlist`)
            .pipe(map((res: { data: Supports[] }) => res.data));
    }

    getSupperDetail(link: string): Observable<SupportDetails[]> {
        return this.http
            .get(link)
            .pipe(map((res: { data: SupportDetails[] }) => res.data));
    }
}
