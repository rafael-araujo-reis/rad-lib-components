import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatSignInComponent } from './mat-sign-in.component';

describe('MatSignInComponent', () => {
  let component: MatSignInComponent;
  let fixture: ComponentFixture<MatSignInComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MatSignInComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MatSignInComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
