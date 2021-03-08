import React, { useState, useEffect } from "react"
import "./Sign-in.styles.scss"
import FormInput from "../Form-input/Form-input"
import { signInWithGoogle, auth } from "../../Firebase/firebase.utils"
import { withRouter } from "react-router"
import { useSelector, useDispatch } from "react-redux"
import { notificationTrigger } from "../../actions/notification"

const SignIn = props => {
	const [signInState, setSignInState] = useState({
		email: "",
		password: "",
	})

	const isLogged = useSelector(state => state.auth.isLogged)
	const dispatch = useDispatch()

	// Go back on logged in
	useEffect(() => {
		if (isLogged) props.history.push("./shop")
	}, [isLogged])

	const handleSubmit = event => {
		event.preventDefault()
		const { email, password } = signInState
		const promise = auth.signInWithEmailAndPassword(email, password)
		promise.catch(e => {
			console.log(e.message)
			dispatch(notificationTrigger(false, "custom", e.message))
		})
	}

	const handleChange = event => {
		const { value, name } = event.target
		setSignInState({ ...signInState, [name]: value })
	}

	return (
		<div className="sign-in">
			<h2 className="sign-in__title">I already have an account</h2>
			<span className="sign-in__submessage">
				Sign in with your email and password
			</span>

			<form onSubmit={handleSubmit}>
				<FormInput
					type="email"
					name="email"
					value={signInState.email}
					handleChange={handleChange}
					label="email"
					required
				/>

				<FormInput
					type="password"
					name="password"
					value={signInState.password}
					handleChange={handleChange}
					label="password"
					required
				/>
				<div className="sign-in__wrapper">
					<button
						className="sign-in__submit btn u-shadow-hover"
						type="submit"
						value="Submit Form"
					>
						Sign in
					</button>
					<button
						onClick={signInWithGoogle}
						type="button"
						className="btn-google u-shadow-hover u-plus-1-active"
					>
						Sign in with google
					</button>
				</div>
			</form>
		</div>
	)
}

export default withRouter(SignIn)
