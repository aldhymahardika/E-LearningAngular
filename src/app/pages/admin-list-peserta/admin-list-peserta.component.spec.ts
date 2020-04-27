import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminListPesertaComponent } from './admin-list-peserta.component';

describe('AdminListPesertaComponent', () => {
  let component: AdminListPesertaComponent;
  let fixture: ComponentFixture<AdminListPesertaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminListPesertaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminListPesertaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
