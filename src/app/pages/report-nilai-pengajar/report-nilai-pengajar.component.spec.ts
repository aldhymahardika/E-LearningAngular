import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportNilaiPengajarComponent } from './report-nilai-pengajar.component';

describe('ReportNilaiPengajarComponent', () => {
  let component: ReportNilaiPengajarComponent;
  let fixture: ComponentFixture<ReportNilaiPengajarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportNilaiPengajarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportNilaiPengajarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
