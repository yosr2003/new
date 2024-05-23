import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FypComponent } from './fyp.component';

describe('FypComponent', () => {
  let component: FypComponent;
  let fixture: ComponentFixture<FypComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FypComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FypComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
