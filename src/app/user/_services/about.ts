import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { APP_CONFIG, AppConfig } from '../../app-config.module';
import { About } from '../data/schema';


@Injectable({ providedIn: 'root' })
export class AboutService { 

    list: About[];
    description: string;
    constructor(private http: HttpClient, @Inject(APP_CONFIG) private config: AppConfig
    ) {

    }

    getList() {
        this.http.get(`${this.config.apiUrl}/public/about`)
            .toPromise().then(res => {
                const d:any = res;
                this.description = d.description;
            })
    }

}