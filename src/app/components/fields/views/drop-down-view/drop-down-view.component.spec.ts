import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DropDownViewComponent } from './drop-down-view.component';

describe('DropDownComponent', () => {
  let component: DropDownViewComponent;
  let fixture: ComponentFixture<DropDownViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DropDownViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DropDownViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
