import { Produit, ProduitDetail } from "./produit"

export interface ItemProduit {
  id:number
  produit:  ProduitDetail
  boisson? :  Produit[]
  portionFrite?: Produit[]
}
