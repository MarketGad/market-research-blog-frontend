import React, { Component } from "react";
import Slider from "../Components/Slider";
import Subscribe from "../Components/Subscribe";
import Taglines from "../Components/Taglines";
import Footer from "../Components/Footer";
// import Offerings from '../Components/Offerings';
import FeaturedResearch from "../Components/FeaturedResearch";
import BriefDetails from "../Components/BriefDetails";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import "../assets/css/templatemo-softy-pinko.css";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));
const imageUrl =
  window.innerWidth >= 768
    ? "https://res.cloudinary.com/marketgaddevcloud1/image/upload/v1596651501/Untitled-1_lw4pwu.jpg"
    : "https://res.cloudinary.com/marketgaddevcloud1/image/upload/v1596691317/Untitled-1_1_yobc0f.jpg";

class Home extends Component {
  render() {
    return (
      <div>
        {/* <Slider /> */}
        <div className="funding-cover">
          <img src={imageUrl} width="100%"></img>
        </div>

        <BriefDetails />
        <section
          class="section colored"
          id="pricing-plans"
          style={{
            backgroundColor: "white",
          }}
        >
          <div
            class="container"
            /*style={{
              marginTop: "-5%",
              marginBottom: "-3%",
            }}*/
          >
            <div class="row">
              <div class="col-lg-12">
                <h4
                  class="section-title"
                  style={{
                    textAlign: "center",
                    letterSpacing: ".3rem",
                    wordSpacing: ".4rem",
                  }}
                >
                  <b> Pricing Plans</b>
                </h4>
              </div>
              {/*<div class="offset-lg-3 col-lg-6">
                <div class="center-text" style={{ textAlign: "center" }}>
                  <p>
                    Donec vulputate urna sed rutrum venenatis. Cras consequat
                    magna quis arcu elementum, quis congue risus volutpat.
                  </p>
                </div>
		</div>*/}
            </div>

            <Grid container spacing={3}>
              <Grid item xs={12} sm={4}>
                <div class="pricing-item">
                  <div class="pricing-header">
                    <h3 class="pricing-title">
                      <b>Starter</b>
                    </h3>
                  </div>
                  <div class="pricing-body">
                    <div
                      class="price-wrapper"
                      style={{ backgroundColor: "#1d262d" }}
                    >
                      <span class="currency">₹</span>
                      <span class="price">6,999</span>
                    </div>
                    <ul class="list">
                      <li class="active">1 Pitch deck based on your concept</li>
                      <li class="active">1 time iteration</li>
                      <li class="active">100 active investors data</li>
                      <li class="active">1 basic market research</li>
                      <li class="active">Top 10 competitors data</li>
                    </ul>
                  </div>
                  <div class="pricing-footer">
                    <a
                      className="link-price"
                      class="main-button"
                      style={{
                        backgroundColor: "#1d262d",
                        fontSize: "13px",
                        borderRadius: "20px",
                        padding: "12px 20px",
                        textTransform: "uppercase",
                        color: "#fff",
                      }}
                      href="https://rzp.io/i/LBbFGqmrti"
                    >
                      Purchase Now
                    </a>
                  </div>
                </div>
              </Grid>

              <Grid item xs={12} sm={4}>
                <div class="pricing-item active">
                  <div class="pricing-header">
                    <h3 class="pricing-title">
                      <b>Premium</b>
                    </h3>
                  </div>
                  <div class="pricing-body">
                    <div
                      class="price-wrapper"
                      style={{ backgroundColor: "#1d262d" }}
                    >
                      <span class="currency">₹</span>
                      <span class="price">14,999</span>
                    </div>
                    <ul class="list">
                      <li class="active">1 Pitch deck based on your concept</li>
                      <li class="active">3 time iteration</li>
                      <li class="active">1,000 active investors data</li>
                      <li class="active">1 premium market research</li>
                      <li class="active">India competitor analysis</li>
                    </ul>
                  </div>
                  <div class="pricing-footer">
                    <a
                      style={{
                        backgroundColor: "#1d262d",
                        fontSize: "13px",
                        borderRadius: "20px",
                        padding: "12px 20px",
                        textTransform: "uppercase",
                        color: "#fff",
                      }}
                      class="main-button"
                      href="https://rzp.io/i/gDhc3lvP"
                    >
                      Purchase Now
                    </a>
                  </div>
                </div>
              </Grid>

              <Grid item xs={12} sm={4}>
                <div class="pricing-item">
                  <div class="pricing-header">
                    <h3 class="pricing-title">
                      <b>Advanced</b>
                    </h3>
                  </div>
                  <div class="pricing-body">
                    <div
                      class="price-wrapper"
                      style={{ backgroundColor: "#1d262d" }}
                    >
                      <span class="currency">₹</span>
                      <span class="price">19,999</span>
                    </div>
                    <ul class="list">
                      <li class="active">1 Pitch deck based on your concept</li>
                      <li class="active">7 time iteration</li>
                      <li class="active">2,500 active investors data</li>
                      <li class="active">2 advanced market research</li>
                      <li class="active">Global competitor analysis</li>
                    </ul>
                  </div>
                  <div class="pricing-footer">
                    <a
                      style={{
                        backgroundColor: "#1d262d",
                        fontSize: "13px",
                        borderRadius: "20px",
                        padding: "12px 20px",
                        textTransform: "uppercase",
                        color: "#fff",
                      }}
                      class="main-button"
                      href="https://rzp.io/i/VhDoPjytF"
                    >
                      Purchase Now
                    </a>
                  </div>
                </div>
              </Grid>
            </Grid>
          </div>
        </section>
        <Taglines />
        {/* <Review /> */}
        {/* <Offerings /> */}
        <FeaturedResearch />
        <Subscribe />
        <Footer />
      </div>
    );
  }
}

export default Home;
