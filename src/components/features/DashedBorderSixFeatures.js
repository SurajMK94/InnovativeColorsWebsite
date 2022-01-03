import React,  { Component } from "react";
import styled from "styled-components";
import tw from "twin.macro";
//eslint-disable-next-line
import { css } from "styled-components/macro";
import { SectionHeading, Subheading as SubheadingBase } from "components/misc/Headings.js";
import { PrimaryButton as PrimaryButtonBase } from "components/misc/Buttons";
import EmailIllustrationSrc from "../../images/design-illustration.svg";
import defaultCardImage from "../../images/shield-icon.svg";
import { ReactComponent as SvgDecoratorBlob3 } from "../../images/svg-decorator-blob-3.svg";
import SupportIconImage from "../../images/support-icon.svg";
import ShieldIconImage from "../../images/shield-icon.svg";
import CustomizeIconImage from "../../images/customize-icon.svg";
import FastIconImage from "../../images/fast-icon.svg";
import ReliableIconImage from "../../images/reliable-icon.svg";
import SimpleIconImage from "../../images/simple-icon.svg";
import { PrimaryButton } from "components/misc/Buttons";
import * as emailjs from 'emailjs-com'
import "./../../App.css";

const Input = tw.input`mt-6 first:mt-0 border-b-2 py-3 focus:outline-none text-black transition duration-300 hocus:border-primary-500`
const Container = tw.div`relative`;

const ThreeColumnContainer = styled.div`
  ${tw`flex flex-col items-center md:items-stretch md:flex-row flex-wrap md:justify-center max-w-screen-xl mx-auto py-20 md:py-24`}
`;
const Heading = tw(SectionHeading)`w-full`;

const Column = styled.div`
  ${tw`md:w-1/2 lg:w-1/3 px-6 flex`}
`;

const Card = styled.div`
  ${tw`flex flex-col mx-auto max-w-xs items-center px-6 py-10 border-2 border-dashed border-primary-500 rounded-lg mt-12`}
  .imageContainer {
    ${tw`border-2 border-primary-500 text-center rounded-full p-6 flex-shrink-0 relative`}
    img {
      ${tw`w-8 h-8`}
    }
  }

  .textContainer {
    ${tw`mt-6 text-center`}
  }

  .title {
    ${tw`mt-2 font-bold text-xl leading-none`}
  }

  .description {
    ${tw`mt-3 font-semibold text-secondary-100 text-sm leading-loose`}
  }
`;

const DecoratorBlob = styled(SvgDecoratorBlob3)`
  ${tw`pointer-events-none absolute right-0 bottom-0 w-64 opacity-25 transform translate-x-32 translate-y-48 `}
`;

const TwoColumn = tw.div`flex flex-col md:flex-row justify-between max-w-screen-xl mx-auto py-20 md:py-24`;
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

const cards = [
  {
    imageSrc: ShieldIconImage,
    title: "3D Modeller",
    description: "We create and manage ads that you need, from creation to deployment. Lorem ipsum donor sit amet consicou."
  },
  { imageSrc: SupportIconImage, title: "Texturing artist" },
  { imageSrc: CustomizeIconImage, title: "Unity Developer" },
  { imageSrc: ReliableIconImage, title: "Project Manager" }
];

class DashedBorderSixFeatures extends Component {
  state = {
    job: '',
    name: '',
    contactNo: '',
    email: '',
    showreel: ''
  }
  
  handleSubmit = (e)=> {
    e.preventDefault()
    const { job, name, contactNo, email, showreel } = this.state
    let templateParams = {
      jobname: job,
      firstname: name,
      contactNo: contactNo,
      email: email,
      showreel: showreel,
     }
     emailjs.send(
      'service_xuipixd',
      'template_klde438',
       templateParams,
      'user_LBS9CMeUvXncF6pOJHnrS'
     )
     this.resetForm()
  }

  resetForm = ()=> {
    this.setState({
      job: '',
      name: '',
      contactNo: '',
      email: '',
      showreel: ''
    })
  }

  handleChange = (param, e) => {
    this.setState({ [param]: e.target.value })
  }
  
handleApply = (e)=> {
    e.preventDefault()
    const { applyJobClick } = this.state
    this.setState({
      applyJobClick: true
    })
  }

  handleClose = (e)=> {
    e.preventDefault()
    const { applyJobClick } = this.state
    this.setState({
      applyJobClick: false
    })
  }
  
  render() {
    return (
    <Container>
      {!this.state.applyJobClick && 
      (<ThreeColumnContainer>
        <Heading>Openings at <span tw="text-primary-500">Innovative Colors</span></Heading>
        {cards.map((card, i) => (
          <Column key={i}>
            <Card>
              <span className="textContainer">
                <span className="title">{card.title || "Fully Secure"}</span>
                <p className="description">
                  {card.description || "Lorem ipsum donor amet siti ceali ut enim ad minim veniam, quis nostrud. Sic Semper Tyrannis. Neoas Calie artel."}
                </p>
              </span>
              <br></br>
              <span>
                <a>
                  <PrimaryButton as="a" onClick={this.handleApply.bind(this)}>
                    Apply
                  </PrimaryButton>
                </a>
              </span>
              
            </Card>
          </Column>
        ))}
      </ThreeColumnContainer>)}

      {this.state.applyJobClick && 
  (<TwoColumn>
        {/* <ImageColumn>
          <Image imageSrc={EmailIllustrationSrc} />
        </ImageColumn> */}
        <TextColumn textOnLeft={true}>
          <TextContent>
          <div style={{
      color:'white'
    }}>
            <Heading><>Apply for Job</></Heading>
            </div>
            <Form action='#' method='get'>

              <Input 
              type="text" 
              name="job" 
              value={this.state.job}
              onChange={this.handleChange.bind(this, 'job')}
              placeholder="Job Name"/>

              <Input 
              type="text" 
              name="name" 
              value={this.state.name}
              onChange={this.handleChange.bind(this, 'name')}
              placeholder="Full Name"/>

              <Input 
              type="number" 
              name="contactNo" 
              value={this.state.contactNo} 
              onChange={this.handleChange.bind(this, 'contactNo')} 
              placeholder="Your Contact number" />

              <Input 
              type="email" 
              name="email" 
              value={this.state.email} 
              onChange={this.handleChange.bind(this, 'email')} 
              placeholder="Your Email Address" />

              <Textarea 
              name="showreel" 
              type="text" 
              value={this.state.showreel}
              onChange={this.handleChange.bind(this, 'showreel')}
              placeholder="Showreel link" />

              <SubmitButton type="submit" as="a" onClick={this.handleSubmit.bind(this)}>Send</SubmitButton>
              <SubmitButton type="submit" as="a" onClick={this.handleClose.bind(this)}>Close</SubmitButton>
            </Form>
          </TextContent>
         
        </TextColumn>
      </TwoColumn>)}

    </Container>
  )
}
}

export default DashedBorderSixFeatures