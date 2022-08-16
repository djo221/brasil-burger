export interface Produit {
  id?:number
  nom:string
  image:  Blob
  prix?:number
  '@type'?: string
  quantity?: number
}

export interface ProduitDetail {
  id?:number
  nom:string
  image:  Blob
  prix:number
  '@type'?: string
  menuBurgers: []
  menuTailles: []
  menuPortions: []
  quatity: number 
}


