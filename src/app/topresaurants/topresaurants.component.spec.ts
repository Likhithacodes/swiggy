import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopresaurantsComponent } from './topresaurants.component';

describe('TopresaurantsComponent', () => {
  let component: TopresaurantsComponent;
  let fixture: ComponentFixture<TopresaurantsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TopresaurantsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TopresaurantsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
