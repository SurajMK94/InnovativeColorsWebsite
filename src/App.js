import "tailwindcss/dist/base.css";
import "styles/globalStyles.css";
import React from "react";
import { css } from "styled-components/macro"; //eslint-disable-line

import ComponentRenderer from "ComponentRenderer.js";
import ThankYouPage from "ThankYouPage.js";

import { BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import HomePage from "./InnovativeColors/HomePage.js";
import ContactPage from "./InnovativeColors/ContactUsPage.js";
import JobsPage from "./InnovativeColors/JobsPage.js";
import AboutUsPage from './InnovativeColors/AboutUsPage';

export default function App() {
  // If you want to disable the animation just use the disabled `prop` like below on your page's component
  // return <AnimationRevealPage disabled>xxxxxxxxxx</AnimationRevealPage>;

  return (
    <Router>
      <Switch>
        {/* <Route exact path={process.env.PUBLIC_URL + '/components/landingPages/HomePage'} component={HomePage}>
        {console.log("BaseURL : " + process.env.PUBLIC_URL + " *HomePage")}
        </Route> */}

        <Route exact path={process.env.PUBLIC_URL + '/components/landingPages/ContactPage'} component={ContactPage}>
        {console.log("BaseURL : " + process.env.PUBLIC_URL + " *ContactPage")}
        </Route>

        <Route exact path={process.env.PUBLIC_URL + '/components/landingPages/AboutUsPage'} component={AboutUsPage}>
        {console.log("BaseURL : " + process.env.PUBLIC_URL + " *AboutUsPage")}
        </Route>

        <Route exact path={process.env.PUBLIC_URL + '/components/landingPages/JobsPage'} component={JobsPage}>
        {console.log("BaseURL : " + process.env.PUBLIC_URL + " *JobsPage")}
        </Route>

        <Route exact path={process.env.PUBLIC_URL + '/'} component={HomePage}>
        {console.log("BaseURL : " + process.env.PUBLIC_URL + " *HomePage")}
        </Route>
      </Switch>

    </Router>
  );
}