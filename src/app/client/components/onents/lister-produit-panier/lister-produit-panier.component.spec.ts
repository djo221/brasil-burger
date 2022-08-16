import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListerProduitPanierComponent } from './lister-produit-panier.component';

describe('ListerProduitPanierComponent', () => {
  let component: ListerProduitPanierComponent;
  let fixture: ComponentFixture<ListerProduitPanierComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListerProduitPanierComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListerProduitPanierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
