import React from "react"
import "./homepage.styles.scss"
import "./button.scss"
import mediaQuery from "@material-ui/core/useMediaQuery"
import Slider from "../../component/Slider/Slider"

const homepage = props => {
	const mobileDevice = mediaQuery("(max-width:577px)")

	const handleRedirect = link => props.history.push(link)

	return (
		<div className="homepage">
			<div style={{ overflow: "hidden" }}>
				<Slider props={props} />
			</div>

			<div
				className="homepage__sentence--1"
				data-aos="fade-in"
				data-aos-delay="200"
			>
				Fashion inspired by where we're from - the sunny shores or California.{" "}
				<br />
				Products provided with love
			</div>

			<div className="container">
				<div className="homepage__shop-category">
					<div
						className="homepage__shop-category__element"
						onClick={() => handleRedirect("/shop/hats")}
						data-aos="fade-in"
						data-aos-delay="200"
					>
						<div className="homepage__shop-category__element__image--1" />
						<div className="homepage__shop-category__element--text ">HATS</div>
					</div>
					<div
						className="homepage__shop-category__element"
						onClick={() => handleRedirect("/shop/jackets")}
						data-aos="fade-in"
						data-aos-delay="300"
					>
						<div className="homepage__shop-category__element__image--2" />
						<div className="homepage__shop-category__element--text ">TOPS</div>
					</div>
					<div
						className="homepage__shop-category__element "
						onClick={() => handleRedirect("/shop/jackets")}
						data-aos="fade-in"
						data-aos-delay="400"
					>
						<div className="homepage__shop-category__element__image--3" />
						<div className="homepage__shop-category__element--text ">
							DRESSES
						</div>
					</div>
					<div
						className="homepage__shop-category__element "
						onClick={() => handleRedirect("/shop/womens")}
						data-aos="fade-in"
						data-aos-delay="500"
					>
						<div className="homepage__shop-category__element__image--4" />
						<div className="homepage__shop-category__element--text ">
							PETITE
						</div>
					</div>
				</div>
			</div>

			<div className="container">
				<div className="homepage__fresh-looks ">
					<div className="homepage__fresh-looks__image" />
					<div
						className="homepage__fresh-looks__content"
						data-aos="fade-in"
						data-aos-delay="200"
					>
						<div className="homepage__fresh-looks__text--1">FRESH LOOKS</div>
						<div className="homepage__fresh-looks__text--2">
							FALL ACCESSORIES
						</div>
						<div className="homepage__fresh-looks__text--3">
							Get the perfect look for your fall wardrobe. <br /> From the city
							to the festival to campus.
						</div>
						<div className="homepage__fresh-looks__button-container ">
							<span
								className="btn-2"
								onClick={() => props.history.push("/shop/womens")}
							>
								WOMENS
							</span>
							<span className="homepage__fresh-looks__space" />
							<span
								className="btn-2"
								onClick={() => props.history.push("/shop")}
							>
								SHOP ALL
							</span>
						</div>
					</div>
				</div>
			</div>
			<div className="container">
				<div
					id="middle"
					className="homepage__middle "
					data-aos="fade-right"
					data-aos-delay="200"
				>
					<div className="homepage__middle__fiability  ">
						<div className="homepage__fiability__item ">
							<div className="homepage__fiability__item--icon">
								<i className="fas fa-shopping-cart"></i>
							</div>
							<div className="homepage__fiability__item--right">
								<div className="homepage__fiability__item--title">
									Free Shipping
								</div>
								<div className="homepage__fiability__item--description">
									Free shipping on all orders from USA and Europe
								</div>
							</div>
						</div>

						<div className="homepage__fiability__item ">
							<div className="homepage__fiability__item--icon">
								<i className="far fa-credit-card"></i>
							</div>
							<div className="homepage__fiability__item--right">
								<div className="homepage__fiability__item--title">
									Secure payment
								</div>
								<div className="homepage__fiability__item--description">
									We offer safe shopping Guarantee
								</div>
							</div>
						</div>

						<div className="homepage__fiability__item ">
							<div className="homepage__fiability__item--icon">
								<i className="fas fa-wallet"></i>
							</div>
							<div className="homepage__fiability__item--right">
								<div className="homepage__fiability__item--title">
									100% satifaction
								</div>
								<div className="homepage__fiability__item--description">
									14 days money back guarantee
								</div>
							</div>
						</div>

						<div className="homepage__fiability__item ">
							<div className="homepage__fiability__item--icon">
								<i className="fas fa-phone-square"></i>
							</div>
							<div className="homepage__fiability__item--right">
								<div className="homepage__fiability__item--title">
									Online support
								</div>
								<div className="homepage__fiability__item--description">
									We support online 24 hours a day
								</div>
							</div>
						</div>
					</div>
				</div>

				<div
					className="homepage__bottom"
					data-aos="fade-right"
					data-aos-delay="200"
				>
					<div className="homepage__bottom__title">
						<div>Men & women</div>

						<div className="homepage__bottom__title--sepa"></div>
					</div>
					<div className="homepage__bottom__subtitle">
						Bring your elegancy to the next level
					</div>

					<div className="homepage__bottom__line row">
						<div className="col-md-6 col-xs-12">
							<div className="homepage__bottom__line__card  ">
								<div className="homepage__bottom__line__card--square">
									<div className="homepage__bottom__line__card--square--title">
										MEN'S
									</div>
									<div className="homepage__bottom__line__card--square--description">
										PRODUCTS
									</div>
									<div
										className="homepage__bottom__line__card--square--btn"
										onClick={() => props.history.push("/shop/mens")}
									>
										View All Products
									</div>
								</div>
							</div>
						</div>

						<div className="col-md-6 col-xs-12">
							<div
								className="homepage__bottom__line__card  line__card--alt"
								data-aos="fade-right"
								data-aos-delay="200"
							>
								<div className="homepage__bottom__line__card--square">
									<div className="homepage__bottom__line__card--square--title">
										WOMEN'S
									</div>
									<div className="homepage__bottom__line__card--square--description">
										PRODUCTS
									</div>
									<div
										className="homepage__bottom__line__card--square--btn"
										onClick={() => props.history.push("/shop/womens")}
									>
										View All Products
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default homepage
