import React from "react";
import { motion } from "framer-motion";
import tw from "twin.macro";
import styled from "styled-components";
import {
  Link
} from 'react-router-dom';
import { css } from "styled-components/macro"; //eslint-disable-line
import useAnimatedNavToggler from "../helpers/useAnimatedNavToggler.js";
import logo from "../../images/InnovativeColorsLogo.png";
import { ReactComponent as MenuIcon } from "feather-icons/dist/icons/menu.svg";
import { ReactComponent as CloseIcon } from "feather-icons/dist/icons/x.svg";
import { Button } from "@material-ui/core";
import { PrimaryButton } from "components/misc/Buttons.js";
import { HeaderButton } from "components/misc/Buttons.js";
import { FloatingLettersTextBuilder , BlinkingCursorTextBuilder} from 'react-animated-text-builders'

const Header = tw.header`
  flex justify-between items-start
  max-w-screen-xl mx-auto
`;

export const NavLinks = tw.div`inline-block`;

/* hocus: stands for "on hover or focus"
 * hocus:bg-primary-700 will apply the bg-primary-700 class on hover or focus
 */
export const NavLink = tw.a`
  text-lg my-2 lg:text-sm lg:mx-6 lg:my-0
  font-semibold tracking-wide transition duration-300
  pb-1 border-b-2 border-transparent hover:border-primary-500 hocus:text-primary-500
`;

export const PrimaryLink = tw(NavLink)`
  lg:mx-0
  px-8 py-3 rounded bg-primary-500 text-gray-100
  hocus:bg-primary-700 hocus:text-gray-200 focus:shadow-outline
  border-b-0
`;

export const LogoLink = styled(NavLink)`
  ${tw`flex items-center font-black border-b-0 text-2xl! ml-0!`};

  img {
    ${tw`w-10 mr-3`}
  }
`;

export const MobileNavLinksContainer = tw.nav`flex flex-1 items-center justify-between`;
export const NavToggle = tw.button`
  lg:hidden z-20 focus:outline-none hocus:text-gray-600 transition duration-300
`;
export const MobileNavLinks = motion(styled.div`
  ${tw`lg:hidden z-10 fixed top-0 inset-x-0 my-20 p-8 border text-center rounded-lg font-bold text-gray-800 bg-white`}
  ${NavLinks} {
    ${tw`flex flex-col items-center`}
  }
`);

export const DesktopNavLinks = tw.nav`
hidden lg:flex flex-1 justify-between items-start py-px font-bold text-xl text-gray-100 hocus:text-gray-200
`;

export default ({ roundedHeaderButton = false, logoLink, links, className, collapseBreakpointClass = "lg" }) => {
  const defaultLinks = [
    <NavLinks key={1}>
      <Link to="/" type="primary" >HOME</Link>
      &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
      <Link to="/AboutUsPage">ABOUT</Link>
      &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
      <Link to="/JobsPage">JOBS</Link>
      &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
      <Link to="/AboutUsPage">MY INNOVATIVE COLORS</Link>
      &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
      <Link to="/ContactPage">CONTACT</Link>
    </NavLinks>
  ];

  const { showNavLinks, animation, toggleNavbar } = useAnimatedNavToggler();
  const collapseBreakpointCss = collapseBreakPointCssMap[collapseBreakpointClass];

  const defaultLogoLink = (
    <LogoLink href="/">
      <img src={logo} alt="logo" />
    </LogoLink>
  );

  logoLink = logoLink || defaultLogoLink;
  links = defaultLinks;

  return (
    <Header  className={className || "header-light"}>
      <DesktopNavLinks css={collapseBreakpointCss.desktopNavLinks}>
        {links}
      </DesktopNavLinks>
      <MobileNavLinksContainer css={collapseBreakpointCss.mobileNavLinksContainer}>
        <MobileNavLinks initial={{ x: "150%", display: "none" }} animate={animation} css={collapseBreakpointCss.mobileNavLinks}>
          {links}
        </MobileNavLinks>
        <NavToggle onClick={toggleNavbar} className={showNavLinks ? "open" : "closed"}>
          {showNavLinks ? <CloseIcon tw="w-10 h-10" /> : <MenuIcon tw="w-10 h-10" />}
        </NavToggle>
      </MobileNavLinksContainer>
    </Header>
  );
};

/* The below code is for generating dynamic break points for navbar.
 * Using this you can specify if you want to switch
 * to the toggleable mobile navbar at "sm", "md" or "lg" or "xl" above using the collapseBreakpointClass prop
 * Its written like this because we are using macros and we can not insert dynamic variables in macros
 */

const collapseBreakPointCssMap = {
  sm: {
    mobileNavLinks: tw`sm:hidden`,
    desktopNavLinks: tw`sm:flex`,
    mobileNavLinksContainer: tw`sm:hidden`
  },
  md: {
    mobileNavLinks: tw`md:hidden`,
    desktopNavLinks: tw`md:flex`,
    mobileNavLinksContainer: tw`md:hidden`
  },
  lg: {
    mobileNavLinks: tw`lg:hidden`,
    desktopNavLinks: tw`lg:flex`,
    mobileNavLinksContainer: tw`lg:hidden`
  },
  xl: {
    mobileNavLinks: tw`lg:hidden`,
    desktopNavLinks: tw`lg:flex`,
    mobileNavLinksContainer: tw`lg:hidden`
  }
};
