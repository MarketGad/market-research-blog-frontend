import React from "react";
import BurnCoinError from "../Components/BurnCoinError";
import Popup from "../Components/Popup";

import Footer from "../Components/Footer";

const Discounts = () => {
  const [openBazaarErr, setOpenBazaarErr] = React.useState(false);
  return (
    <div className="bazaar-bkgrd">
      <div className="container">
        <div className="product-content center">
          {/*<h5>
          Burn your interaction points to join the exclusive club and earn
          discounts on your subscriptions
        </h5>*/}
          <div className="logo-gold">
            <img
              width="7%"
              src={
                "https://res.cloudinary.com/marketgaddevcloud1/image/upload/v1603348061/Theme/Golden_MG_Logo_oxwzlm.png"
              }
            />
          </div>
          <div>
            <div className="center" className="baz">
              Burn your interaction points to join the exclusive club and earn
              discounts on your subscription
            </div>
            <img
              width="15%"
              src={
                "https://res.cloudinary.com/marketgaddevcloud1/image/upload/v1603348825/Theme/Crown_u9zn3l.png"
              }
            />
            <div className="center">
              <div className="center" className="baz">
                Burn 1000 points to enter
              </div>
              <div>
                <a
                  className="waves-effect waves-light btn-small pro-btn1"
                  className="enter-button"
                  onClick={() => {
                    setOpenBazaarErr(true);
                  }}
                >
                  Enter Now
                </a>
                <Popup
                  title="Signin"
                  openPopup={openBazaarErr}
                  setOpenPopup={setOpenBazaarErr}
                >
                  <BurnCoinError
                    openSignin={openBazaarErr}
                    setOpenSignin={setOpenBazaarErr}
                  />
                </Popup>
              </div>
              <p style={{ textAlign: "center" }}>
                <img
                  width="80%"
                  src={
                    "https://res.cloudinary.com/marketgaddevcloud1/image/upload/v1603382240/Theme/Infographic_iffbsf_1_qzzdln.png"
                  }
                />
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default Discounts;
