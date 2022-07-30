import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BsIndexComponent } from './bs-index.component';

describe('BsIndexComponent', () => {
  let component: BsIndexComponent;
  let fixture: ComponentFixture<BsIndexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BsIndexComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BsIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
