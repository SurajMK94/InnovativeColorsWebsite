import React from "react";
import tw from "twin.macro";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import Hero from "components/hero/BackgroundAsImageWithCenteredContent.js";
import SliderCard from "components/cards/ThreeColSlider.js";
import Testimonial from "components/testimonials/ThreeColumnWithProfileImage.js";
import DownloadApp from "components/cta/DownloadApp.js";
import MainFeature from "components/features/TwoColWithButton.js";
// import Footer from "components/footers/SimpleFiveColumn.js";
import Footer from "components/footers/MiniCenteredFooter.js";
import logo from "images/InnovativeColorsLogo.png";
import { Container } from "components/misc/Layouts.js";
import WebsiteTabs from "components/hero/WebSiteTabs.js";
import { SectionHeading } from "components/misc/Headings";
import TwoColumnWithImage from "components/testimonials/TwoColumnWithImage";
import TabGrid from "components/cards/TabCardGrid.js";
import Features from "components/features/DashedBorderSixFeatures";
import 'react-sticky-header/styles.css';
import StickyHeader from 'react-sticky-header';
import Header from "../components/headers/light.js";

const Subheading = tw.span`tracking-wider text-sm font-medium`;
const Heading = tw(SectionHeading)``;
const HighlightedText = tw.span`bg-primary-500 text-gray-100 px-4 transform -skew-x-12 inline-block`;
const HighlightedTextInverse = tw.span`bg-gray-100 text-primary-500 px-4 transform -skew-x-12 inline-block`;
const Description = tw.span`inline-block mt-8`;
const imageCss = tw`rounded-4xl`;

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
        {/* <WebsiteTabs></WebsiteTabs> */}

        <Header />
        </div>
      </div>
    }
  >
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
      <TwoColumnWithImage>
        
      </TwoColumnWithImage>
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

  <Testimonial
      subheading=""
      heading={<>OUR TEAM</>}
    />

  </div>
  <Footer />
</AnimationRevealPage>
  </StickyHeader>
  
    
  
  </Container>
);
