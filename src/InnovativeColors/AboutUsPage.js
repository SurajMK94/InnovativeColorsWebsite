import React from "react";
import tw from "twin.macro"; //eslint-disable-line
import { css } from "styled-components/macro"; //eslint-disable-line
import AnimationRevealPage from "InnovativeColors/helpers/AnimationRevealPage.js";
import Hero from "components/hero/BackgroundAsImage.js";
import MainFeature from "components/features/TwoColSingleFeatureWithStats2.js";
import Footer from "InnovativeColors/footers/MiniCenteredFooter.js";
import StickyHeader from 'react-sticky-header';
import Header from "./headers/Header.js";
import logo from "images/InnovativeColorsLogo.png";
import { Container } from "components/misc/Layouts.js";
import { SectionHeading } from "components/misc/Headings";

const Heading = tw(SectionHeading)``;
var bgColors = { "default": "#001d28",
                    "bodyColor": "#121212",
                    "headingColor":'#ffffff'
};

export default () => (

  <Container>

<StickyHeader
  // This is the sticky part of the header.
  header={
    <div className="Header_root">
      <div style={{
    backgroundColor: bgColors.bodyColor,
    color:bgColors.headingColor
  }}>
      <img class="innovativeColorsLogo" src={logo} height={50} width={150} alt="Logo"/>
      <Header />
      </div>
    </div>
  }>
</StickyHeader>
<div style={{
    backgroundColor: bgColors.bodyColor,
    color:bgColors.headingColor
  }}>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <Heading>ABOUT US</Heading>
    <MainFeature />
  </div>
<Footer />
</Container>
);
