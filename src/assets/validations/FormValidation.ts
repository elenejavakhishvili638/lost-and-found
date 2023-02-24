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
    } else {
        errors.title = "pass"
    }
    if (!data.id) {
        errors.id = "Please add the id!"
    }
    else {
        errors.id = "pass"
    }
    if (!data.lost_date) {
        errors.lost_date = "Please add the date!"
    }
    else {
        errors.lost_date = "pass"
    }

    if (!data.description) {
        errors.description = "Please add the description!"
    }
    else {
        errors.description = "pass"
    }
    if (!data.image) {
        errors.image = "Please add the picture!"
    } else {
        errors.image = "pass"
    }
    if (!data.location) {
        errors.location = "Please add the location!"
    } else {
        errors.location = "pass"
    }

    return errors
}