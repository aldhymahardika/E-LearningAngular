import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MateriPengajarComponent } from './materi-pengajar.component';

describe('MateriPengajarComponent', () => {
  let component: MateriPengajarComponent;
  let fixture: ComponentFixture<MateriPengajarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MateriPengajarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MateriPengajarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
