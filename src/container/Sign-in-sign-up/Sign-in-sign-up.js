import React from "react"
import SignIn from "../../component/Sign-in/Sign-in"
import SignUp from "../../component/Sign-up/Sign-up"

import "./Sign-in-sign-up.styles.scss"

const SignInSignUpPage = () => {
	return (
		<div className="container">
			<div className="Sign-in-sign-up-page">
				<SignIn />
				<SignUp />
			</div>
		</div>
	)
}

export default SignInSignUpPage
