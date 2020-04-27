import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailFileUjianComponent } from './detail-file-ujian.component';

describe('DetailFileUjianComponent', () => {
  let component: DetailFileUjianComponent;
  let fixture: ComponentFixture<DetailFileUjianComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailFileUjianComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailFileUjianComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
