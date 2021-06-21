import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnemoneywebSdkComponent } from './onemoneyweb-sdk.component';

describe('OnemoneywebSdkComponent', () => {
  let component: OnemoneywebSdkComponent;
  let fixture: ComponentFixture<OnemoneywebSdkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OnemoneywebSdkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OnemoneywebSdkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
