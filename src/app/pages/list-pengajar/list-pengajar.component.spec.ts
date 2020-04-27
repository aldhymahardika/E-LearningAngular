import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListPengajarComponent } from './list-pengajar.component';

describe('ListPengajarComponent', () => {
  let component: ListPengajarComponent;
  let fixture: ComponentFixture<ListPengajarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListPengajarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListPengajarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
