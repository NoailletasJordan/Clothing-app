const initialState = {
    isShow:false,
    cartNumber: 0,
    cartItems: [],
    totalPrice:0,
    hasOpenCartThisSession:false
}

const cart = (state=initialState,action) => {

    switch (action.type) {   
        case 'CART_GET_FROM_LOCAL_STORAGE':
            return {...state, cartItems:action.payload.newCartItems}

        case 'CART_ADD':
            const {newState,index} = StateCopyAndFindIndex(state)
            if (index===-1){ //create new
                if (!action.payload.number){ 
                    const newItem= {...action.payload, number:1} //cartItems
                    newState.cartItems.push(newItem)
                    return  newState;
                }
            } else { // add +1 to number
                newState.cartItems[index].number++
                return newState
            }
            return state

        case 'CART_SUBSTRACT':
            if (action.payload.number<=1 ||  action.payload.removeOpt===true){ //remove du cartItem
                const {newState,index} = StateCopyAndFindIndex(state)
                newState.cartItems.splice(index,1)
                return newState
            } else { //diminue le nombre
                const {newState,index} = StateCopyAndFindIndex(state)
                newState.cartItems[index].number--
                return newState
            } 


        case 'CART_TOGGLE_SHOW' : 
            if (action.payload.boolOpt!==undefined) {
                return {...state, isShow:action.payload.boolOpt, hasOpenCartThisSession:true}
            }
            else return {...state, isShow:!state.isShow, hasOpenCartThisSession:true}

        case 'CART_UPDATE_TOTAL_PRICE' : {
            if (state.cartItems.length>=1){
                const totalPrice=state.cartItems.reduce((acc,cur)=>(acc+(cur.price*cur.number)),0)
                return {...state, totalPrice}
            }
            else return {...state, totalPrice:0}
        }

        case 'CART_UPDATE_CART_NUMBER' : {
            if (state.cartItems.length>=1){
                const cartNumber = state.cartItems.reduce((acc,cur)=>(acc+cur.number),0)
                return {...state, cartNumber}
            }
            else return {...state, cartNumber:0}
        }

        case 'CART_RESET' : {
            return initialState
        }
    
        default:
            return state;
    }

    function StateCopyAndFindIndex (state) {
        const newState= JSON.parse(JSON.stringify(state))
        const index= newState.cartItems.findIndex(elt => action.payload.id===elt.id)
        return {newState,index}
    }
}

export default cart;