import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportJadwalMataPelajaranComponent } from './report-jadwal-mata-pelajaran.component';

describe('ReportJadwalMataPelajaranComponent', () => {
  let component: ReportJadwalMataPelajaranComponent;
  let fixture: ComponentFixture<ReportJadwalMataPelajaranComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportJadwalMataPelajaranComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportJadwalMataPelajaranComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
