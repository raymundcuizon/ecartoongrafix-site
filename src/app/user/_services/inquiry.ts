import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { APP_CONFIG, AppConfig } from '../../app-config.module';
import { InquiryDatalist, InquiryPageSetting, InquiryPagination } from '../data/schema';
import * as $ from 'jquery';

@Injectable({ providedIn: 'root' })
export class InquiryService { 

    constructor(private http: HttpClient, @Inject(APP_CONFIG) private config: AppConfig
    ) {

    }


    create(data: any, files: Set<File>) {
        const formData: FormData = new FormData();
        formData.append('contact_name', data.contact_name);
        formData.append('company_name', data.company_name);
        formData.append('phone_number', data.phone_number);
        formData.append('website', data.website);
        formData.append('email_address', data.email_address);
        formData.append('project_name', data.project_name);
        formData.append('license', data.license);
        formData.append('illustration_usage', data.illustration_usage);
        formData.append('client_type', data.client_type);
        formData.append('final_graphic_print', data.final_graphic_print);
        formData.append('final_graphic_web', data.final_graphic_web);
        formData.append('final_graphic_apparel', data.final_graphic_apparel);
        formData.append('final_graphic_other', data.final_graphic_other);
        formData.append('project_about', data.project_about);
        formData.append('cps_background', data.cps_background);
        formData.append('project_usage', data.project_usage);
        formData.append('target_audience', data.target_audience);
        formData.append('colors', data.colors);
        formData.append('look_feel', data.look_feel);
        formData.append('positioning', data.positioning);
        formData.append('font_lettering', data.font_lettering);
        formData.append('etc', data.etc);        
        let counter = 0;
        files.forEach(file => {
            counter ++;
            formData.append(`img_${counter}`, file);
        });
        return this.http.post(`${this.config.apiUrl}/public/inquiry`, formData );
    }

}