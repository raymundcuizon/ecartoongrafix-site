import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { APP_CONFIG, AppConfig } from '../../app-config.module';
import { Process } from '../data/schema';


@Injectable({ providedIn: 'root' })
export class ProcessService {

    formData: Process;
    list: Process[];

    constructor(private http: HttpClient, @Inject(APP_CONFIG) private config: AppConfig
    ) {

    }

    getList() {
      return this.http.get(`${this.config.apiUrl}/private/process`);
        //   .toPromise().then(res => {
        //       const d: any = res;
        //       this.list = d.datalist as Process[];
        //   });
    }

    get(id) {
        return this.http.get(`${this.config.apiUrl}/public/process/${id}`);
    }

    create(data: any, files: Set<File>) {

        const formData: FormData = new FormData();
        formData.append(`name`, data.name);
        formData.append(`description`, data.description);
        files.forEach(file => {
            formData.append(`banner`, file);
        });

        return this.http.post(`${this.config.apiUrl}/private/process`, formData );

    }

    update(id, data) {
        return this.http.patch(`${this.config.apiUrl}/private/process/${id}`, data);
    }

    setepSequence(id, data) {
        return this.http.patch(`${this.config.apiUrl}/private/process/${id}/sequence`, data);
    }

    processSequence(data: any) {
        return this.http.patch(`${this.config.apiUrl}/private/process/sequence`, data);
    }

    visibility(id) {
        return this.http.patch(`${this.config.apiUrl}/private/process/visibility/${id}`, {});
    }

    visibilityStep(id) {
        return this.http.patch(`${this.config.apiUrl}/private/process/visibility/artwork/${id}`, {});
    }

}
