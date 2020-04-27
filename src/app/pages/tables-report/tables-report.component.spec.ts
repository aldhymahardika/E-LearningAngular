import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TablesReportComponent } from './tables-report.component';

describe('TablesReportComponent', () => {
  let component: TablesReportComponent;
  let fixture: ComponentFixture<TablesReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TablesReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TablesReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
