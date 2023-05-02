import { DataType } from "../DataType"

function stepOneFormValidation(state: DataType) {
    if (state.vehicle_id.length > 0 &&
        state.model_id.length > 0) {
        return true
    }

    return false
}

function stepTwoFormValidation(state: DataType) {
    if (state.image_url.length > 0 &&
        state.description.length > 0) {
        return true
    }

    return false
}

function stepThreeFormValidation(state: DataType) {
    if (state.cName.length > 0 &&
        state.cEmail.length > 0 &&
        state.cPhone.length > 0 &&
        state.cMessage.length > 0) {
        return true
    }

    return false
}

export { stepOneFormValidation, stepTwoFormValidation, stepThreeFormValidation };