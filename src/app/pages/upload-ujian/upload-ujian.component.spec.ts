import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadUjianComponent } from './upload-ujian.component';

describe('UploadUpdateComponent', () => {
  let component: UploadUjianComponent;
  let fixture: ComponentFixture<UploadUjianComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UploadUjianComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadUjianComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
