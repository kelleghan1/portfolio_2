// export type ResponseObjectType = {
//   data: { [key: string]: unknown}
// }

export interface PortfolioItemLinkType {
  url: string
  label: string
  isInternal?: boolean
}

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
  githubLinks?: PortfolioItemLinkType[]
  productLinks?: PortfolioItemLinkType[]
}

export interface PortfolioItemsResponseType {
  data: { items: PortfolioItemType[] }
}
