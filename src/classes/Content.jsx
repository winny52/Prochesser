import React from "react";
import HeroSection from './HeroSection';
import WhyChooseProChesserAcademy from './WhyChoosePro';
import LearningSection from './LearningPackages';
import CommunityAndSupport from './Community';
import FaqsSection from './FAQSection';

const Content = () => {
  return (
    <div className="content">
      <HeroSection />
      <WhyChooseProChesserAcademy />
      <LearningSection />
      <CommunityAndSupport />
      <FaqsSection />
    </div>
  );
};

export default Content;