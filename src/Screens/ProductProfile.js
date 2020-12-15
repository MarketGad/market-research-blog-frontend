import React, { useEffect } from "react";
import axios from "axios";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import ShopIcon from "@material-ui/icons/Shop";
import AppleIcon from "@material-ui/icons/Apple";
import LinkIcon from "@material-ui/icons/Link";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { Redirect } from "react-router-dom";
// import Footer2 from '../Components/Footer2';
import Cookies from "js-cookie";
import ShowComment from "../Components/ShowComment";
import SignIn from "../Screens/signin";
import Popup from "../Components/Popup";
import ProductCover from "../Components/ProductCover";
import ProductCard from "../Components/ProductCard";
import Linkify from "react-linkify";
import ReactHtmlParser, {
  processNodes,
  convertNodeToElement,
  htmlparser2,
} from "react-html-parser";
import SocialShare from "../Components/SocialShare";
import TeamPage from "../Components/TeamPage";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    color: "#080808d9",
    backgroundColor: "transparent",
    fontSize: "48vw",
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
    padding: "10px 5px",
  },
  submit: {
    height: "3.8em",
    margin: theme.spacing(0, 1, 0),
    fontWeight: "800",
  },
}));
const Profile = (props) => {
  const classes = useStyles();
  const product = props.product;
  const id = props.id;
  const focusComment = props.focusComment;
  const [comment, setComment] = React.useState("");
  const [commentdone, setCommentsuccess] = React.useState(false);
  const [readytocomment, setReadytoComment] = React.useState("");
  const [openSignin, setOpenSignin] = React.useState(false);
  const [comments, setComments] = React.useState([]);
  const isMobile = window.innerWidth <= 500;

  let weblink = "";
  if (product) {
    weblink = /^https?:\/\//.test(product.websiteLink)
      ? product.websiteLink
      : "https://" + product.websiteLink;
  }
  useEffect(() => {
    if (product.comments !== undefined && commentdone === false) {
      setComments(product.comments);
    }
  });

  const showComments = (comments) =>
    comments.length ? (
      comments.map((comment) => {
        if (comment) {
          return <ShowComment comment={comment} />;
        } else {
          return <div />;
        }
      })
    ) : (
      <div className="center"> No Comments to show :( </div>
    );
  const submitHandler = (e) => {
    e.preventDefault();
    const token = Cookies.get("session-id");
    if (!token) {
      setOpenSignin(true);
      return;
    }
    if (comment) {
      const config = {
        headers: {
          Authorization: `Bearer  ${token}`,
        },
      };
      axios
        .post(
          process.env.REACT_APP_BASEURL +
            "/api/productdetails/" +
            id +
            "/comments",
          {
            comment: comment,
          },
          config
        )
        .then(
          (response) => {
            if (response.data) {
              setCommentsuccess(true);
              setComments(response.data);
              setComment("");
            }
          },
          (error) => {
            alert("something went wrong");
          }
        );
    }
  };
  if (product.name) {
    return (
      <div className="productdetails-container">
        <Linkify>
          <Grid container component="main">
            <div
              className="articlubhead"
              style={{
                fontWeight: 800,
                maxHeight: "500px",
                textAlign: "left",
                fontSize: "1.8em",
              }}
            >
              {product.name}
            </div>

            <Grid item xs={12} md={12} style={{ margin: "0 4%" }}>
              <div className="prodcovermob">
                <ProductCard
                  className="prodcovermob"
                  openSignin={openSignin}
                  setOpenSignin={setOpenSignin}
                  product={product === undefined ? [] : product}
                  weblink={weblink}
                  showbuttons={false}
                />
              </div>
            </Grid>

            <div
              className="deskshare"
              style={{
                float: "left",
                marginBottom: "-47%",
                /*position: "-webkit-sticky",
                position: "sticky",*/
                top: "15%",
                /*maxWidth: "110px",*/

                position: "fixed",
                left: "0",
                top: "0",
                height: "100vh",
                width: "280px",
                background: "#002244",
                color: "#fff",

                /*backgroundColor: "#1d262d",*/
              }}
            >
              <p
                style={{
                  textAlign: "center",
                  fontSize: "1.4em",
                  marginTop: "50%",
                }}
              >
                Like our content?
              </p>
              <p
                style={{
                  textAlign: "center",
                  fontSize: "1.4em",
                  fontWeight: "bold",
                  color: "#fff",
                  marginBottom: "20%",
                }}
              >
                Share it with your friends!
              </p>
              <div
                style={{
                  width: "110px",
                  textAlign: "center",
                  marginLeft: "30%",
                }}
              >
                <SocialShare
                  weblink={`http://www.marketgad.com/products/${product._id}`}
                />
              </div>
            </div>
            <div
              className="mobshare"
              style={{
                textAlign: "center",
                width: "300px",
                marginLeft: "12%",
                marginRight: "12%",

                /*backgroundColor: "#1d262d",*/
              }}
            >
              {" "}
              <p
                style={{
                  fontSize: "1.5em",
                  color: "#5072A7",
                  textAlign: "center",
                }}
              >
                Like our Content? Share it with your friends!
              </p>
              <SocialShare
                weblink={`http://www.marketgad.com/products/${product._id}`}
              />
            </div>
            <Grid item xs={12} md={12} className="prodcard1">
              <div
                className="center-prd"
                style={{
                  maxHeight: "500px",
                  width: "63%",
                  margin: "2% 0 0 0",
                }}
              >
                <ProductCover
                  openSignin={openSignin}
                  setOpenSignin={setOpenSignin}
                  product={product === undefined ? [] : product}
                  weblink={weblink}
                  showbuttons={false}
                  style={{ marginTop: "-5%" }}
                />
              </div>

              {/*<div className="desktop">
              <div className="link-container">
                {product.websiteLink.length > 0 && (
                  <div>
                    <span>
                      <span className="material-icons job-link-icons">
                        <LinkIcon />
                      </span>
                      <span>
                        <a
                          className="links"
                          target="_blank"
                          rel="noopener noreferrer"
                          href={weblink}
                        >
                          {product.websiteLink}
                        </a>
                      </span>
                    </span>
                  </div>
                )}
                {product.playStoreLink.length > 0 && (
                  <div>
                    <span>
                      <span className=" material-icons job-link-icons">
                        <ShopIcon />
                      </span>
                      <span>
                        <a className="links" href={product.playStoreLink}>
                          {product.name}
                        </a>
                      </span>
                    </span>
                  </div>
                )}
                {product.appStoreLink.length > 0 && (
                  <div>
                    <span>
                      <span className="material-icons job-link-icons">
                        <AppleIcon />
                      </span>
                      <span>
                        <a className="links" href={product.appStoreLink}>
                          {product.name}
                        </a>
                      </span>
                    </span>
                  </div>
                )}
              </div>
              <div className="contact-container">
                <p className="product-subhead">Contact</p>
                <p
                  className="product-content"
                  style={{ wordSpacing: ".05rem" }}
                >
                  {product.pointOfContact} <br />
                  {product.emailId}
                </p>
              </div>
                </div>*/}
            </Grid>

            <Grid
              item
              xs={12}
              sm={12}
              md={12}
              className="product-details-right-container"
            >
              <div>
                <div
                  className="sugg-reads"
                  style={{
                    float: "right",
                    marginTop: "-35%",
                    maxWidth: "300px",
                    position: "-webkit-sticky",
                    position: "sticky",
                    top: "15%",
                    /*backgroundColor: "#1d262d",*/
                    padding: "1%",
                    borderRadius: "7%",
                    marginLeft: "5%",
                  }}
                >
                  <h5
                    style={{
                      paddingBottom: "5%" /*color: "beige"*/,
                      color: "#1d262d",
                    }}
                  >
                    <b>Suggested Reads:</b>
                  </h5>
                  <ul>
                    <li className="sugg-list1">
                      <a
                        className="sugg-link"
                        href="/products/5fc8c1581fbdc000042296d9"
                      >
                        Amazon in talks to buy podcast-publisher Wondery
                      </a>
                    </li>
                    <li className="sugg-list1">
                      <a
                        className="sugg-link"
                        href="/products/5fcdd3d3e0fa0b0004148bd9"
                      >
                        Apple users, beware!
                      </a>
                    </li>
                    <li className="sugg-list1">
                      <a
                        className="sugg-link"
                        href="/products/5fcdd293e0fa0b0004148bd8"
                      >
                        WhatsApp to update its terms of service
                      </a>
                    </li>
                    <li className="sugg-list1">
                      <a href="/products/5fc8c0d11fbdc000042296d8">
                        Delay in PUBG launch, company executives want to meet
                        the Government
                      </a>
                    </li>
                  </ul>
                </div>
                <div
                  style={{}}
                  className="product-content1"
                  style={{ marginTop: "2%" }}
                >
                  <div>{ReactHtmlParser(product.detailedDescription)}</div>
                </div>
              </div>
              <div id="comments">
                <div className="row">
                  <div
                    className="col s12 l11"
                    style={{ padding: "0", margin: "0" }}
                  >
                    <div className="cardcom">
                      <div className="card-content">
                        <span className="card-title product-comment">
                          Comments ({comments.length})
                        </span>
                        <form className={classes.form} onSubmit={submitHandler}>
                          <Grid container spacing={2}>
                            <Grid item xs={8}>
                              {focusComment !== "" && (
                                <TextField
                                  fullWidth
                                  id="outlined-textarea"
                                  label="Comment"
                                  placeholder="What’s cool about this?"
                                  multiline
                                  autoFocus
                                  variant="outlined"
                                  value={comment}
                                  onChange={(e) => setComment(e.target.value)}
                                />
                              )}
                              {focusComment === "" && (
                                <TextField
                                  fullWidth
                                  id="outlined-textarea"
                                  label="Comment"
                                  placeholder="What’s cool about this?"
                                  multiline
                                  variant="outlined"
                                  value={comment}
                                  onChange={(e) => setComment(e.target.value)}
                                />
                              )}
                            </Grid>
                            <Grid item xs={3}>
                              <Button
                                type="submit"
                                variant="contained"
                                className={classes.submit}
                              >
                                Add Comment
                              </Button>
                            </Grid>
                          </Grid>
                        </form>
                        {showComments(comments)}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="mobileprd"
                style={{
                  float: "left",
                  marginLeft: "0",
                  fontSize: "1.5em",
                }}
              >
                <div
                  style={{
                    marginLeft: "0",
                    height: "auto",
                  }}
                >
                  {/* {product.websiteLink.length > 0 && (
                    <div style={{ height: "auto" }}>
                      <span>
                        <span className="material-icons job-link-icons">
                          <LinkIcon />
                        </span>
                        <span>
                          <a
                            className="links1"
                            target="_blank"
                            rel="noopener noreferrer"
                            href={weblink}
                          >
                            {product.websiteLink}
                          </a>
                        </span>
                      </span>
                    </div>
                 )} */}
                  {/*{product.playStoreLink.length > 0 && (
                  <div>
                    <span>
                      <span className=" material-icons job-link-icons">
                        <ShopIcon />
                      </span>
                      <span>
                        <a className="links" href={product.playStoreLink}>
                          {product.name}
                        </a>
                      </span>
                    </span>
                  </div>
                )}
                {product.appStoreLink.length > 0 && (
                  <div>
                    <span>
                      <span className="material-icons job-link-icons">
                        <AppleIcon />
                      </span>
                      <span>
                        <a className="links" href={product.appStoreLink}>
                          {product.name}
                        </a>
                      </span>
                    </span>
                  </div>
                )}*/}
                </div>
                <div
                  className="contact-container"
                  style={{ marginLeft: "0", marginTop: "0" }}
                >
                  {/*<p className="product-subhead">Contact </p>
                  <p
                    className="product-content1"
                    style={{ wordSpacing: ".05rem", marginLeft: "0" }}
                  >
                    {product.pointOfContact} <br />
                    {product.emailId}
              </p>*/}
                  <div className="sugg-reads1" style={{}}>
                    <h5>
                      <b>Suggested Reads:</b>
                    </h5>
                    <ul>
                      <li className="sugg-list">
                        <a
                          className="sugg-link"
                          href="/products/5fc8c1581fbdc000042296d9"
                        >
                          Amazon in talks to buy podcast-publisher Wondery
                        </a>
                      </li>
                      <li className="sugg-list">
                        <a
                          className="sugg-link"
                          href="/products/5fcdd3d3e0fa0b0004148bd9"
                        >
                          Apple users, beware!
                        </a>
                      </li>
                      <li className="sugg-list">
                        <a
                          className="sugg-link"
                          href="/products/5fcdd293e0fa0b0004148bd8"
                        >
                          WhatsApp to update its terms of service
                        </a>
                      </li>
                      <li className="sugg-list">
                        <a href="/products/5fc8c0d11fbdc000042296d8">
                          Delay in PUBG launch, company executives want to meet
                          the Government
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </Grid>
          </Grid>

          <Popup
            title="Signin"
            openPopup={openSignin}
            setOpenPopup={setOpenSignin}
          >
            <SignIn openSignin={openSignin} setOpenSignin={setOpenSignin} />
          </Popup>
          {/* <Footer2 /> */}
        </Linkify>
      </div>
    );
  } else return <div className="center">Loading...</div>;
};

const ProductProfile = (props) => {
  const classes = useStyles();
  const id = props.match.params.product_id;
  const focusComment = props.location.search;
  const product = props.products.find((item) => item._id === id);
  return (
    <Profile
      product={product === undefined ? [] : product}
      id={id}
      focusComment={focusComment}
    />
  );
};

export default ProductProfile;
