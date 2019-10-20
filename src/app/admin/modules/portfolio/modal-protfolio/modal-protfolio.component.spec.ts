import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalProtfolioComponent } from './modal-protfolio.component';

describe('ModalProtfolioComponent', () => {
  let component: ModalProtfolioComponent;
  let fixture: ComponentFixture<ModalProtfolioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalProtfolioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalProtfolioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
