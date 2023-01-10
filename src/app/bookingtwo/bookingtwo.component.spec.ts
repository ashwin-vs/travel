import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookingtwoComponent } from './bookingtwo.component';

describe('BookingtwoComponent', () => {
  let component: BookingtwoComponent;
  let fixture: ComponentFixture<BookingtwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookingtwoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookingtwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
