const initialState={
    isShown:false,
    isSuccess:true,
    category:null,
    customMessage:''
}

const notification = (state=initialState,action)=> {
    switch (action.type) {
        case 'NOTIFICATION_TRIGGER':
            return {...state,
                    isShown:true,
                    isSuccess:action.payload.isSuccess,
                    category:action.payload.category,
                    customMessage:action.payload.customMessage
            }
     
        case 'NOTIFICATION_OFF':
            return {...state,isShown:false}

        default:
            return state
    }
}
export default notification