import React, { useState, Component } from "react";
import { motion } from "framer-motion";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line
import { Container, ContentWithPaddingXl } from "components/misc/Layouts.js";
import { SectionHeading } from "components/misc/Headings.js";
import { PrimaryButton, PrimaryButton as PrimaryButtonBase } from "components/misc/Buttons.js";
import { StyleSheet, Animated} from "react-native-web";
import {
  Link
} from 'react-router-dom';
import "./../../App.css";
import GameThumbnail from "./../../images/Gaming/Game2.jpg";
import VFXThumbnail from "./../../images/VFX/VFX1.jpg";
import CGThumbnail from "./../../images/CG/CG1.jpg";


const CardContainer = tw.div`mt-10 w-full sm:w-1/2 md:w-1/3 lg:w-1/3 sm:pr-10 md:pr-6 lg:pr-12`;
const Card = tw(motion.a)`bg-gray-200 rounded-b block max-w-xs mx-auto sm:max-w-none sm:mx-0`;
const CardImageContainer = styled.div`
  ${props => css`background-image: url("${props.imageSrc}");`}
  ${tw`h-56 xl:h-64 bg-center bg-cover relative rounded-t`}
`;

const CardHoverOverlay = styled(motion.div)`
  background-color: rgba(255, 255, 255, 0.5);
  ${tw`absolute inset-0 flex justify-center items-center`}
`;

const CardButton = tw(PrimaryButtonBase)`text-sm`;
const CardText = tw.div`p-4 text-gray-900`;
const CardTitle = tw.h5`text-lg font-semibold group-hover:text-primary-500`;
const CardContent = tw.p`mt-1 text-sm font-medium text-gray-600`;
const ThreeColumnContainer = styled.div`
  ${tw`flex flex-col items-center md:items-stretch md:flex-row flex-wrap md:justify-center max-w-screen-xl mx-auto py-1 md:py-1`}
`;

const tabs = {
  Starters: [
    {
      imageSrc:
      CGThumbnail,
      title: "CG",
      content: "Tomato Salad & Carrot",
      pageLink: "/CGWorks"
    },
    {
      imageSrc:
      VFXThumbnail,
      title: "VFX",
      content: "Cheese Pizza",
      pageLink: "/VFXWorks"
    },
    {
      imageSrc:
      GameThumbnail,
      title: "GAME",
      content: "Hamburger & Fries",
      pageLink: "/GameWorks"
    },
    {
      imageSrc:
        "https://images.unsplash.com/photo-1626379953822-baec19c3accd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80",
      title: "AR/VR",
      content: "Crispy Soyabeans",
      pageLink: "/ARVRWorks"
    },
    {
      imageSrc:
        "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80",
      title: "ARCHITECTURE",
      content: "Roasted Chicken & Egg",
      pageLink: "/ArchitectureWorks"
    },
    {
      imageSrc:
        "https://images.unsplash.com/photo-1516321497487-e288fb19713f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80",
      title: "E-LEARNING",
      content: "Deepfried Chicken",
      pageLink: "/ELearningWorks"
    }
  ]
}

export default class TabCardGrid extends Component 
{
  state = {
    animation: new Animated.Value(1),
  };
  startAnimation = () => {
    Animated.timing(this.state.animation, {
      toValue: 2,
      duration: 1500
    }).start(() => {
      this.state.animation.setValue(1);
    });
  }


  OpenPage = () => {
    let path = `newPath`;
    this.props.history.push(path);
  }
  
  render() {
    const animatedStyles = {
      transform: [
        { scale: this.state.animation }
      ]
    }

  return (
    <Container>
      <ThreeColumnContainer>
            {tabs["Starters"].map((card, index) => (
              <CardContainer key={index}>
                <Card className="group" href={card.url} initial="rest" whileHover="hover" animate="rest">
                  <CardImageContainer imageSrc={card.imageSrc}>
                    <CardHoverOverlay to={card.pageLink}
                      variants={{
                        hover: {
                          opacity: 1,
                          height: "auto"
                        },
                        rest: {
                          opacity: 0,
                          height: 0
                        }
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      <CardButton>
                      <Link to={card.pageLink}>Explore</Link>
                        </CardButton>
                    </CardHoverOverlay>
                  </CardImageContainer>
                  <CardText>
                    <CardTitle>{card.title}</CardTitle>
                    {/* <CardContent>{card.content}</CardContent> */}
                  </CardText>
                </Card>
              </CardContainer>
            ))}
      </ThreeColumnContainer>
    </Container>
  );
}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },

  box: {
    width: 150,
    height: 150,
    backgroundColor: "tomato"
  }
});