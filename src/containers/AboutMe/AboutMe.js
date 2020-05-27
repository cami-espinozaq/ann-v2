import React from 'react';
import { Navigation, Breadcrumb } from '../../components/Navigation/Navigation';
import { PageWrapper } from '../../shared/helper';

import Background from '../../assets/images/about/oxford2.jpeg';

import MainImg from '../../assets/images/about/ann_bnw.jpeg';
import GroupImg from '../../assets/images/about/ann_ppl.jpeg';

import classes from "./aboutMe.module.css";

const AboutMe = () => {
    return (
        <React.Fragment>
            <Navigation backgroundUrl={Background}>
                <Breadcrumb activePage="About Me" />
            </Navigation>
            <PageWrapper>
                <h1>About Ann</h1>
                <img className={classes.mainImg}
                    src={MainImg}
                    alt="about-me" />
                <p>After careers first as an officer in the Royal Air Force and then an air stewardess Ann joined a major UK Tour Operator in an operational role handling incoming American groups. 
                    Experienced in all aspects of tour planning she trained as a Blue Badge Tourist Guide for the Heart of England.
                    This was followed by a BA (Hons) in Tourist Guiding giving Ann the unique detailed knowledge of all aspects of tourist guiding and 25 years practical experience.
                    She is a food and wine expert holding the Wines and Spirits Education Trust Diploma and has worked with many corporate planners on special events. 
                    She also has a passion for sport and theatre.
                </p>
                <p>Ann enjoys looking after visitors of all ages especially family groups and her goal is to give every visitor a unique and memorable experience, so no two tours will be the same. 
                    As a London guide Ann is delighted to show you around the famous sites of Westminster Abbey and the Tower of London or to the lesser known areas of the City and East End. 
                    Further afield she is familiar with the Cotswolds, Shakespeare’s Stratford upon Avon and Windsor and Eton.
                </p>
                <br />
                <p>
                    After years of organising tours Ann is aware that guides can talk too much. 
                    Her personal mantra is inspired by the final lines of the poem Leisure: 
                    <i>
                        “A poor life this if, full of care, we have no time to stand and stare.”
                    </i>
                </p>
                <p>Sometimes our best memories of a holiday are the sights, smells and background sounds of a special place. 
                    Ann would love to take you to her special places to stand and stare but also share her detailed knowledge of the past, present and future events with you.
                </p>
                <br />
                <p className={classes.centered}>
                    <b>“Leisure”</b> by Welsh poet WH Davies published in 1911.
                </p>
                <p className={classes.centered}><i>
                    “WHAT is this life if, full of care, We have no time to stand and stare?— 
                    No time to stand beneath the boughs, And stare as long as sheep and cows: No time to see, when woods we pass, 
                    Where squirrels hide their nuts in grass: No time to see, in broad daylight,
                    Streams full of stars, like skies at night: No time to turn at Beauty’s glance, 
                    And watch her feet, how they can dance: No time to wait till her mouth can Enrich that smile her eyes began? 
                    A poor life this if, full of care, We have no time to stand and stare.”
                </i></p>
                <br />
                <div className={classes.secondaryImg}>
                    <img src={GroupImg} alt="about-me2" />
                    <p className={`${classes.centered} ${classes.imgCaption}`}>Ann with Lord and Lady Palmer of Childs Hill.</p>
                </div>
            </PageWrapper>
        </React.Fragment>
    );
};

export default AboutMe;