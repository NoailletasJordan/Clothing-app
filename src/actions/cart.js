export const cartAdd = (obj) => {
    return {
        type: 'CART_ADD',
        payload : obj
    }
}

export const cartSubstract = (obj) => {
    return {
        type: 'CART_SUBSTRACT',
        payload : obj
    }
}

export const cartToggleShow = (boolOpt) => {
    return {
        type: 'CART_TOGGLE_SHOW',
        payload : {boolOpt}
    }
}

export const cartUpdateTotalPrice = () => {
    return {
        type:'CART_UPDATE_TOTAL_PRICE'
    }
}

export const cartUpdateCartNumber = () => {
    return {
        type:'CART_UPDATE_CART_NUMBER'
    }
}

export const cartGetFromLocalStorage = (newCartItems) => {
    return {
        type:'CART_GET_FROM_LOCAL_STORAGE',
        payload: {newCartItems}
    }
}

export const cartReset = () => {
    return {
        type:'CART_RESET'
    }
}



