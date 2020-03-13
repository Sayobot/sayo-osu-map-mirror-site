import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export class UpdateData {
    time: string;
    detail: string[];
}

const config = {
    updateUrl: '/assets/updateData.json'
};

@Injectable({
    providedIn: 'root'
})
export class UpdatedLogService {
    updateData: UpdateData[];

    constructor(private http: HttpClient) {}

    getUpdatedData() {
        this.http
            .get(config.updateUrl)
            .subscribe((res: { success: boolean; data: UpdateData[] }) => {
                this.updateData = res.data;
            });
    }
}
