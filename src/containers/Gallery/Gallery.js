import React from 'react';
import { Navigation, Breadcrumb } from '../../components/Navigation/Navigation';
import { PageWrapper } from '../../shared/helper';
import { SRLWrapper } from "simple-react-lightbox";
import Background from '../../assets/images/about/oxford2.jpeg';
import classes from "./gallery.module.css";

const importAll = r => r.keys().map(r);
const images = importAll(require.context('../../assets/images/gallery/', false, /\.(png|jpg)$/));

const Gallery = () => {

    const imagesWrapper = images.map((img, i) => {
        const newLineClass = i % 4 === 0 ? classes.first : "";
        return (
            <li className={`${classes.quarter} ${newLineClass}`} key={i}>
                <img src={img} alt={"image-" + i} />
            </li>
        );
    });

    const options = {
        settings: {
            disablePanzoom: true
        },
        buttons: {
            showDownloadButton: false
        },
        caption: {
            showCaption: false
        }
    }

    return (
        <React.Fragment>
            <Navigation backgroundUrl={Background}>
                <Breadcrumb activePage="Gallery" />
            </Navigation>
            <PageWrapper>
                <figure className={classes.gallery}>
                    <header className="heading">Gallery</header>
                    <ul className={`clear ${classes.gallery}`}>
                        <SRLWrapper options={options}>
                            {imagesWrapper}
                        </SRLWrapper>
                    </ul>
                </figure>
            </PageWrapper>
        </React.Fragment>
    );
};

export default Gallery;