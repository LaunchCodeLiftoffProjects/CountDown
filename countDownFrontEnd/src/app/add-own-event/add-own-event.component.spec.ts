import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddOwnEventComponent } from './add-own-event.component';

describe('AddOwnEventComponent', () => {
  let component: AddOwnEventComponent;
  let fixture: ComponentFixture<AddOwnEventComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddOwnEventComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddOwnEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
