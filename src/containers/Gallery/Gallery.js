import React from 'react';
import { Navigation, Breadcrumb } from '../../components/Navigation/Navigation';
import { SRLWrapper } from "simple-react-lightbox";
import Background from '../../assets/images/about/oxford2.jpeg';
import "./gallery.css";

const importAll = r => r.keys().map(r);
const images = importAll(require.context('../../assets/images/gallery/', false, /\.(png|jpg)$/));

const Gallery = () => {

    const imagesWrapper = images.map((img, i) => {
        const newLineClass = i % 4 === 0 ? "first" : "";
        return (
            <li className={"one_quarter " + newLineClass} key={i}>
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
            <div className="wrapper row3">
                <main className="hoc container clear"> 
                    <div className="content"> 
                        <div id="gallery">
                            <figure>
                                <header className="heading">Gallery</header>
                                <ul className="nospace clear gallery">
                                    <SRLWrapper options={options}>
                                        {imagesWrapper}
                                    </SRLWrapper>
                                </ul>
                            </figure>
                        </div>
                    </div>
                </main>
            </div>
        </React.Fragment>
    );
};

export default Gallery;