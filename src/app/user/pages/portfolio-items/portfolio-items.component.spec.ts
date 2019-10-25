import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioItemsComponent } from './portfolio-items.component';

describe('PortfolioItemsComponent', () => {
  let component: PortfolioItemsComponent;
  let fixture: ComponentFixture<PortfolioItemsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PortfolioItemsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PortfolioItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
