import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BsDeleteComponent } from './bs-delete.component';

describe('BsDeleteComponent', () => {
  let component: BsDeleteComponent;
  let fixture: ComponentFixture<BsDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BsDeleteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BsDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
