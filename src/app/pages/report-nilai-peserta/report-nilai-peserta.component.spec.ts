import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportNilaiPesertaComponent } from './report-nilai-peserta.component';

describe('ReportNilaiPesertaComponent', () => {
  let component: ReportNilaiPesertaComponent;
  let fixture: ComponentFixture<ReportNilaiPesertaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportNilaiPesertaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportNilaiPesertaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
