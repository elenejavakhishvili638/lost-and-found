type Properties = {
    color: string
    size: string
    shape: string
    description: string
}

export type Items = {
    id: string
    title: string
    lost_date: string
    other?: string
    vital_properties: Properties
    // estimated_location?: string
    location: string
    image: string
}

//iamge should be file