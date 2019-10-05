import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { APP_CONFIG, AppConfig } from '../../app-config.module';


@Injectable({ providedIn: 'root' })
export class PortfolioService {

    constructor(private http: HttpClient, @Inject(APP_CONFIG) private config: AppConfig
    ) {

    }
    
    public createArtwork(description, files: Set<File>) {
        const formData: FormData = new FormData();
        formData.append('portfolio_id', '6');

        let counter = 0;
        files.forEach(file => {
            counter ++;
            formData.append(`artwork_${counter}`, file);
        });

        let x = 0;
        description.forEach(d => {
            x ++;
            formData.append(`desc_${x}`, d);
        });

        return this.http.post(`${this.config.apiUrl}/private/portfolio/artwork`, formData );
    }
}