import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminKelasComponent } from './admin-kelas.component';

describe('AdminKelasComponent', () => {
  let component: AdminKelasComponent;
  let fixture: ComponentFixture<AdminKelasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminKelasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminKelasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
