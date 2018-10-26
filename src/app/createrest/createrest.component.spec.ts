import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreaterestComponent } from './createrest.component';

describe('CreaterestComponent', () => {
  let component: CreaterestComponent;
  let fixture: ComponentFixture<CreaterestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreaterestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreaterestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
