import React, { Component } from 'react';
import axios from 'axios';
import Slider from './Slider';
import Subscribe from './Subscribe';
import Newpost from './Newpost';
import Footer from './Footer';
import Offerings from './Offerings';
import FeaturedResearch from './FeaturedResearch';

class Home extends Component {
    state = {
        posts: []
    }
    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/posts/')
            .then(res => {
                console.log(res);
                this.setState({
                    posts: res.data.slice(0, 10)
                });
            })
    }
    render() {
        return (
            <div>
                <Slider />
                <div className="tagline center">
                <h4 className="seo-tag1">59% of startups fail due to lack of Market Research</h4>
                    <h4 className="seo-tag2">Each one of us will have a billion-dollar idea at some point</h4>
                    <h4 className="seo-tag1">The difference is: Will you do something about it?</h4>
                    <h4 className="seo-tag2">Subscribe for latest stuff from MG</h4>
                </div>
                <Newpost />
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