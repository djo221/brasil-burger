export interface Post {
  id?:number
  title:string
  image:string
  date:string
  categories?: Array<string>
  description:string
  prix?:number
}
