import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportAbsenPengajarComponent } from './report-absen-pengajar.component';

describe('ReportAbsenPengajarComponent', () => {
  let component: ReportAbsenPengajarComponent;
  let fixture: ComponentFixture<ReportAbsenPengajarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportAbsenPengajarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportAbsenPengajarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
