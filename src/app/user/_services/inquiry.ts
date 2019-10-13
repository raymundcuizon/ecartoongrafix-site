import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { APP_CONFIG, AppConfig } from '../../app-config.module';
import { InquiryDatalist, InquiryPageSetting, InquiryPagination } from '../data/schema';
import * as $ from 'jquery';

@Injectable({ providedIn: 'root' })
export class InquiryService { 

    inqDataList: InquiryDatalist[];
    inqPageSetting: InquiryPageSetting = {
        page: 1,
        paginate: 10
    };
    inqPagination: InquiryPagination;

    headElements: ['ID', 'Title', 'Question', 'Answer', 'Actions']


    constructor(private http: HttpClient, @Inject(APP_CONFIG) private config: AppConfig
    ) {

    }

    getList() {

        this.http.get(`${this.config.apiUrl}/private/inquiries?${$.param(this.inqPageSetting)}`)
            .toPromise().then(res => {
                const d:any = res;
                this.inqDataList = d.data_list as InquiryDatalist[];
                this.inqPagination = d.pagination;
            })
    }

}