import React, { Component } from 'react';
import Slider from '../Components/Slider';
import Subscribe from '../Components/Subscribe';
import Taglines from '../Components/Taglines';
import Footer from '../Components/Footer';
import Offerings from '../Components/Offerings';
import FeaturedResearch from '../Components/FeaturedResearch';

class Home extends Component {
    render() {
        return (
            <div>
                <Slider />
                <div className="tagline center">
                    <h2 className="seo-tag1">59% of startups fail due to lack of Market Research</h2>
                    <h2 className="seo-tag2">The difference is: Will you do something about it?</h2>
                </div>
                <Taglines />
                {/* <Review /> */}
                <Offerings />
                <FeaturedResearch />
                <Subscribe />
                <Footer />
            </div>
        )
    }
}

export default Home
