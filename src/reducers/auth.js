import Firebase from '../Firebase/firebase.utils'

const initialState={
    isLogged:false,
    email:'',
    displayName:''
}

const auth =  (state=initialState, action) => {
    switch (action.type) {
        case 'AUTH_SIGN_IN':
        if (action.payload.displayName!==null && action.payload.displayName!==undefined){
            return {...state,isLogged:true,
            email:action.payload.email,
            displayName:action.payload.displayName}
        } else {
            return {...state,
            isLogged:true,
            email:action.payload.email
            }
        }


        case 'AUTH_UPDATE_DISPLAY_NAME':
            return {...state,displayName:action.payload.displayName}
            
        case 'AUTH_LOG_OUT':
            Firebase.auth().signOut().then(function() {
            })
            window.sessionStorage.setItem('loggedAs','')
            return {...state,isLogged:false, email:'',displayName:''}

        default:
            return state
            
    }
}

export default auth