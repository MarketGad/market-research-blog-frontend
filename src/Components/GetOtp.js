import React from "react";
import OtpInput from "react-otp-input";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "20ch",
    },
    paper: {
      marginTop: theme.spacing(0),
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
      marginTop: theme.spacing(0),
    },
    submit: {
      margin: theme.spacing(2, 0, 2),
    },
  },
}));

export default function GetOtp() {
  const classes = useStyles();

  return (
    <div>
      <div className="otp-body">
        <div className="otp-t1">Check your e-mail for a code</div>
        <div className="center" className="otp-t2">
          We've sent a 6-digital code to <a href="#">id@email.com</a> The code
          expires shortly, so please enter it soon.
        </div>

        <div className="center" className="otpComp">
          <OtpInput
            inputStyle={{
              border: "2px solid gray",
              borderRadius: "5px",
            }}
            // value={this.state.otp}
            // onChange={this.handleChange}
            numInputs={6}
            separator={<span>-</span>}
          />
        </div>
        <div className="center" className="otp-t3">
          Can't find your code? Check your spam folder.
        </div>
      </div>
    </div>
  );
}
