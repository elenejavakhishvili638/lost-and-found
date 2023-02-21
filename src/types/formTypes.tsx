

export type Form = {
    id: string
    title: string
    lost_date: string
    other: string
    description: string
    location: string
    image: string | File
    address: {
        longitude: number,
        latitude: number
    }

}