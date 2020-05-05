import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportJadwalComponent } from './report-jadwal.component';

describe('ReportJadwalComponent', () => {
  let component: ReportJadwalComponent;
  let fixture: ComponentFixture<ReportJadwalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportJadwalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportJadwalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
