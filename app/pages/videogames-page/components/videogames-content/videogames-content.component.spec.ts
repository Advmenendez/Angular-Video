import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideogamesContentComponent } from './videogames-content.component';

describe('VideogamesContentComponent', () => {
  let component: VideogamesContentComponent;
  let fixture: ComponentFixture<VideogamesContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VideogamesContentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VideogamesContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
