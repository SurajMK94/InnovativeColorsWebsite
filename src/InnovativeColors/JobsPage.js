import React, { Component }  from "react";
import tw from "twin.macro";
import AnimationRevealPage from "InnovativeColors/helpers/AnimationRevealPage.js";
import SliderCard from "components/cards/ThreeColSlider.js";
import Footer from "InnovativeColors/footers/MiniCenteredFooter.js";
import StickyHeader from 'react-sticky-header';
import Header from "./headers/Header.js";
import logo from "images/InnovativeColorsLogo.png";
import { Container } from "components/misc/Layouts.js";
import Hero from "components/hero/FullWidthWithImage.js";
import { SectionHeading, Subheading as SubheadingBase } from "components/misc/Headings";
import styled from "styled-components";
import EmailIllustrationSrc from "images/email-illustration.svg";
import { PrimaryButton as PrimaryButtonBase } from "components/misc/Buttons.js";
import * as emailjs from 'emailjs-com'

const Input = tw.input`mt-6 first:mt-0 border-b-2 py-3 focus:outline-none font-medium transition duration-300 hocus:border-primary-500`
const Heading = tw(SectionHeading)``;
const HighlightedText = tw.span`bg-primary-500 text-gray-100 px-4 transform -skew-x-12 inline-block`;
const TwoColumn = tw.div`flex flex-col md:flex-row justify-between max-w-screen-xl mx-auto py-20 md:py-24`;
const Column = tw.div`w-full max-w-md mx-auto md:max-w-none md:mx-0`;
const ImageColumn = tw(Column)`md:w-5/12 flex-shrink-0 h-80 md:h-auto`;

const Image = styled.div(props => [
  `background-image: url("${props.imageSrc}");`,
  tw`rounded bg-contain bg-no-repeat bg-center h-full`,
]);
const TextContent = tw.div`lg:py-8 text-center md:text-left`;
const TextColumn = styled(Column)(props => [
  tw`md:w-7/12 mt-16 md:mt-0`,
  props.textOnLeft ? tw`md:mr-12 lg:mr-16 md:order-first` : tw`md:ml-12 lg:ml-16 md:order-last`
]);
const Subheading = tw(SubheadingBase)`text-center md:text-left`;
const Textarea = styled(Input).attrs({as: "textarea"})`
  ${tw`h-24`}
`
const SubmitButton = tw(PrimaryButtonBase)`inline-block mt-8`
const Form = tw.form`mt-8 md:mt-10 text-sm flex flex-col max-w-sm mx-auto md:mx-0`

var bgColors = { "default": "#001d28",
                    "bodyColor": "#121212",
                    "headingColor":'#ffffff'
};

class JobsPage extends Component {

  state = {
    name: '',
    email: '',
    subject: '',
    message: '',
  }
  
  handleSubmit = (e)=> {
    e.preventDefault()
    const { name, email, subject, message } = this.state
    let templateParams = {
      firstname: name,
      email: email,
      message: message,
     }
     emailjs.send(
      'service_xuipixd',
      'template_6l85zed',
       templateParams,
      'user_LBS9CMeUvXncF6pOJHnrS'
     )
     this.resetForm()
  }
  resetForm = ()=> {
    this.setState({
      name: '',
      email: '',
      subject: '',
      message: '',
    })
  }
  handleChange = (param, e) => {
    this.setState({ [param]: e.target.value })
  }

render() {
  return (
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
      <Header />
      </div>
    </div>
  }>
</StickyHeader>
<br></br>
<br></br>
<div style={{
    backgroundColor: bgColors.bodyColor,
    color:bgColors.headingColor
  }}>
    <SliderCard></SliderCard>
  </div>

<Footer />
</Container>
  )
}
}

export default JobsPage