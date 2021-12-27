import React from "react";
import tw from "twin.macro";
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
import Header from "./headers/Header.js";

const Heading = tw(SectionHeading)``;
const HighlightedText = tw.span`bg-primary-500 text-gray-100 px-4 transform -skew-x-12 inline-block`;

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
        <Header/>
        </div>
      </div>
    }>

    <br></br>
    <br></br>
    <br></br>
    <br></br>
  <div>
      <video autoPlay loop muted height={2000} width={2000}>
          <source src={"http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4"} type='video/mp4' />
      </video>
    <div/>
  </div>


{/* <div className='player-wrapper'>
            <ReactPlayer
            className='react-player fixed-bottom'
            url= 'Videos/MinionsVideo.mp4'
            width='100%'
            height='100%'
            controls = {true}

            />
        </div> */}

  <AnimationRevealPage>
    

  <div style={{
      backgroundColor: bgColors.bodyColor,
      color:bgColors.headingColor
    }}>

  <Heading>ABOUT US</Heading>

  </div>

  <div style={{
      backgroundColor: bgColors.bodyColor,
      color:'white'
    }}>

    <div>
      <AboutUs>
        
      </AboutUs>
    </div>

    <div style={{
      color:bgColors.headingColor
    }}>
  <Heading>WORKS</Heading>
  </div>

    <TabGrid
      heading={
        <>
          Checkout our <HighlightedText>menu.</HighlightedText>
        </>
      }
    />

  <OurTeam
      subheading=""
      heading={<>OUR TEAM</>}
    />

  </div>
  
</AnimationRevealPage>
  </StickyHeader>
  <Footer />
  </Container>
);
