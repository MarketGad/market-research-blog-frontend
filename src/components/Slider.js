
import React from "react";

const Slider = () => {
    return (
        <div style={{height:"87vh"}}>
        <section className="fslider">
            <div className="slider">
                <ul className="slides">
                    <li style={{height: "88vh"}}>
                        <img src="https://res.cloudinary.com/marketgaddevcloud1/image/upload/v1596651501/Untitled-1_lw4pwu.jpg" alt=" one" className="mobile1"/>
                        <img src="https://res.cloudinary.com/marketgaddevcloud1/image/upload/v1596691317/Untitled-1_1_yobc0f.jpg" alt=" one" className = "mobile"/>
                        <div className="caption slide-box center-align">
                            <a href="/whatwedo" style={{ background: "black", marginTop: "28em" , color:"white"}} className="btn waves-effect waves-light join-btn">Get Started</a>
                        </div>
                    </li>
                    <li style={{height: "88vh"}}>
                        <img src="https://res.cloudinary.com/marketgaddevcloud1/image/upload/v1596654042/marketgad_front_page_2_dtyy3e.jpg" alt=" two" className="mobile1"/>
                        <img src="https://res.cloudinary.com/marketgaddevcloud1/image/upload/v1596691313/Startup_yqpduz.jpg" alt=" two" className = "mobile"/>
                        <div className="caption slide-box center-align">
                            <a href="/whatwedo" style={{ background: "black", marginTop: "28em" , color:"white"}} className="btn waves-effect waves-light join-btn">Get Started</a>
                        </div>
                    </li>
                    <li style={{height: "88vh"}}>
                        <img src="https://res.cloudinary.com/marketgaddevcloud1/image/upload/v1596651502/what_we_do__MarketGad_s2mtdm.jpg" alt=" three" className="mobile1"/>
                        <img src="https://res.cloudinary.com/marketgaddevcloud1/image/upload/v1596691314/What_we_do_adhgmv.jpg" alt=" three" className = "mobile"/>
                        <div className="caption slide-box center-align">
                            <a href="/whatwedo" style={{ background: "black", marginTop: "28em" , color:"white"}} className="btn waves-effect waves-light join-btn">Get Started</a>
                        </div>
                    </li>
                </ul>
            </div>
            
            </section>
        </div>
    );
};

export default Slider;