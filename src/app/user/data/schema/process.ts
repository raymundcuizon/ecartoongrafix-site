export class Process {
  id?: number;
  slug: string;
  name: string;
  description: string;
  img_url?: string;
  steps?: {
    id?: number;
    step?: number;
    status?: number;
    title: string;
    description:string;
    img_url: string;
  }[]
}

export class Step {
  id?: number;
  step?: number;
  status?: number;
  title: string;
  description:string;
  img_url: string;
}