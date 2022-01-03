import React, { Component } from "react";
import tw from "twin.macro";
import { motion } from "framer-motion";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line
import AnimationRevealPage from "InnovativeColors/helpers/AnimationRevealPage.js";
import OurTeam from "InnovativeColors/helpers/OurTeam.js";
import Footer from "InnovativeColors/footers/MiniCenteredFooter.js";
import logo from "images/InnovativeColorsLogo.png";
import { Container } from "components/misc/Layouts.js";
import { SectionHeading } from "components/misc/Headings";
import AboutUs from "InnovativeColors/helpers/AbousUs";
import TabGrid from "components/cards/TabCardGrid.js";
import 'react-sticky-header/styles.css';
import StickyHeader from 'react-sticky-header';
import Header from "../headers/Header.js";
import { PrimaryButton as PrimaryButtonBase } from "components/misc/Buttons.js";
import {
  Link
} from 'react-router-dom';
import ARVRVideo1 from "./../../images/ARVR/ARVRVideo1.mp4";
import ARVRVideo2 from "./../../images/ARVR/ARVRVideo2.mp4";
import ARVRVideo3 from "./../../images/ARVR/ARVRVideo3.mp4";
import ARVRVideo4 from "./../../images/ARVR/ARVRVideo4.mp4";
import ARVRVideo5 from "./../../images/ARVR/ARVRVideo5.mp4";
import ARVRVideo6 from "./../../images/ARVR/ARVRVideo6.mp4";

const Heading = tw(SectionHeading)``;
const CardContainer = tw.div`mt-10 w-full sm:w-1/2 md:w-1/3 lg:w-1/3 sm:pr-10 md:pr-6 lg:pr-12`;
const Card = tw(motion.a)`bg-gray-200 rounded-b block max-w-xs mx-auto sm:max-w-none sm:mx-0`;
const CardImageContainer = styled.div`
  ${props => css`background-image: url("${props.imageSrc}");`}
  ${tw`h-56 xl:h-64 bg-center bg-cover relative rounded-t`}
`;
const CardButton = tw(PrimaryButtonBase)`text-sm`;
const CardText = tw.div`p-4 text-gray-900`;
const CardTitle = tw.h5`text-lg font-semibold group-hover:text-primary-500`;
const CardContent = tw.p`mt-1 text-sm font-medium text-gray-600`;
const ThreeColumnContainer = styled.div`
  ${tw`flex flex-col items-center md:items-stretch md:flex-row flex-wrap md:justify-center max-w-screen-xl mx-auto py-20 md:py-24`}
`;

const CardHoverOverlay = styled(motion.div)`
  background-color: rgba(255, 255, 255, 0.5);
  ${tw`absolute inset-0 flex justify-center items-center`}
`;

const tabs = {
  Starters: [
    {
      videoSource: ARVRVideo2
    },
    {
      videoSource: ARVRVideo4
    },
    {
      videoSource: ARVRVideo5
    },
    {
      videoSource: ARVRVideo1
    },
    {
      videoSource: ARVRVideo3
    },
    {
      videoSource: ARVRVideo6
    }
  ]
}

var bgColors = { "default": "#001d28",
                    "bodyColor": "#121212",
                    "headingColor":'#ffffff'
};
const opts = {
  height: '390',
  width: '640',
  playerVars: {
    autoplay: 1,
  },
};

export default class ARVRWorks extends Component {
  
  componentDidMount() {
    window.scrollTo(0, 0)
  }

  render() {
  
    return (
  <Container className="App">
  <StickyHeader
    // This is the sticky part of the header.
    header={
      <div className="Header_root">
        <div style={{
      backgroundColor: bgColors.bodyColor,
      color:bgColors.headingColor
    }}>
        <img class="innovativeColorsLogo" src={logo} height={50} width={150} alt="Logo"/>
        <Header/>
        </div>
      </div>
      
    }>

  </StickyHeader>

  <AnimationRevealPage>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
  <Heading>AR/VR Works</Heading>

  <ThreeColumnContainer>
      {tabs["Starters"].map((card, index) => (
        <CardContainer key={index}>
          <video autoPlay loop muted height={2000} width={2000}>
                  <source src={card.videoSource} type='video/mp4' />
             </video>
        </CardContainer>
      ))}
  </ThreeColumnContainer>  
</AnimationRevealPage>
  
  <Footer />
  </Container>
    );
  }
}