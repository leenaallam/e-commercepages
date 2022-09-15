import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondpageelectronicsComponent } from './secondpageelectronics.component';

describe('SecondpageelectronicsComponent', () => {
  let component: SecondpageelectronicsComponent;
  let fixture: ComponentFixture<SecondpageelectronicsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecondpageelectronicsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SecondpageelectronicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
