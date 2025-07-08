import { DETAILS } from "./actionTypes"

const initialState = {
    name: "",
    email: "",
}

const FormReducer = (state = initialState, action) => {
    switch (action.type) {
        case DETAILS:
            return {
                ...state,
                [action.payload.fieldName]: action.payload.value,
            };
        default:
            return state;
    }
}

export default FormReducer;