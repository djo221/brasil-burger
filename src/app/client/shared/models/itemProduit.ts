import { Produit } from "./produit"

export interface ItemProduit {
  id?:number
  produit?: Produit
  boisson? :  []
  portionFrite?: []
}
