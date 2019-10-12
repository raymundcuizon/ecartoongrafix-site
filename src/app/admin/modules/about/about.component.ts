import { Component, OnInit } from '@angular/core';
import { AboutService } from '../../_services'
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  public Editor = ClassicEditor;
  description: string;
  
  constructor(public aboutService: AboutService) { }

  ngOnInit() {
    this.aboutService.get().subscribe(res => {
      const d:any = res;
      this.description = d.description;
    });

  }

  onSubmit(){
    this.aboutService.update({
      description: this.description
    }).subscribe(res => {
      console.log(res)
    })
    
  }
}
