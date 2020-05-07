import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportMenuPengajarComponent } from './report-menu-pengajar.component';

describe('ReportMenuPengajarComponent', () => {
  let component: ReportMenuPengajarComponent;
  let fixture: ComponentFixture<ReportMenuPengajarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportMenuPengajarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportMenuPengajarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
