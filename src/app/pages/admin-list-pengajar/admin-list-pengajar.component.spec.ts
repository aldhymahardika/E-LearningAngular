import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminListPengajarComponent } from './admin-list-pengajar.component';

describe('AdminListPengajarComponent', () => {
  let component: AdminListPengajarComponent;
  let fixture: ComponentFixture<AdminListPengajarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminListPengajarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminListPengajarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
