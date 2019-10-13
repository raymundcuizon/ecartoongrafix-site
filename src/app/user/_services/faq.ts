import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, from } from 'rxjs';
import { map } from 'rxjs/operators';
import { APP_CONFIG, AppConfig } from '../../app-config.module';
import { Faq } from '../data/schema';

@Injectable({ providedIn: 'root' })
export class FaqService {

    formData: Faq;
    list: Faq[];
    headElements: ['ID', 'Title', 'Question', 'Answer', 'Actions'];

    constructor(private http: HttpClient, @Inject(APP_CONFIG) private config: AppConfig
    ) {

    }

    create(data: any) {
        return this.http.post(`${this.config.apiUrl}/private/faq`, data );
    }

    getList() {
        this.http.get(`${this.config.apiUrl}/public/faq`)
            .toPromise().then(res => {
                this.list = res as Faq[]
            })
    }

    get(id) {
        return this.http.get(`${this.config.apiUrl}/public/faq/${id}`);
    }

    delete(id) {
        return this.http.delete(`${this.config.apiUrl}/private/faq/${id}`);
    }

    update(id, data) {
        return this.http.patch(`${this.config.apiUrl}/private/faq/${id}`, data);
    }

    visibility(id) {
        return this.http.patch(`${this.config.apiUrl}/private/faq/visibility/${id}`, {});
    }

}
