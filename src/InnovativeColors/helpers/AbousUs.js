import React from "react";
import Slider from "react-slick";
import styled from "styled-components";
import tw from "twin.macro";
import { css } from "styled-components/macro"; //eslint-disable-line
import { SectionHeading as HeadingTitle } from "../../components/misc/Headings.js";
import { ReactComponent as QuotesLeftIcon } from "../../images/quotes-l.svg";
import { ReactComponent as QuotesRightIcon } from "../../images/quotes-r.svg";
import { ReactComponent as ArrowLeftIcon } from "../../images/arrow-left-2-icon.svg";
import { ReactComponent as ArrowRightIcon } from "../../images/arrow-right-2-icon.svg";
import { ReactComponent as SvgDecoratorBlob1 } from "../../images/svg-decorator-blob-4.svg";
import { ReactComponent as SvgDecoratorBlob2 } from "../../images/svg-decorator-blob-5.svg";
import "slick-carousel/slick/slick.css";
import { FloatingLettersTextBuilder, BlinkingCursorTextBuilder } from 'react-animated-text-builders'

const Container = tw.div`relative`;
const Content = tw.div`py-2 lg:py-2`;
const HeadingInfoContainer = tw.div`flex flex-col items-center`;
const HeadingDescription = tw.p`mt-4 font-medium text-gray-600 text-center max-w-sm`;

const Testimonial = tw.div`flex! flex-col items-center md:items-stretch md:flex-row md:justify-center outline-none`;
const TextContainer = tw.div`md:mx-3 lg:mx-6 md:w-10/12 py-4 flex flex-col justify-between`;
const QuoteContainer = tw.div`relative p-6 md:p-8 lg:p-10 mt-4 md:mt-0`;
const Quote = tw.blockquote`text-center md:text-left font-light text-xl lg:text-xl xl:text-base`;

const QuotesLeft = tw(QuotesLeftIcon)`w-8 h-8 lg:w-10 lg:h-10 text-primary-500 absolute top-0 left-0`;
const QuotesRight = tw(QuotesRightIcon)`w-8 h-8 lg:w-10 lg:h-10 text-primary-500 absolute bottom-0 right-0`;

const SliderControlButtonContainer = styled.div`
  ${tw`absolute top-0 h-full flex items-end md:items-center z-20`}
  button {
    ${tw`text-secondary-500 hover:text-primary-500 focus:outline-none transition duration-300 transform hover:scale-125 transform -translate-y-2/3 md:translate-y-0`}
    svg {
      ${tw`w-8`}
    }
  }
`;

const NextArrow = ({ currentSlide, slideCount, ...props }) => (
  <SliderControlButtonContainer tw="right-0">
    <button {...props}>
      <ArrowRightIcon />
    </button>
  </SliderControlButtonContainer>
);
const PreviousArrow = ({ currentSlide, slideCount, ...props }) => (
  <SliderControlButtonContainer tw="left-0">
    <button {...props}>
      <ArrowLeftIcon />
    </button>
  </SliderControlButtonContainer>
);

const DecoratorBlob1 = tw(
  SvgDecoratorBlob1
)`absolute w-32 top-0 left-0 -z-10 text-primary-500 opacity-25 transform -translate-x-full`;
const DecoratorBlob2 = tw(
  SvgDecoratorBlob2
)`absolute w-32 bottom-0 right-0 -z-10 text-pink-500 opacity-15 transform translate-x-2/3 translate-y-8`;

export default () => {
  /*
   * You can modify the testimonials shown by modifying the array below
   * You can add or remove objects from the array as you need.
   */
  
  return (
      <Content>
          <Testimonial>
            <TextContainer>
              <QuoteContainer>
              
                <BlinkingCursorTextBuilder timeout={50}>
                Innovative Colors studio is a core design driven company which is a one-stop solution based in Bangalore. Our company designs and develops a wide array of animations and interactive media. Our team of talented and well experienced animators  pushes the boundaries of visual and technical production at right direction. Innovative Colors stands tall in its domain and crew with strong creative background with global experience. We manifest creative talent which can be recognized by creative industry ethics. We are developing visually enticing and industry superior quality products with globally acknowledged reputation in Creativity, Skills and Quality experience. We are rapidly gaining popularity with our successful works and services.
                </BlinkingCursorTextBuilder>
                {/* <Quote>Innovative Colors studio is a core design driven company which is a one-stop solution based in Bangalore. Our company designs and develops a wide array of animations and interactive media. Our team of talented and well experienced animators  pushes the boundaries of visual and technical production at right direction.
                Innovative Colors stands tall in its domain and crew with strong creative background with global experience. We manifest creative talent which can be recognized by creative industry ethics. We are developing visually enticing and industry superior quality products with globally acknowledged reputation in Creativity, Skills and Quality experience. We are rapidly gaining popularity with our successful works and services.
                </Quote> */}
              </QuoteContainer>
            </TextContainer>
          </Testimonial>
      </Content>
  );
};
