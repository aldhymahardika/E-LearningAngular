import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailUjianComponent } from './detail-ujian.component';

describe('DetailUjianComponent', () => {
  let component: DetailUjianComponent;
  let fixture: ComponentFixture<DetailUjianComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailUjianComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailUjianComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
