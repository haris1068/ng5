import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RestmocksComponent } from './restmocks.component';

describe('RestmocksComponent', () => {
  let component: RestmocksComponent;
  let fixture: ComponentFixture<RestmocksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RestmocksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RestmocksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
