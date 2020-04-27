import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminPengajarComponent } from './admin-pengajar.component';

describe('AdminPengajarComponent', () => {
  let component: AdminPengajarComponent;
  let fixture: ComponentFixture<AdminPengajarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminPengajarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminPengajarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
