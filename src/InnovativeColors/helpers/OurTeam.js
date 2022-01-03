import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { css } from "styled-components/macro"; //eslint-disable-line
import { ContentWithPaddingXl, Container } from "components/misc/Layouts.js";
import { SectionHeading as Heading, Subheading as SubheadingBase } from "components/misc/Headings.js";
import { ReactComponent as SvgDecoratorBlob1 } from "images/svg-decorator-blob-7.svg";
import { ReactComponent as SvgDecoratorBlob2 } from "images/svg-decorator-blob-8.svg";
import { FloatingLettersTextBuilder } from "react-animated-text-builders";
import niranjanPhoto from 'images/Founders/Niranjan.jpg';
import praveenPhoto from 'images/Founders/Praveen.jpg';
import rajendraPhoto from 'images/Founders/Rajendra.jpg';
import satishPhoto from 'images/Founders/Satish.jpg';

const Subheading = tw(SubheadingBase)`text-center`;
const Testimonials = tw.div`flex flex-col lg:flex-row items-center lg:items-stretch`;
const TestimonialContainer = tw.div`mt-16 lg:w-1/3`;
const Testimonial = tw.div`px-4 text-center max-w-xs mx-auto flex flex-col items-center`;
const Image = tw.img`w-20 h-20 rounded-full`;
const Quote = tw.blockquote`mt-1 text-gray-600 text-sm leading-loose`;
const CustomerName = tw.p`mt-2 font-semibold text-base tracking-wide`;

const DecoratorBlob1 = styled(SvgDecoratorBlob1)`
  ${tw`pointer-events-none -z-20 absolute left-0 top-0 h-56 w-56 opacity-15 transform -translate-x-2/3 -translate-y-12 text-teal-400`}
`;
const DecoratorBlob2 = styled(SvgDecoratorBlob2)`
  ${tw`pointer-events-none -z-20 absolute right-0 bottom-0 h-64 w-64 opacity-15 transform translate-x-2/3 text-yellow-500`}
`;


export default ({
  subheading = "Testimonials",
  heading = "Customer's Review",
  testimonials = [
    {
      imageSrc:
      praveenPhoto,
      quote:
        "Production pipeline developer",
      customerName: "Praveen SP (Founder/CEO)"
    },
    {
      imageSrc:
        '',
      quote:
        "Technical developer",
      customerName: "Satish N (Co-Founder/CTO)"
    },
    {
      imageSrc:
      rajendraPhoto,
      quote:
        "Visual developer",
      customerName: "Rajendra K (Co-Founder/CCO)"
    },
    {
      imageSrc:
        niranjanPhoto,
      quote:
        "Project manager",
      customerName: "Niranjan Sirsikar (Co-Founder/COO)"
    }
  ]
}) => {
  return (
    <Container>
      <ContentWithPaddingXl>
        {subheading && <Subheading>{subheading}</Subheading>}
        <div style={{
        color:'#ffffff'
      }}>
        <Heading>{heading}</Heading>
      </div>
        
        <Testimonials>
          {testimonials.map((testimonial, index) => (
            <TestimonialContainer key={index}>
              <Testimonial>
                <Image src={testimonial.imageSrc}/>
                <CustomerName>{testimonial.customerName}</CustomerName>
                <Quote>{testimonial.quote}</Quote>
              </Testimonial>
            </TestimonialContainer>
          ))}
        </Testimonials>
      </ContentWithPaddingXl>

      <DecoratorBlob1 />
      <DecoratorBlob2 />
    </Container>
  );
};
