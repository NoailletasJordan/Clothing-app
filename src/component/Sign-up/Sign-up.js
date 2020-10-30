import React, { useState } from 'react'
import './Sign-up.styles.scss'
import FormInput from '../Form-input/Form-input'
import { useDispatch } from 'react-redux'
import { notificationTrigger } from '../../actions/notification'
import { authUpdateDisplayName } from '../../actions/auth'
import {
  auth,
  createUserProfileDocument,
  signInWithGoogle,
} from '../../Firebase/firebase.utils'

const SignUp = () => {
  const dispatch = useDispatch()
  const [signUpState, setSignUpState] = useState({
    displayName: '',
    email: '',
    password: '',
    confirmPassword: '',
  })

  const handleSubmit = async (event) => {
    event.preventDefault()
    if (signUpState.password !== signUpState.confirmPassword) {
      dispatch(notificationTrigger(false, 'passwordMatch'))
      return
    }
    if (signUpState.password.length < 6) {
      dispatch(notificationTrigger(false, 'passwordLength'))
      return
    }
    try {
      const res = await auth.createUserWithEmailAndPassword(
        signUpState.email,
        signUpState.password
      )
      const user = res.user
      createUserProfileDocument(user, signUpState.displayName)
      dispatch(authUpdateDisplayName(signUpState.displayName))
      dispatch(notificationTrigger(true, 'signup'))
    } catch (error) {
      console.log(error)
      dispatch(notificationTrigger(false, 'custom', error.message))
    }
  }

  const handleChange = (event) => {
    const { value, name } = event.target
    setSignUpState({ ...signUpState, [name]: value })
  }

  return (
    <div className="sign-up">
      <h2 className="sign-up__title">I do not have an account yet</h2>
      <span className="sign-in__submessage">
        Sign in with your email and password
      </span>
      <form action="sign-up-form" onSubmit={handleSubmit}>
        <FormInput
          type="text"
          name="displayName"
          value={signUpState.displayName}
          handleChange={handleChange}
          label="display name"
          required
        />

        <FormInput
          type="email"
          name="email"
          value={signUpState.email}
          handleChange={handleChange}
          label="email"
          required
        />

        <FormInput
          type="password"
          name="password"
          value={signUpState.password}
          handleChange={handleChange}
          label="password (min 6 caracters)"
          required
        />

        <FormInput
          type="password"
          name="confirmPassword"
          value={signUpState.confirmPassword}
          handleChange={handleChange}
          label="comfirm password"
          required
        />

        <div className="sign-in__wrapper">
          <button
            className="sign-in__submit btn u-shadow-hover"
            type="submit"
            value="Submit Form"
          >
            Sign up
          </button>
          <button
            onClick={signInWithGoogle}
            type="button"
            className="btn-google u-shadow-hover u-plus-1-active"
          >
            Sign up with google
          </button>
        </div>
      </form>
    </div>
  )
}

export default SignUp
