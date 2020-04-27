import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopicMateriComponent } from './topic-materi.component';

describe('TopicMateriComponent', () => {
  let component: TopicMateriComponent;
  let fixture: ComponentFixture<TopicMateriComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopicMateriComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopicMateriComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
