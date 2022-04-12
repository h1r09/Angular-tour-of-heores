import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroSuperpoderComponent } from './hero-superpoder.component';

describe('HeroSuperpoderComponent', () => {
  let component: HeroSuperpoderComponent;
  let fixture: ComponentFixture<HeroSuperpoderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeroSuperpoderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroSuperpoderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
