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
                <h2 className="seo-tag1">59% of startups fail due to lack of Market Research</h2>
                    <h2 className="seo-tag2">The difference is: Will you do something about it?</h2>
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
