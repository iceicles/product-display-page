export interface iPrice {
    value?: number
    maxPrice?: number
    minPrice?: number
}

export interface iBrand {
    label: string;
    url?: string;
}

export interface iFeatureBullet {
    description: string
}

export interface iProductSku {
    code: string
    optionIds: number[]
}

export interface iProductOptionValue {
    value: string
    id: number
    skuCodes: string[]
}

export interface iProductOption {
    descriptor: string
    display: string
    values?: iProductOptionValue[]
}

export interface iProductImage {
    altText: string
    url: string
}

export interface iProductData {
    code: string
    breadcrumbList: iCrumb[]
    images: iProductImage[]
    name: string
    averageRating: number
    numberOfReviews: number
    skus: iProductSku[]
    options: iProductOption[]
    featureBullets: iFeatureBullet[]
    brand: iBrand
    originalPrice: iPrice
    currentPrice: iPrice
    priceMessage?: string
}

export interface iCrumb {
    categoryId: string
    label: string
    url: string
}

export interface iProductResponseError {
    data: string
    status: number
}
