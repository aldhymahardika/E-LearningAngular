import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailMateriComponent } from './detail-materi.component';

describe('DetailMateriComponent', () => {
  let component: DetailMateriComponent;
  let fixture: ComponentFixture<DetailMateriComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailMateriComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailMateriComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
