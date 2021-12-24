import React from 'react';
import { useParams } from 'react-router-dom';

import AnimationRevealPage from "InnovativeColors/helpers/AnimationRevealPage.js"
import HomePage from "InnovativeColors/HomePage.js";
import ContactPage from "InnovativeColors/ContactUsPage.js";
import JobsPage from "InnovativeColors/JobsPage.js";
import AboutUsPage from 'InnovativeColors/AboutUsPage';

import EventLandingPageImageSrc from "images/demo/EventLandingPage.jpeg";

export const components = {
  landingPages: {
    HomePage: {
      component: HomePage,
      imageSrc: EventLandingPageImageSrc,
      url: "/components/landingPages/HomePage",
    },
    ContactPage: {
      component: ContactPage,
      imageSrc: EventLandingPageImageSrc,
      url: "/components/landingPages/ContactPage",
    },
    JobsPage: {
      component: JobsPage,
      imageSrc: EventLandingPageImageSrc,
      url: "/components/landingPages/JobsPage",
    },
    AboutUsPage: {
      component: AboutUsPage,
      imageSrc: EventLandingPageImageSrc,
      url: "/components/landingPages/AboutUsPage",
    }
  }
}

export default () => {
  const { type, subtype, name } = useParams()

  try {
    let Component = null;
    if(type === "blocks" && subtype) {
      Component= components[type][subtype]["elements"][name].component
      return <AnimationRevealPage disabled>
          <Component/>
        </AnimationRevealPage>
    }
    else
      Component= components[type][name].component

    if(Component)
      return <Component/>

    throw new Error("Component Not Found")
  }
  catch (e) {
    console.log(e)
    return <div>Error: Component Not Found</div>
  }
}
