import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SportsContentComponent } from './sports-content.component';

describe('SportsContentComponent', () => {
  let component: SportsContentComponent;
  let fixture: ComponentFixture<SportsContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SportsContentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SportsContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
