import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardPesertaComponent } from './dashboard-peserta.component';

describe('DashboardPesertaComponent', () => {
  let component: DashboardPesertaComponent;
  let fixture: ComponentFixture<DashboardPesertaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardPesertaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardPesertaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
