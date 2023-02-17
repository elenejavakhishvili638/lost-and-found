type Properties = {
    color: string
    size: string
    shape: string
    description: string
}

export type Form = {
    id: string
    title: string
    lost_date: string
    other: string
    description: string
    location: string
    image: File | string
    address: {
        longitude: number,
        latitude: number
    }

}