import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserKuisComponent } from './user-kuis.component';

describe('UserKuisComponent', () => {
  let component: UserKuisComponent;
  let fixture: ComponentFixture<UserKuisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserKuisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserKuisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
