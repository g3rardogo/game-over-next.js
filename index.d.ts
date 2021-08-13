type Url = string
type Json =
  | string
  | number
  | boolean
  | null
  | { [property: string]: Json }
  | Json[]

type TProductId = string


type TProduct = {
  id: TProductId
  name: string
  sku: string
  price: number
  image: Url
  shortDescription: string
  description: string
}

type TPRODUCTSDetailResponse = TProduct

type TProductsResponse = {
  lenght: number
  data: TProduct[]
  error?: string
}
