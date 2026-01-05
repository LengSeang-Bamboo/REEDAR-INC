export interface Car {
    id: number
    name: string
    type: string
    price: number
    image: string
    fuel?: string
    transmission? : string
    seats?: number
    luggage?: number
    rating? : number
    location: string
    destination : string
    driver? : boolean
}