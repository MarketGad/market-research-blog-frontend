import React from "react";
import {
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  TwitterIcon,
  WhatsappShareButton,
  WhatsappIcon,
  LinkedinShareButton,
  LinkedinIcon,
  FacebookShareCount,
} from "react-share";

export default function SocialShare(props) {
  return (
    <div
      style={{
        padding: "0 7% 7% 7%",
        textAlign: "center",
      }}
    >
      {/*<h5
        style={{
          textAlign: "center",
          /*, fontWeight: "bold"*/}
      {/*}
      >
        Like our content?
      </h5>
      <h5
        style={{
          textAlign: "center",
          color: "#5072A7" /*, fontWeight: "bold"*/}
      {/*}}
      >
        {" "}
        <b>Share it with your friends!</b>
      </h5>
      <br />*/}
      <FacebookShareButton
        url={props.weblink}
        style={{ padding: "3%", margin: "1%" }}
      >
        <FacebookIcon size={40} round={true} />
      </FacebookShareButton>
      <FacebookShareCount url={props.weblink}>
        {(shareCount) => (
          <span className="myShareCountWrapper">{shareCount}</span>
        )}
      </FacebookShareCount>
      <WhatsappShareButton
        url={props.weblink}
        style={{ padding: "3%", margin: "1%" }}
      >
        <WhatsappIcon size={40} round={true} />
      </WhatsappShareButton>
      <TwitterShareButton
        url={props.weblink}
        style={{ padding: "3%", margin: "1%" }}
      >
        <TwitterIcon size={40} round={true} />
      </TwitterShareButton>
      <LinkedinShareButton
        url={props.weblink}
        style={{ padding: "3%", margin: "1%" }}
      >
        <LinkedinIcon size={40} round={true} />
      </LinkedinShareButton>
    </div>
  );
}
