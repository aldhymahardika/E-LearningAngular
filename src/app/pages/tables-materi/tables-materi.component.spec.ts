import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TablesMateriComponent } from './tables-materi.component';

describe('TablesMateriComponent', () => {
  let component: TablesMateriComponent;
  let fixture: ComponentFixture<TablesMateriComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TablesMateriComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TablesMateriComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
