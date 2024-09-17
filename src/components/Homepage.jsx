import React from "react";
import HeroSection from "./HeroSection";
import HowItWorks from "./Howitworks";
import GameLobbySection from "./GameLobbySection";
import WhyChooseProChesser from "./WhyChooseProChesser";
import FAQ from "./miniFAQ";
import Testimonials from "./Testimonials";
import WhoAreWe from "./WhoAreWe";
import Guide from "./Guide";

const Homepage =()=> {
    return (
        
        <div w-full mx-auto >
            <HeroSection/> 

        <HowItWorks/>
        <GameLobbySection/>
        <WhyChooseProChesser/>
        <WhoAreWe/>
        <FAQ/>
        <Testimonials/>
        <Guide/>
        </div>
    )
}
export default Homepage;