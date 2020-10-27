import React from "react";
import Footer from "../Components/Footer";
import SignIn from "../Screens/signin";
import Popup from "../Components/Popup";
import { Link } from "react-router-dom";
import Cookies from "js-cookie";

const Aboutus = () => {
  const token = Cookies.get("session-id");
  const [openSignin, setOpenSignin] = React.useState(false);
  return (
    <div>
      <div>
        <img src=""></img>
        <div
          className="maiDiv"
          style={{
            marginBottom: "0",
            padding: "0",
            fontSize: "0",
          }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path
              fill="gray"
              fill-opacity="0.4"
              d="M0,224L80,202.7C160,181,320,139,480,154.7C640,171,800,245,960,245.3C1120,245,1280,171,1360,133.3L1440,96L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
            ></path>
          </svg>
        </div>
        <div
          style={{
            backgroundColor: "white",
            marginTop: "0",
            fontSize: "0",
          }}
        >
          <h5
            style={{
              backgroundColor: "rgb(128,128,128,0.4)",
              fontWeight: "bold",
              lineHeight: "130%",

              padding: "0 0 0 10%",
              margin: "-0.1px 0 -0.1px 0 ",
            }}
          >
            India's First Product
            <br /> Launch Platform
          </h5>
          <h6
            style={{
              backgroundColor: "rgb(128,128,128,0.4)",
              color: "gray",
              border: "none",
              padding: "40px 0 0 10%",
              lineHeight: "130%",
              margin: "-0.1px 0 -0.1px 0 ",
            }}
          >
            MarketGad is India's first and foremost <br />
            product launch platform. It is the go to <br /> destination for
            technology startups to launch
            <br /> their products for end consumers to review
            <br /> them first hand.
          </h6>
          <div
            style={{
              backgroundColor: "rgb(128,128,128,0.4)",

              height: "60px",
              position: "relative",
            }}
          >
            <img
              src="https://res.cloudinary.com/marketgaddevcloud1/image/upload/v1603731643/Theme/aboutrocket_fl6qy7.png"
              style={{ marginLeft: "60%", zIndex: "9", marginTop: "-150px" }}
              width="37%"
            ></img>
          </div>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path
              fill="gray"
              fill-opacity=".4"
              d="M0,224L80,202.7C160,181,320,139,480,154.7C640,171,800,245,960,245.3C1120,245,1280,171,1360,133.3L1440,96L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"
            ></path>
          </svg>
        </div>
        <div className="container">
          <h5 style={{ fontWeight: "bold", margin: "-3% 0 4% 0" }}>
            Work for what you are
            <br /> passionate about
          </h5>
          <img
            src="https://res.cloudinary.com/marketgaddevcloud1/image/upload/v1603731295/Theme/aboutwebinfo_qa6zzo.png"
            width="100%"
          ></img>
        </div>

        {/*{token === undefined && (
          <div className="center">
            <Link
              onClick={() => setOpenSignin(true)}
              style={{
                background: "#080808d9",
                margin: "1.5em",
                fontSize: "1.4em",
                fontWeight: "800",
              }}
              className="btn-small waves-effect waves-light"
            >
              Join us
            </Link>
          </div>
        )}*/}
      </div>
      <Footer />
      <Popup title="Signin" openPopup={openSignin} setOpenPopup={setOpenSignin}>
        <SignIn openSignin={openSignin} setOpenSignin={setOpenSignin} />
      </Popup>
    </div>
  );
};

export default Aboutus;
