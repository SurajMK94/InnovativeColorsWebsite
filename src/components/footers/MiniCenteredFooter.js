import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import {Container as ContainerBase } from "components/misc/Layouts.js"
import logo from "../../images/logo.svg";
import { ReactComponent as InstagramIcon } from "../../images/facebook-icon.svg";
import { ReactComponent as FacebookIcon } from "../../images/facebook-icon.svg";
import { ReactComponent as WhatsappIcon } from "../../images/youtube-icon.svg";
import { ReactComponent as TwitterIcon } from "../../images/twitter-icon.svg";
import { ReactComponent as LinkedInIcon } from "../../images/linkedin-icon.svg";

const Container = tw(ContainerBase)`bg-gray-900 text-gray-100 -mx-8 -mb-8`
const Content = tw.div`max-w-screen-xl mx-auto py-12 lg:py-1`;

const Row = tw.div`flex items-center justify-center flex-col px-8`

const SocialLinksContainer = tw.div`mt-6`;
const SocialLink = styled.a`
  ${tw`cursor-pointer inline-block text-gray-100 hover:text-gray-500 transition duration-300 mx-4`}
  svg {
    ${tw`w-5 h-5`}
  }
`;

const CopyrightText = tw.p`text-center mt-1 font-medium tracking-wide text-sm text-gray-600`
export default () => {
  return (
    <Container>
      <Content>
        <Row>
        <CopyrightText>
            Innovative Colors Studios
          </CopyrightText>
          <SocialLinksContainer>
            <SocialLink href="https://facebook.com">
              <InstagramIcon />
            </SocialLink>
            <SocialLink href="https://twitter.com">
              <FacebookIcon />
            </SocialLink>
            <SocialLink href="https://youtube.com">
              <WhatsappIcon />
            </SocialLink>
            <SocialLink href="https://youtube.com">
              <TwitterIcon />
            </SocialLink>
            <SocialLink href="https://youtube.com">
              <LinkedInIcon />
            </SocialLink>
          </SocialLinksContainer>
          <CopyrightText>
            &copy; Copyright 2021, Innovative Colors Studios. All Rights Reserved.
          </CopyrightText>
        </Row>
      </Content>
    </Container>
  );
};
