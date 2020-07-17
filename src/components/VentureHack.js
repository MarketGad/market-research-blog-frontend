import React from "react";
import Footer from "./Footer";

const VentureHack = () => {
    return (
        <div>
            <div className="container">
                <h4 className="center">Venture Hacks</h4>
            </div>
            <div className="row post-container">
                <div className="col s12">
                    <div className="card">
                        <div className="card-content">
                            <div className="row">
                                <div className="col l9 s12">
                                    <img
                                        pos
                                        className="post-image"
                                        src="https://res.cloudinary.com/marketgaddevcloud1/image/upload/v1594928729/Articles%20Photos/VentureHack/SME-social_fshval.jpg"
                                        alt="1st"
                                    />
                                </div>
                                <div className="col s12 l3">
                                    <h3 className="center landing-post-head">
                                        Tradohub: bootstrapped to build the largest SME ecosystem
                                    </h3>
                                    <p className="post-brief">
                                        The company has targeted to increase its turnover over 20 fold to $1 billion from existing Rs 330 crore in the next five years by 2025...                                    </p>
                                    <div className="center">
                                        <a href="/v3001" style={{ background: "#2b2321c9", marginTop: "2em" }} className="btn waves-effect waves-light ">Read More</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-content">
                            <div className="row">
                                <div className="col l9 s12">
                                    <img
                                        pos
                                        className="post-image"
                                        src="https://res.cloudinary.com/marketgaddevcloud1/image/upload/v1594928817/Articles%20Photos/VentureHack/startuptop_kzuhdz.jpg"
                                        alt="1st"
                                    />
                                </div>
                                <div className="col s12 l3">
                                    <h3 className="center landing-post-head">
                                        12 Steps to Start a Successful Business/Startup
                                    </h3>
                                    <p className="post-brief">
                                        Bypassing some steps or thinking that one or more of the 12 steps below might not apply to your
                                        startup is how many companies failed or invested resources they didn’t need to move forward.
                                        Identify in which step you are and continue down the path without overlooking any of the steps.
                                    </p>
                                    <div className="center">
                                        <a href="https://drive.google.com/file/d/1pDl97M1Kju0AofvYfZGGx7nJLrdhpTWD/view?usp=sharing" target="_blank" style={{ background: "#2b2321c9", marginTop: "2em" }} className="btn waves-effect waves-light ">Read More</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default VentureHack