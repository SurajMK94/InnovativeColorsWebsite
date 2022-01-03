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
import VFXImage1 from "./../../images/VFX/VFX1.jpg";
import VFXImage2 from "./../../images/VFX/VFX2.jpg";
import VFXImage3 from "./../../images/VFX/VFX3.jpg";
import VFXImage4 from "./../../images/VFX/VFX4.jpg";
import VFXImage5 from "./../../images/VFX/VFX5.png";

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
      imageSrc: VFXImage1, title: "VFX"
    },
    {
      imageSrc: VFXImage2, title: "VFX"
    },
    {
      imageSrc: VFXImage3, title: "VFX"
    },
    {
      imageSrc: VFXImage4, title: "VFX"
    },
    {
      imageSrc: VFXImage5, title: "VFX"
    },
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

export default class VFXWorks extends Component {
  
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
  <Heading>VFX Works</Heading>

  <ThreeColumnContainer>
      {tabs["Starters"].map((card, index) => (
        <CardContainer key={index}>
          <Card className="group" href={card.url} initial="rest" whileHover="hover" animate="rest">
            <CardImageContainer imageSrc={card.imageSrc}>
            </CardImageContainer>
            <CardText>
              <CardTitle>{card.title}</CardTitle>
              <CardContent>{card.content}</CardContent>
            </CardText>
          </Card>
        </CardContainer>
      ))}
  </ThreeColumnContainer>
</AnimationRevealPage>
  <Footer />
  </Container>
    );
  }
}