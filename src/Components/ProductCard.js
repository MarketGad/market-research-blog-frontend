import React from "react";
import Cookies from "js-cookie";
import axios from "axios";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import TextsmsOutlinedIcon from "@material-ui/icons/TextsmsOutlined";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import SendOutlinedIcon from "@material-ui/icons/SendOutlined";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  root: {
    width: "100%",
    height: "260px",
    margin: "0",
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
    padding: "0",
  },
});

const ProductCard = (props) => {
  const classes = useStyles();
  const token = Cookies.get("session-id");
  const weblink = props.weblink;
  const showbuttons = props.showbuttons;
  const product = props.product === undefined ? [] : props.product;
  if (product.upvotesList === undefined) {
    product.upvotesList = [];
  }
  const { setOpenSignin } = props;
  if (token) {
    const token_id = JSON.parse(atob(token.split(".")[1]));
    var user_id = token_id._id;
  }
  const [upvote, setUpvote] = React.useState(product.upvotes);
  const [activeupvote, setactiveupvote] = React.useState(false);

  const addUpvote = (product_id, product) => {
    if (!token) {
      setOpenSignin(true);
      return;
    }
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    const token_info = JSON.parse(atob(token.split(".")[1]));
    if (product.upvotesList.includes(token_info._id)) {
      alert("already upvoted");
    } else {
      setUpvote(product.upvotes + 1);
      setactiveupvote(true);
      axios
        .post(
          process.env.REACT_APP_BASEURL +
            "/api/productdetails/" +
            product_id +
            "/upvotes/add",
          {},
          config
        )
        .then(
          (response) => {
            console.log("added");
          },
          (error) => {
            console.log(error);
            // alert(error);
          }
        );
    }
  };

  return (
    <Card
      className={classes.root}
      style={{
        backgroundImage: `url(${
          product.theme ||
          "https://res.cloudinary.com/marketgaddevcloud1/image/upload/v1603981180/Theme/Woovly_wvejpm.jpg"
        })`,
        backgroundSize: "100% 100%",
        backgroundRepeat: "no-repeat",
        margin: "10px 0",
      }}
    >
      <CardContent>
        <div className="row">
          <div
            className="col s6"
            style={{
              position: "relative",
              top: "-16px",
              textAlign: "left",
              padding: "0",
              height: "80px",
            }}
          >
            <Link to={`products/${product._id}`}>
              <img
                src={product.logo}
                width="100%"
                style={{ maxWidth: "300px", paddingTop: "12%" }}
              />
            </Link>
          </div>
          <div
            className="col s6"
            style={{ margin: "0", position: "relative", top: "-20px" }}
          >
            {product.upvotesList.includes(user_id) && (
              <div className="secondary-content">
                <div
                  style={{
                    position: "absolute",
                    right: "35px",
                  }}
                >
                  <img
                    src="https://res.cloudinary.com/marketgaddevcloud1/image/upload/v1603991888/Theme/Upvote_Icon_Clicked_fubsbj.png"
                    alt="clickedbulb"
                    width="50px"
                  />
                </div>
                <div
                  className="right-align"
                  style={{
                    top: "1.3em",
                    right: "-3px",
                    fontSize: "16px",
                    fontWeight: "800",
                    position: "relative",
                    color: "white",
                    borderBottom: "2px solid",
                  }}
                >
                  {upvote}
                </div>
              </div>
            )}
            {activeupvote === true && (
              <div className="secondary-content">
                <div
                  style={{
                    position: "absolute",
                    right: "35px",
                  }}
                >
                  <img
                    src="https://res.cloudinary.com/marketgaddevcloud1/image/upload/v1603991888/Theme/Upvote_Icon_Clicked_fubsbj.png"
                    alt="clickedbulb"
                    width="50px"
                  />
                </div>
                <div
                  className="right-align"
                  style={{
                    top: "1.3em",
                    fontSize: "16px",
                    fontWeight: "800",
                    position: "relative",
                    color: "white",
                    borderBottom: "2px solid",
                  }}
                >
                  {upvote}
                </div>
              </div>
            )}
            {(!product.upvotesList.includes(user_id) || !token) &&
              activeupvote === false && (
                <div className="secondary-content">
                  <div
                    onClick={() => addUpvote(product._id, product)}
                    style={{
                      position: "absolute",
                      right: "35px",
                      cursor: "pointer",
                    }}
                  >
                    <img
                      src="https://res.cloudinary.com/marketgaddevcloud1/image/upload/v1604412704/Theme/Upvote_Icon_tvffmk.png"
                      width="50px"
                    />
                  </div>
                  <div
                    className="right-align"
                    style={{
                      top: "1.3em",
                      fontSize: "16px",
                      fontWeight: "800",
                      position: "relative",
                      color: "white",
                      borderBottom: "2px solid",
                    }}
                  >
                    {upvote}
                  </div>
                </div>
              )}
          </div>
        </div>

        <Typography
          variant="h5"
          component="h2"
          className="prodcard-desc right-align"
          style={{
            color: "white",
            position: "relative",
            top: "-2.5em",
            height: "60px",
            fontWeight: "600",
            fontFamily: "Bahnschrift Regular",
            fontSize: "16px",
            paddingLeft: "40%",
          }}
        >
          {product.briefDescription}
        </Typography>
      </CardContent>
      {showbuttons === true && (
        <CardActions
          style={{ float: "right", position: "relative", bottom: "-15px" }}
        >
          <Link to={`products/${product._id}?q=comment`}>
            <Button
              className="card-pdt"
              style={{
                backgroundColor: "white",
                maxWidth: "50px",
                maxHeight: "35px",
                minWidth: "50px",
                minHeight: "35px",
              }}
            >
              <TextsmsOutlinedIcon style={{ color: "black" }} />
            </Button>
          </Link>
          <a target="_blank" rel="noopener noreferrer" href={weblink}>
            <Button
              style={{
                backgroundColor: "white",
                maxWidth: "50px",
                maxHeight: "35px",
                minWidth: "50px",
                minHeight: "35px",
              }}
            >
              <SendOutlinedIcon style={{ color: "black" }} />
            </Button>
          </a>
        </CardActions>
      )}
    </Card>
  );
};
export default ProductCard;
