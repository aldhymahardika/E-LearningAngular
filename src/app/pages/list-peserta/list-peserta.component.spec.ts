import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListPesertaComponent } from './list-peserta.component';

describe('ListPesertaComponent', () => {
  let component: ListPesertaComponent;
  let fixture: ComponentFixture<ListPesertaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListPesertaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListPesertaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
