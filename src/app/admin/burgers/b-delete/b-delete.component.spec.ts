import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BDeleteComponent } from './b-delete.component';

describe('BDeleteComponent', () => {
  let component: BDeleteComponent;
  let fixture: ComponentFixture<BDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BDeleteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
