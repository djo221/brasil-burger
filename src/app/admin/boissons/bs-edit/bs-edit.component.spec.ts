import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BsEditComponent } from './bs-edit.component';

describe('BsEditComponent', () => {
  let component: BsEditComponent;
  let fixture: ComponentFixture<BsEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BsEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BsEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
