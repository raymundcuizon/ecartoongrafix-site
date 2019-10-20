import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalArtworkUpdateComponent } from './modal-artwork-update.component';

describe('ModalArtworkUpdateComponent', () => {
  let component: ModalArtworkUpdateComponent;
  let fixture: ComponentFixture<ModalArtworkUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalArtworkUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalArtworkUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
