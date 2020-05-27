import React from 'react';
import Header from './components/Header/Header';
import { Footer, BackToTop } from './components/Footer/Footer';
import { Switch, Route, Redirect } from 'react-router-dom';
import AboutMe from './containers/AboutMe/AboutMe';
import Gallery from './containers/Gallery/Gallery';
import Home from './containers/Home/Home';
import SimpleReactLightbox from "simple-react-lightbox";
import './assets/css/main.css';

function App() {

  const galleryLightBox = (
    <SimpleReactLightbox>
      <Gallery />
    </SimpleReactLightbox>
  );

  const routes = (
    <Switch>
      <Route path="/about" component={AboutMe} />
      <Route path="/gallery" render={() => galleryLightBox} />
      <Route path="/" exact component={Home} />
      <Redirect to="/" />
    </Switch>
  );

  return (
    <div>
      <Header />
      {routes}
      <Footer />
      <BackToTop />
    </div>
  );
}

export default App;
