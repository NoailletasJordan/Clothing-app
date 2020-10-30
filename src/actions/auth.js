export const authSignIn=(email,displayName)=>{
    return {
        type:'AUTH_SIGN_IN',
        payload: {email,displayName}
    }
}

export const authLogOut= ()=> {
    return {
        type:'AUTH_LOG_OUT'
    }
}

export const authUpdateDisplayName= (displayName)=> {
    return {
        type:'AUTH_UPDATE_DISPLAY_NAME',
        payload: {displayName}
    }
}
