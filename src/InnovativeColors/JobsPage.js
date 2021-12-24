import React from "react";
import AnimationRevealPage from "InnovativeColors/helpers/AnimationRevealPage.js";
import SliderCard from "components/cards/ThreeColSlider.js";
import Footer from "components/footers/MiniCenteredFooter.js";
import StickyHeader from 'react-sticky-header';
import Header from "./headers/Header.js";
import logo from "images/InnovativeColorsLogo.png";
import { Container } from "components/misc/Layouts.js";
import Hero from "components/hero/FullWidthWithImage.js";

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
<br></br>
<br></br>
<div style={{
    backgroundColor: bgColors.bodyColor,
    color:bgColors.headingColor
  }}>
    <SliderCard></SliderCard>
  </div>

<Footer />
</Container>
);
