import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KelasUserComponent } from './kelas-user.component';

describe('KelasUserComponent', () => {
  let component: KelasUserComponent;
  let fixture: ComponentFixture<KelasUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KelasUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KelasUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
