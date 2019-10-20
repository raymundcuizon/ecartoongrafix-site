import { Component, OnInit, ViewChild } from '@angular/core';
import { first } from 'rxjs/operators';
import { PortfolioService } from '../../../_services';
import { Router, ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { ModalArtworkComponent } from '../modal-artwork/modal-artwork.component';
import { ModalArtworkUpdateComponent } from '../modal-artwork-update/modal-artwork-update.component';


@Component({
  selector: 'app-artwork',
  templateUrl: './artwork.component.html',
  styleUrls: ['./artwork.component.scss']
})
export class ArtworkComponent implements OnInit {

  id: number;

  public files: Set<File> = new Set();
  constructor(private portfolioService: PortfolioService
    , private router: Router
    , private route: ActivatedRoute 
    , public dialog: MatDialog) { 
    this.id = this.route.snapshot.params['id'];

  }

  openDialog() {

    const dialogRef = this.dialog.open(ModalArtworkComponent, {
        width: '50%', height: '500px',
        data: {
          action: 'add',
          details: this.id 
        },
        disableClose: true
      });

    dialogRef.afterClosed().subscribe(result => {
      this.portfolioService.getArtworkList(this.id);
    });
  
  }


  update(data){
    const dialogRef = this.dialog.open(ModalArtworkUpdateComponent, {
      width: '50%', height: '500px',
      data: {
        action: 'update',
        details: data 
      },
      disableClose: false
    });

  dialogRef.afterClosed().subscribe(result => {
    this.portfolioService.getArtworkList(this.id);
  });
  }

  visibility(data){
    console.log(data);
  }

  delete(data){
    console.log(data);
  }

  onVisibility(id: number) {
    this.portfolioService.visibilityArtwork(id).subscribe(res => {
      this.portfolioService.getArtworkList(this.id);
    })
  }

  ngOnInit() {
    this.portfolioService.getArtworkList(this.id);
  }
}
