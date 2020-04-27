import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminPesertaComponent } from './admin-peserta.component';

describe('AdminPesertaComponent', () => {
  let component: AdminPesertaComponent;
  let fixture: ComponentFixture<AdminPesertaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminPesertaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminPesertaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
