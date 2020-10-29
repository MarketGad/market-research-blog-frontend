import React from "react";
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
    width: 300,

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
/*function sayHello() {
  return (
    <img
      src="https://res.cloudinary.com/marketgaddevcloud1/image/upload/v1603348752/Theme/Upvote_Icon_Clicked_fubsbj.png"
      width="50px"
    ></img>
  );
}*/

const SimpleCard = (props) => {
  const classes = useStyles();

  const bull = <span className={classes.bullet}>•</span>;

  return (
    <Card
      className={classes.root}
      style={{
        backgroundImage: `url(${props.background})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <CardContent style={{ position: "relative", top: "-40px" }}>
        <div style={{ margin: "0" }}>
          {/*<a href="#" style={{ position: "absolute", marginLeft: "65%" }}>
            <img
              src="https://res.cloudinary.com/marketgaddevcloud1/image/upload/v1603348649/Theme/Upvote_Icon_tvffmk.png"
              width="50px"
            ></img>
          </a>*/}
          <Link
            /* onClick={sayHello}*/
            style={{ position: "absolute", marginLeft: "65%" }}
            /*onClick={() => {
              return (
                <img
                  src="https://res.cloudinary.com/marketgaddevcloud1/image/upload/v1603348752/Theme/Upvote_Icon_Clicked_fubsbj.png"
                  width="50px"
                ></img>
              );
            }}*/
          >
            {" "}
            <img
              src="https://res.cloudinary.com/marketgaddevcloud1/image/upload/v1603348649/Theme/Upvote_Icon_tvffmk.png"
              width="50px"
            ></img>
          </Link>

          <h5
            style={{
              textAlign: "left",
              padding: "30px 0 20px 0",
              color: "white",
            }}
          >
            {" "}
            <img src={props.logoUrl} height="30px" />
          </h5>
        </div>

        <Typography
          variant="h5"
          component="h2"
          style={{
            color: "white",
            textAlign: "right",
            height: "70px",
            fontSize: "20px",
            paddingLeft: "40%",
          }}
        >
          {props.desc}
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          className="card-pdt"
          style={{
            backgroundColor: "white",
            marginLeft: "55%",
            maxWidth: "50px",
            maxHeight: "35px",
            minWidth: "50px",
            minHeight: "35px",
          }}
        >
          <TextsmsOutlinedIcon style={{ color: "black" }} />
        </Button>
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
      </CardActions>
    </Card>
  );
};
export default SimpleCard;
