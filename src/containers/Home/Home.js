import React from 'react';
import { Navigation } from '../../components/Navigation/Navigation';
import Background from '../../assets/images/home/main.jpg';
import { Link } from 'react-router-dom';
import mainImg from '../../assets/images/home/ann_main.jpg';

import shakespeare from '../../assets/images/home/london-shakespeare-theater.jpg';
import stratford from '../../assets/images/home/stratford.jpg';
import london from '../../assets/images/home/city-of-london.jpg';
import oxford from '../../assets/images/home/oxford.jpg';
import theater from '../../assets/images/home/theater.jpg';
import camden from '../../assets/images/home/camden-docks.jpg';
import stonehenge from '../../assets/images/home/stonehenge.jpg';

const IMAGES = [
    {
        img: shakespeare,
        title: "Shakespeare's London...",
        quote: "London's Globe theatre was host to many of Shakespeare's most famous works throughout his lifetime",
        float: "left"
    }, {
        img: stratford,
        title: "Shakespeare's birthplace...",
        quote: "The idyllic town of Stratford-upon-Avon was once home to the English language's most famous playwright and is set in the beautiful Warwickshire countryside",
        float: "right"
    }, {
        img: london,
        title: "Explore the City of London...",
        quote: "And discover the history of the global financial capital",
        float: "left"
    }, {
        img: oxford,
        title: "Oxford University — the oldest in the English-speaking world...",
        quote: "Its most famous university dating back to 1096, the Hogwarts-inspiring unblemished medieval city is a must-see",
        float: "right"
    }, {
        img: theater,
        title: "World-class theatre in London's West End...",
        quote: "With 15 million tickets sold each year, you won't want to miss London's historic theatre district ⁠— a thriving hub for the dramatic arts",
        float: "left"
    }, {
        img: camden,
        title: "Bohemian urban culture...",
        quote: "From Camden Town to the streets of the East End, there's lots to be seen in London's vibrant centres for contemporary art and music",
        float: "right"
    }, {
        img: stonehenge,
        title: "The history of the ancients...",
        quote: "Britain's Roman history left it speckled with the remnants of antiquity, not to mention prehistoric roots reaching back 5000 years",
        float: "left"
    }
];

const Home = () => {

    const imageWrappers = IMAGES.map(img => {
        return (
            <HomeImageWrapper
                key={img.img}
                img={img.img}
                title={img.title}
                quote={img.quote}
                float={img.float} />
        );
    });

    return (
        <React.Fragment>
            <Navigation backgroundUrl={Background}>
                <article id="pageintro" className="hoc clear"> 
                    <h3 className="heading">Experience the real England</h3>
                    <p>Sightseeing made easy with professionally guided tours</p>      
                </article>
            </Navigation>
            <div className="wrapper row3">
                <main className="hoc container clear"> 
                    <div className="group">
                    <div className="one_half first">
                        <p className="font-xs nospace">The Guide</p>
                        <h6 className="heading">Hi, I'm Ann...</h6>
                        <p>Drawing on over thirty years of experience in guiding and tourism, 
                            I provide bespoke tours, specialising in both the London and Heart 
                            of England regions of the United Kingdom. There is a wide range of 
                            experiences available to suit every taste, from the modern to the 
                            historic, from general to specific — we can make sure that your 
                            excursion or event is handled both professionally and with style.
                        </p>
                        <Link className="btn" to="/about">About me &raquo;</Link> 
                    </div>
                    <div className="one_half">
                        <img className="ann-ímg" src={mainImg} alt="ann" />
                    </div>
                    </div>
                    <div className="clear"></div>
                </main>
            </div>
            {imageWrappers}
        </React.Fragment>
    );
};

const HomeImageWrapper = (props) => {
    const background = `url(${props.img})`;
    return (
        <div 
            className="wrapper bgded overlay overlay--soft parallax"
            style={{ backgroundImage: background }}>
            <div className="hoc container testimonials clear"
                style={{ padding: "200px 0" }}>
                <article className={props.float}>
                    <h6 className="heading">{props.title}</h6>
                    <blockquote>{props.quote}</blockquote>
                </article>
            </div>
        </div>
    );
};


export default Home;