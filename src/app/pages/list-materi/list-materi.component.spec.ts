import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListMateriComponent } from './list-materi.component';

describe('ListMateriComponent', () => {
  let component: ListMateriComponent;
  let fixture: ComponentFixture<ListMateriComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListMateriComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListMateriComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
