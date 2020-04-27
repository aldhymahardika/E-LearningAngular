import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadMateriComponent } from './upload-materi.component';

describe('UploadMateriComponent', () => {
  let component: UploadMateriComponent;
  let fixture: ComponentFixture<UploadMateriComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UploadMateriComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadMateriComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
