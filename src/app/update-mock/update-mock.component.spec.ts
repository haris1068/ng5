import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateMockComponent } from './update-mock.component';

describe('UpdateMockComponent', () => {
  let component: UpdateMockComponent;
  let fixture: ComponentFixture<UpdateMockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateMockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateMockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
