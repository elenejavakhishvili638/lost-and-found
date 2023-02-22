

export type Items = {
    id: string
    title: string
    lost_date: string
    other?: string
    // vital_properties: Properties
    // estimated_location?: string
    description: string
    location: string
    image: string | undefined
    address: {
        longitude: number | undefined,
        latitude: number | undefined
    }
}

//iamge should be file