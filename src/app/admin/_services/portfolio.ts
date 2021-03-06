import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { APP_CONFIG, AppConfig } from '../../app-config.module';
import { PortfolioDatalist
    , PortfolioPageSetting
    , Pagination
    , PortfolioDatalistArtwork
    , PortfolioPageSettingArtwork
    , PaginationArtwork } from '../data/schema';
import * as $ from 'jquery';


@Injectable({ providedIn: 'root' })
export class PortfolioService {

    // portfolioDataList: PortfolioDatalist[];
    // portfolioPageSetting: PortfolioPageSetting = {
    //     page: 1,
    //     paginate: 10
    // };
    // pagination: Pagination;

    portfolioDataListArtwork: PortfolioDatalistArtwork[];
    portfolioPageSettingArtwork: PortfolioPageSettingArtwork = {
        page: 1,
        paginate: 25
    };
    paginationArtwork: PaginationArtwork;

    constructor(private http: HttpClient, @Inject(APP_CONFIG) private config: AppConfig
    ) {

    }

    getList(pageSetting: any) {

        return this.http.get(`${this.config.apiUrl}/public/portfolio?${$.param(pageSetting)}`)
           
    }

    getArtworkList(id: any) {

        this.http.get(`${this.config.apiUrl}/public/portfolio/artwork/${id}?${$.param(this.portfolioPageSettingArtwork)}`)
            .toPromise().then(res => {
                const d:any = res;
                if(this.portfolioPageSettingArtwork.page > 1){
                    this.portfolioDataListArtwork = this.portfolioDataListArtwork.concat(d.data_list as PortfolioDatalistArtwork[])
                } else {
                    this.portfolioDataListArtwork = d.data_list as PortfolioDatalistArtwork[];
                }

                this.paginationArtwork = d.pagination;
            })
    }

    update(id, data) {
        return this.http.patch(`${this.config.apiUrl}/private/portfolio/${id}`, data);
    }

    updateArtwork(id, data) {
        return this.http.patch(`${this.config.apiUrl}/private/portfolio/artwork/${id}`, data);
    }


    create(data: any, files: Set<File>) {

        const formData: FormData = new FormData();
        formData.append(`name`, data.name);
        formData.append(`description`, data.description);
        files.forEach(file => {
            formData.append(`thumbnail`, file);
        });

        return this.http.post(`${this.config.apiUrl}/private/portfolio`, formData );

    }


    createArtwork(description: any, id: any,  files: Set<File>) {
        const formData: FormData = new FormData();
        formData.append('portfolio_id', id);

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

    visibility(id) {
        return this.http.patch(`${this.config.apiUrl}/private/portfolio/visibility/${id}`, {});
    }

    visibilityArtwork(id) {
        return this.http.patch(`${this.config.apiUrl}/private/portfolio/visibility/artwork/${id}`, {});
    }
}
