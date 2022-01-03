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

import CGImage0 from "./../../images/CG/CG0.jpg";
import CGImage1 from "./../../images/CG/CG1.jpg";
import CGImage2 from "./../../images/CG/CG2.jpg";
import CGImage3 from "./../../images/CG/CG3.jpg";
import CGImage4 from "./../../images/CG/CG4.jpg";
import CGImage5 from "./../../images/CG/CG5.jpg";
import CGImage6 from "./../../images/CG/CG6.jpg";
import CGImage7 from "./../../images/CG/CG7.jpg";
import CGImage8 from "./../../images/CG/CG8.jpg";
import CGImage9 from "./../../images/CG/CG9.jpg";
import CGImage10 from "./../../images/CG/CG10.jpg";
import CGImage11 from "./../../images/CG/CG11.jpg";
import CGImage12 from "./../../images/CG/CG12.jpg";
import CGImage13 from "./../../images/CG/CG13.jpg";
import CGImage14 from "./../../images/CG/CG14.jpg";
import CGImage15 from "./../../images/CG/CG15.jpg";
import CGImage16 from "./../../images/CG/CG16.jpg";
import CGImage17 from "./../../images/CG/CG17.jpg";
import CGImage18 from "./../../images/CG/CG18.jpg";
import CGImage19 from "./../../images/CG/CG19.jpg";
import CGImage20 from "./../../images/CG/CG20.jpg";
import CGImage21 from "./../../images/CG/CG21.jpg";
import CGImage22 from "./../../images/CG/CG22.jpg";
import CGImage23 from "./../../images/CG/CG23.jpg";
import CGImage24 from "./../../images/CG/CG24.jpg";

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
  ${tw`flex flex-col items-center md:items-stretch md:flex-row flex-wrap md:justify-center max-w-screen-xl mx-auto py-1 md:py-1`}
`;

const CardHoverOverlay = styled(motion.div)`
  background-color: rgba(255, 255, 255, 0.5);
  ${tw`absolute inset-0 flex justify-center items-center`}
`;

const tabs = {
  Starters: [
    {
      imageSrc: CGImage1, title: "CG",
    },
    {
      imageSrc: CGImage2, title: "CG",
    },
    {
      imageSrc: CGImage3, title: "CG",
    },
    {
      imageSrc: CGImage4, title: "CG",
    },
    {
      imageSrc: CGImage5, title: "CG",
    },
    {
      imageSrc: CGImage6, title: "CG",
    },
    {
      imageSrc: CGImage7, title: "CG",
    },
    {
      imageSrc: CGImage8, title: "CG",
    },
    {
      imageSrc: CGImage9, title: "CG",
    },
    {
      imageSrc: CGImage10, title: "CG",
    },
    {
      imageSrc: CGImage11, title: "CG",
    },
    {
      imageSrc: CGImage12, title: "CG",
    },
    {
      imageSrc: CGImage13, title: "CG",
    },
    {
      imageSrc: CGImage14, title: "CG",
    },
    {
      imageSrc: CGImage15, title: "CG",
    },
    {
      imageSrc: CGImage16, title: "CG",
    },
    {
      imageSrc: CGImage17, title: "CG",
    },
    {
      imageSrc: CGImage18, title: "CG",
    },
    {
      imageSrc: CGImage19, title: "CG",
    },
    {
      imageSrc: CGImage20, title: "CG",
    },
    {
      imageSrc: CGImage21, title: "CG",
    },
    {
      imageSrc: CGImage22, title: "CG",
    },
    {
      imageSrc: CGImage23, title: "CG",
    },
    {
      imageSrc: CGImage24, title: "CG",
    },
    {
      imageSrc: CGImage0, title: "CG",
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

export default class CGWorks extends Component {
  
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
  <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
  </StickyHeader>

  <AnimationRevealPage>
    
  <Heading>CG Works</Heading>

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