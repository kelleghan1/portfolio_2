// export type ResponseObjectType = {
//   data: { [key: string]: unknown}
// }

// Portfolio items
export interface PortfolioItemType {
  description: string
  homeImage: string
  id: string
  images: string[]
  name: string
  primaryImage: string
  products: string[]
  rowColor: string
  textColor?: string
  categories: string[]
}

export interface PortfolioItemsResponseType {
  data: { items: PortfolioItemType[] }
}
