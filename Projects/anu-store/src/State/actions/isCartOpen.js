import { CLOSE_CART, OPEN_CART } from "../constants/actionTypes"


const openCart = () => {
    return {
        type: OPEN_CART,
    }
}

const closeCart = () => {
    return {
        type: CLOSE_CART,
    }
}

export { openCart, closeCart }