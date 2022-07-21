import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsDisplayComponent } from './details-display.component';

describe('DetailsDisplayComponent', () => {
  let component: DetailsDisplayComponent;
  let fixture: ComponentFixture<DetailsDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailsDisplayComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailsDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
