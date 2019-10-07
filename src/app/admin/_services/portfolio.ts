import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { APP_CONFIG, AppConfig } from '../../app-config.module';
import { PortfolioDatalist, PortfolioPageSetting, Pagination } from '../data/schema';
import * as $ from 'jquery';


@Injectable({ providedIn: 'root' })
export class PortfolioService {

    portfolioDataList: PortfolioDatalist[];
    portfolioPageSetting: PortfolioPageSetting = {
        page: 1,
        paginate: 10
    };
    pagination: Pagination;

    constructor(private http: HttpClient, @Inject(APP_CONFIG) private config: AppConfig
    ) {

    }
    
    getList() {

        this.http.get(`${this.config.apiUrl}/public/portfolio?${$.param(this.portfolioPageSetting)}`)
            .toPromise().then(res => {
                const d:any = res;
                if(this.portfolioPageSetting.page > 1){
                    this.portfolioDataList = this.portfolioDataList.concat(d.data_list as PortfolioDatalist[])
                } else {
                    this.portfolioDataList = d.data_list as PortfolioDatalist[];
                }

                this.pagination = d.pagination;
            })
    }

    public create(data: any, files: Set<File>) {
        
        const formData: FormData = new FormData();
        formData.append(`name`, data.name);
        formData.append(`description`, data.description);
        files.forEach(file => {
            formData.append(`thumbnail`, file);
        });

        return this.http.post(`${this.config.apiUrl}/private/portfolio`, formData );

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