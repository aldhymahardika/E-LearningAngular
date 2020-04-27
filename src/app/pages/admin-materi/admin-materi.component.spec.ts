import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminMateriComponent } from './admin-materi.component';

describe('AdminMateriComponent', () => {
  let component: AdminMateriComponent;
  let fixture: ComponentFixture<AdminMateriComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminMateriComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminMateriComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
