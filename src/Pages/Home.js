import React from "react";
import HeroSection from '../Sections/HeroSection';
import PlanYourtrip from '../Sections/PlanYourtrip';
import BookCar from '../Sections/BookCar';
import Pickcar from '../Sections/Pickcar';
import BigProp from '../Sections/BigProps';
import ChooseUs from '../Sections/ChooseUs';
import Testmonials from '../Sections/Testmonials';
import Faq from '../Sections/Faq';




const Home =() => {
    return (
        <>
         <HeroSection></HeroSection>
         <BookCar></BookCar>
         <PlanYourtrip></PlanYourtrip>
         <Pickcar></Pickcar>
         <BigProp></BigProp>
         <ChooseUs></ChooseUs>
         <Testmonials></Testmonials>
         <Faq></Faq>
        </>
    )
}
export default Home;