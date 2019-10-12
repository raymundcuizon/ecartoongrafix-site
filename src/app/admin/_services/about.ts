import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { APP_CONFIG, AppConfig } from '../../app-config.module';

@Injectable({ providedIn: 'root' })
export class AboutService { 
    constructor(private http: HttpClient, @Inject(APP_CONFIG) private config: AppConfig
    ) {

    }

    get() {
        return this.http.get(`${this.config.apiUrl}/public/about`);
    }

    update(data) {
        return this.http.patch(`${this.config.apiUrl}/private/about`, data);
    }

}