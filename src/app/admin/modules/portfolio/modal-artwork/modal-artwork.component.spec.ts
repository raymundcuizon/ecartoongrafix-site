import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalArtworkComponent } from './modal-artwork.component';

describe('ModalArtworkComponent', () => {
  let component: ModalArtworkComponent;
  let fixture: ComponentFixture<ModalArtworkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalArtworkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalArtworkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
