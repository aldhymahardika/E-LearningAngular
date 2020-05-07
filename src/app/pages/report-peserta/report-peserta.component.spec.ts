import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportPesertaComponent } from './report-peserta.component';

describe('ReportPesertaComponent', () => {
  let component: ReportPesertaComponent;
  let fixture: ComponentFixture<ReportPesertaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportPesertaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportPesertaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
