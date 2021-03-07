import React from "react"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Slider from "react-slick"
import "./Slider.styles.scss"

export default function ({ props }) {
	const settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
	}
	console.log(props)
	return (
		<Slider {...settings} className="slider">
			<div className="imported-css">
				<div className="slider-1">
					<div className="slider-1__image" />
					<div className="slider-1__title">SUMMER VIBES.</div>
					<div className=" slider-1__button__container">
						<span
							className="btn-2"
							onClick={() => props.history.push("/shop/jackets")}
						>
							SHOP TOPS
						</span>
					</div>
				</div>
			</div>
			<div className="imported-css">
				<div className="slider-2">
					<div className="slider-2__image" />
					<div className="slider-2__content">
						<div className="slider-2__title">
							SPRING <br /> VIBES.
						</div>
						<div className="slider-2__text">Fresh looks for sunny days</div>
						<div className=" slider-2__button__container ">
							<span
								className="btn-2"
								onClick={() => props.history.push("/shop/hats")}
							>
								SHOP HATS
							</span>
							<span className="slider-2__space" />
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
		</Slider>
	)
}
