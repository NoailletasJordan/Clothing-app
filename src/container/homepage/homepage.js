import React from "react"
import "./homepage.styles.scss"
import "./button.scss"
//import Video from '../../assets/CaraDelevingne.mp4'
import mediaQuery from "@material-ui/core/useMediaQuery"

const homepage = (props) => {
  const mobileDevice = mediaQuery("(max-width:577px)")
  return (
    <div className="homepage">
      <div className="homepage__top">
        <div className="homepage__top__image"></div>

        <div className="homepage__top__content">
          <div className="homepage__top__darker" />
          <div
            className="homepage__top__content__wrapper"
            data-aos="fade-right"
            data-aos-delay="1000"
          >
            <div className="homepage__top__content__welcome">
              WELCOME TO ELEGANCY
            </div>

            <p className="homepage__top__content__p">
              New York based company with 5 retail stores throughout the east
              side, we sell collections for men and women. We are a pop culture
              phenomenon, reaching staggering social media followings of over 25
              million, of which includes celebrity fans and collaborators.
            </p>
            <div>
              <span
                className="btn-2"
                onClick={() => props.history.push("/shop")}
              >
                Browse the Collections
              </span>
            </div>
          </div>
          <a
            href="#middle"
            className="homepage__top__content__arrowdown bounce-top"
          >
            <i className="fas fa-chevron-down"></i>
          </a>
        </div>
      </div>
      <div className="container">
        <div
          id="middle"
          className="homepage__middle"
          data-aos="fade-right"
          data-aos-delay="200"
        >
          <div className="homepage__middle__fiability row ">
            <div className="homepage__fiability__item col-md-3 col-sm-6 col-xs-12">
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

            <div className="homepage__fiability__item col-md-3 col-sm-6 col-xs-12">
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

            <div className="homepage__fiability__item col-md-3 col-sm-6 col-xs-12">
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

            <div className="homepage__fiability__item col-md-3 col-sm-6 col-xs-12">
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
