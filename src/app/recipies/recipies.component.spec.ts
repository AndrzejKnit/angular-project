import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipiensComponent } from './recipiens.component';

describe('RecipiensComponent', () => {
  let component: RecipiensComponent;
  let fixture: ComponentFixture<RecipiensComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecipiensComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipiensComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
