import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BAddComponent } from './b-add.component';

describe('BAddComponent', () => {
  let component: BAddComponent;
  let fixture: ComponentFixture<BAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BAddComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
