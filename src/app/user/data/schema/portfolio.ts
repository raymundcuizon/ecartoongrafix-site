export class PortfolioPageSetting {
    page: number;
    paginate: number;
}

export class PortfolioDatalist {
    id: number;
    name: string;
    description: string;
    status: boolean;
    img_url: string;
}

export class Pagination {
    pages: number;
    total: number;
    before: number;
    next: number;
}