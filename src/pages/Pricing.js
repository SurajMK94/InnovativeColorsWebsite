import React from "react";
import AnimationRevealPage from "InnovativeColors/helpers/AnimationRevealPage.js";
import Header from "InnovativeColors/headers/Header.js";
import Pricing from "components/pricing/TwoPlansWithDurationSwitcher.js";
import Testimonial from "InnovativeColors/helpers/OurTeam.js";
import Footer from "InnovativeColors/footers/FiveColumnWithInputForm.js";
import FAQ from "components/faqs/SingleCol.js";

export default () => {
  return (
    <AnimationRevealPage>
      <Header />
      <Pricing />
      <Testimonial
        heading="Our Paying Customers"
      />
      <FAQ />
      <Footer/>
    </AnimationRevealPage>
  );
};
