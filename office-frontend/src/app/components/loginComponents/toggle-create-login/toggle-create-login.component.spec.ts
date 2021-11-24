import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToggleCreateLoginComponent } from './toggle-create-login.component';

describe('ToggleCreateLoginComponent', () => {
  let component: ToggleCreateLoginComponent;
  let fixture: ComponentFixture<ToggleCreateLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToggleCreateLoginComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ToggleCreateLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
