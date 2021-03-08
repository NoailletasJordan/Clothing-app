import React from "react"
import "./Footer.scss"
import { ReactComponent as VisaSVG } from "../../assets/visa.svg"
import { ReactComponent as PaypalSVG } from "../../assets/paypal.svg"
import { ReactComponent as MCSVG } from "../../assets/mastercard.svg"
import { ReactComponent as VeriSVG } from "../../assets/vericoin.svg"
import { ReactComponent as WavaiSVG } from "../../assets/wavai-dubai.svg"
import { ReactComponent as CRSVG } from "../../assets/coinranking.svg"

const Footer = props => {
	return (
		<div className="footer">
			<div className="footer__svg-list">
				<div className="footer__trustsvg ">
					<VisaSVG className="" />
				</div>
				<div className="footer__trustsvg ">
					<PaypalSVG className="" />
				</div>
				<div className="footer__trustsvg ">
					<VeriSVG className="" />
				</div>
				<div className="footer__trustsvg ">
					<MCSVG className="" />
				</div>
				<div className="footer__trustsvg ">
					<CRSVG className="" />
				</div>
				<div className="footer__trustsvg ">
					<WavaiSVG className="" />
				</div>
			</div>
			<div className="footer__copyright">Copyright by Elegancy</div>
		</div>
	)
}

export default Footer
