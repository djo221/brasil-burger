import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionListerComponent } from './section-lister.component';

describe('SectionListerComponent', () => {
  let component: SectionListerComponent;
  let fixture: ComponentFixture<SectionListerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SectionListerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SectionListerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
