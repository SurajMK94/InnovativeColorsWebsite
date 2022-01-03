import "tailwindcss/dist/base.css";
import "styles/globalStyles.css";
import React from "react";
import { css } from "styled-components/macro"; //eslint-disable-line

import ComponentRenderer from "ComponentRenderer.js";
import ThankYouPage from "ThankYouPage.js";

import { BrowserRouter as Router, Switch, Route, Redirect} from "react-router-dom";
import HomePage from "./InnovativeColors/HomePage.js";
import ContactPage from "./InnovativeColors/ContactUsPage.js";
import JobsPage from "./InnovativeColors/JobsPage.js";
import AboutUsPage from './InnovativeColors/AboutUsPage';
import AnimationSquare from'./InnovativeColors/AnimationSquare';
import CGWorks from "InnovativeColors/Works/CGWorks.js";
import VFXWorks from "InnovativeColors/Works/VFXWorks.js";
import GameWorks from "InnovativeColors/Works/GameWorks.js";
import ARVRWorks from "InnovativeColors/Works/ARVRWorks.js";
import ArchitectureWorks from "InnovativeColors/Works/ArchitectureWorks.js";
import ELearningWorks from "InnovativeColors/Works/ELearningWorks.js";

export default function App() {
  // If you want to disable the animation just use the disabled `prop` like below on your page's component
  // return <AnimationRevealPage disabled>xxxxxxxxxx</AnimationRevealPage>;

  return (
    <Router>
      <Switch>
        {/* <Route exact path={process.env.PUBLIC_URL + '/components/landingPages/HomePage'} component={HomePage}>
        {console.log("BaseURL : " + process.env.PUBLIC_URL + " *HomePage")}
        </Route> */}

        <Route path='/ContactPage' component={ContactPage}>
        </Route>

        <Route path='/AboutUsPage' component={AboutUsPage}>
        </Route>

        <Route path='/JobsPage' component={JobsPage}>
        </Route>

        <Route exact path='/' component={HomePage}>
        </Route>
        
        <Route path='/CGWorks' component={CGWorks}>
        </Route>

        <Route path='/VFXWorks' component={VFXWorks}>
        </Route>

        <Route path='/GameWorks' component={GameWorks}>
        </Route>

        <Route path='/ARVRWorks' component={ARVRWorks}>
        </Route>

        <Route path='/ArchitectureWorks' component={ArchitectureWorks}>
        </Route>

        <Route path='/ELearningWorks' component={ELearningWorks}>
        </Route>

        <Redirect to="/" />
      </Switch>

    </Router>
  );
}