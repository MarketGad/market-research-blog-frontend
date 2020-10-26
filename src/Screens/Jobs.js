import React from "react";
import Internshiplist from "../Components/internshiplist";
import Joblist from "../Components/Joblist";
import PeopleList from "../Components/PeopleList";
import Button from "@material-ui/core/Button";

const ListProduct = (props) => {
  return (
    <div>
      <div className="row">
        <div
          style={{
            borderBottom: "3px solid lightgray",

            backgroundColor: "white",

            /*position: "-webkit-sticky",
            position: "sticky",
            display: "block",
            top: "0",*/
          }}
        >
          <img
            src="https://res.cloudinary.com/marketgaddevcloud1/image/upload/v1603704567/Theme/Photo_vjcaum.jpg"
            width="100%"
          ></img>
        </div>
        <div className="product-job-page-container">
          <div className="col s12 l8">
            <div className="job-page-head">
              Trending jobs
              <Button
                size="small"
                style={{
                  marginLeft: "78%",
                  width: "18%",
                }}
              >
                <img
                  src="https://res.cloudinary.com/marketgaddevcloud1/image/upload/v1603723459/Theme/Untitled-1_wjizu0_e0rdph.png"
                  width="100%"
                ></img>
              </Button>
            </div>
            <Joblist jobs={props.jobs} filter="" />
            <div className="product-page-head">Internships</div>
            <Internshiplist internship={props.internship} />
          </div>
          <div className="col s12 l4 joblist">
            <div className="row" style={{ margin: "0", padding: "0" }}>
              <div className="col s12 m8">
                <div
                  className="product-page-head left-head"
                  style={{ paddingTop: "5px" }}
                >
                  Trending talents
                </div>
                <h6 className="product-quote">Open for opportunities</h6>
              </div>
              <div className="col s4">
                <div className="right-align">
                  <a
                    className="waves-effect waves-light btn-small pro-btn1 add-mobile-btn"
                    href="/registerforjobs"
                  >
                    Add profile
                  </a>
                </div>
              </div>
            </div>
            <PeopleList
              jobProfiles={
                props.jobProfiles === undefined ? [] : props.jobProfiles
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default ListProduct;
