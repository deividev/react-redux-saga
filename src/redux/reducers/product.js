import { ACTIONS_PRODUCTS } from "../../models/enums/actionProduct.enum";


const initiState = {
    products: []
}


export const products = (state = initiState.products, action) => {
    switch(action.type) {
        case(ACTIONS_PRODUCTS.CREAR):
            state.push(action.payload);
            return [...state];
        default:
            return state;
    }
}

export default products;