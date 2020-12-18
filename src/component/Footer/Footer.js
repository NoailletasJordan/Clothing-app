import React from "react"
import "./Footer.scss"

const Footer = (props) => {
  return (
    <div className="container-fluid u-col-f3-flex ">
      <div className="footer row">
        <div className="col-md-3 col-sm-6 col-6">
          <div>
            <div className="str">Account</div>
            <div>My account</div>
            <div>Account details</div>
            <div>Order history</div>
          </div>
        </div>
        <div className="col-md-3 col-sm-6 col-6">
          <div>
            <div className="str">About</div>
            <div>News</div>
            <div>Checkout</div>
          </div>
        </div>
        <div className="col-md-3 col-sm-6 col-6">
          <div>
            <div className="str">Legal</div>
            <div>Privacy policy</div>
            <div>Terms & conditions</div>
            <div>Shipping & return</div>
          </div>
        </div>
        <div className="col-md-3 col-sm-6 col-6">
          <div>
            <div className="str">Contact</div>
            <div>
              <span className="str">Hotline:</span> 06 98 54 35 62
            </div>
            <div>
              <span className="str">Open - Close:</span> 9h-18h
            </div>
            <div>
              <span className="str">Address:</span> 1 Sesame Street
            </div>
          </div>
        </div>

        {/* <div className="footer__bottom col-xs-12">
          <div>Copyright © 2020. All rights reserved.</div>
        </div> */}
      </div>
    </div>
  )
}

export default Footer
