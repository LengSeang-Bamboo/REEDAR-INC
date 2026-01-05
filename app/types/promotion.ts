export interface PromotionItem {
    id: number
    title : string
    description? : string
    image? : string
    discountPercent: number
    validFrom : string
    validTo: string
    terms? : string
    isActive? : boolean
}