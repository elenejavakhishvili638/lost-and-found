import { Items } from "../../types/itemsTypes";

export const formValidation = (data: Items) => {
    const errors = {
        id: "",
        title: "",
        lost_date: "",
        description: "",
        location: "",
        image: "",
        // address: {
        //     longitude: undefined,
        //     latitude: undefined
        // }
    }

    if (!data.title) {
        errors.title = "Please add the title!"
    }
    if (!data.id) {
        errors.id = "Please add the id!"
    }
    if (!data.lost_date) {
        errors.lost_date = "Please add the date!"
    }

    if (!data.description) {
        errors.description = "Please add the description!"
    }
    if (!data.image) {
        errors.image = "Please add the picture!"
    }
    if (!data.location) {
        errors.location = "Please add the location!"
    }

    return errors
}