import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BEditComponent } from './b-edit.component';

describe('BEditComponent', () => {
  let component: BEditComponent;
  let fixture: ComponentFixture<BEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
