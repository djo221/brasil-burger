import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BsAddComponent } from './bs-add.component';

describe('BsAddComponent', () => {
  let component: BsAddComponent;
  let fixture: ComponentFixture<BsAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BsAddComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BsAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
