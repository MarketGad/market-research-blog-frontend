import React from 'react';

const FeaturedResearch = () => {
    const articles = [
        {
            "postName": "Data driven Business Decisions",
            "postImage": 'https://res.cloudinary.com/marketgaddevcloud1/image/upload/v1594964400/Articles%20Photos/Industry/data_n0hktc.jpg',
            "key": '1',
            "authorLink":'https://www.linkedin.com/in/shankh0407',
            "authorName":"Shankhadeep Banerjee",
            "postBrief": "Companies are nowadays focusing on providing tailored products and services in order to remain competitive in the market. The problems faced by them is mostly because of uncertainty of product and service failures in the market. So, the need for data-based solutions are to be incorporated...",
            "postLink": "https://drive.google.com/file/d/1l3pzZAZbP0_-Gnf8wqKqxfekRkxBKhBa/view?usp=sharing"
        },
        {
            "postName": "Indian Healthcare Industry",
            "postImage": 'https://res.cloudinary.com/marketgaddevcloud1/image/upload/v1594964994/Articles%20Photos/Industry/heathcare_h3vt4z.jpg',
            "key": '2',
            "authorLink":'https://www.linkedin.com/in/shankh0407',
            "authorName":"Shankhadeep Banerjee",
            "postBrief": " The Indian Healthcare sector stands as the world’s fourth-largest employer. The country employs over 3,20,000 people all around the country, which is also estimated to cross a valuation of 40 million by the end of 2020. Gloablly it is one of the firstest growing...",
            "postLink": "https://drive.google.com/file/d/1jGBTzrtWh8Bv6sVXHG_yMk0RJtn9Pzry/view?usp=sharing"
        },
        {
            "postName": "Logistics Sectors in India",
            "postImage": 'https://res.cloudinary.com/marketgaddevcloud1/image/upload/v1594916046/Articles%20Photos/Industry/Logistic%20Sector%20of%20India/1-min_ft40ju.jpg',
            "key": '3',
            "authorLink":'https://www.linkedin.com/in/bisleshana-brahma-prakash/',
            "authorName":"Bisleshana B Prakash",
            "postBrief": "India's logistics cost is estimated to be 13-14 % of GDP. In contrast,in developed economies like Germany, Sweden, Belgium, Austria, Japan and the USA, the cost varies between 9-10%. This article by Bisleshana(IIMI) give you a thorough study of India's Logistic Sector...",
            "postLink": "/i1001"
        },
    ];


const showArticles = articles.length ? (
    articles.map(article => {
        return (
            <div className="col s12 m12 l4" style={{ padding: "20px 5px" }}>
            <div className="card card-h">
                <div className="card-image card-img waves-effect waves-block waves-light">
                    <img 
                        className="activator" 
                        src={article.postImage} 
                        alt="feature1" 
                    />
                </div>
                <div className="card-content">
                    <span className="card-title activator grey-text text-darken-4" style={{ fontWeight: "450", fontSize: "1.8em" }}
                    >{article.postName}
                    <i className="material-icons right"
                    >more_vert</i></span>
                </div>
                <div className="card-reveal">
                    <span className="card-title grey-text text-darken-4" style={{ fontWeight: "450", fontSize: "1.8em" }}
                    >{article.postName}
                    <i className="material-icons right">close</i></span
                    >
                    <div style={{ textAlign: "right", padding: "15px" }}>
                        By <b>
                            <a href={article.authorLink}>
                            {article.authorName}
                            </a>
                            </b>
                    </div>
                    <p>
                        {article.postBrief}
                    </p>
                    <div style={{ paddingTop: "4rem" }} className="center">
                        <a href={article.postLink} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        style={{ background: "#080808d9" }} 
                        className="btn waves-effect wave-light">Read More</a>
                    </div>
                </div>
            </div>
        </div>
        )
    })
) : (
        <div className="center">No articles to show :(</div>
    );

return (
    <div>
        <section className="fcards">
            <div className="offeringhead">
                Featured Research
            </div>
            <div className="row" style={{ paddingLeft: "10px", paddingRight: "10px" }}>
                {showArticles}
            </div>
        </section>
    </div >
)
}

export default FeaturedResearch;