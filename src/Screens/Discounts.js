import React from "react";
import BurnCoinError from "../Components/BurnCoinError";
import Popup from "../Components/Popup";

import Footer from "../Components/Footer";

const Discounts = () => {
  const [openBazaarErr, setOpenBazaarErr] = React.useState(false);
  return (
    <div
      style={{
        backgroundImage:
          "url(" +
          "https://res.cloudinary.com/marketgaddevcloud1/image/upload/v1603347962/Theme/Background_gprpm8.jpg" +
          ")",
        /*backgroundPosition: "center",*/
        backgroundSize: "100%",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="container">
        <div className="product-content center">
          {/*<h5>
          Burn your interaction points to join the exclusive club and earn
          discounts on your subscriptions
        </h5>*/}
          <div
            style={
              {
                /* borderRight:'2px solid #87879f' ,borderTopLeftRadius:'20px', borderBottomLeftRadius:'20px' */
              }
            }
          >
            <img
              width="7%"
              src={
                "https://res.cloudinary.com/marketgaddevcloud1/image/upload/v1603348061/Theme/Golden_MG_Logo_oxwzlm.png"
              }
              style={{ padding: "3% 0 2% 0" }}
            />
          </div>
          <div
            style={
              {
                /* ,borderTopRightRadius:'20px',borderBottomRightRadius:'20px'*/
              }
            }
          >
            {/*<div className='center' style={{ fontSize: '1.6em', fontFamily: 'Bahnschrift', color: 'darkblue', padding:'3% 7% 3% 5%' }}>
						997 MG users are in the waiting list!
					</div>*/}
            <div
              className="center"
              style={{
                fontSize: "1 em",
                fontFamily: "Bahnschrift",
                color: "white",
                padding: "0% 25% 1% 25%",
              }}
            >
              Burn your interaction points to join the exclusive club and earn
              discounts on your subscription..
            </div>
            <img
              width="15%"
              src={
                "https://res.cloudinary.com/marketgaddevcloud1/image/upload/v1603348825/Theme/Crown_u9zn3l.png"
              }
            />
            <div className="center">
              <div
                className="center"
                style={{
                  fontSize: "1 em",
                  fontFamily: "Bahnschrift",
                  color: "white",

                  padding: "0% 22% 0% 22%",
                }}
              >
                Burn 1000 points to enter
              </div>
              <div style={{ padding: "3px" }}>
                <a
                  className="waves-effect waves-light btn-small pro-btn1"
                  style={{
                    backgroundColor: "white",
                    color: "darkblue",
                    padding: "0 2% 0 2%",
                  }}
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
