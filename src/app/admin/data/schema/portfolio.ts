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



export class PortfolioPageSettingArtwork {
  page: number;
  paginate: number;
}

export class PortfolioDatalistArtwork {
  id: number;
  name: string;
  description: string;
  status: boolean;
  img_url: string;
}

export class PaginationArtwork {
  pages: number;
  total: number;
  before: number;
  next: number;
}
