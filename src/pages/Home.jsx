import React from "react";
import Nav from "@/components/greekme/Nav";
import Hero from "@/components/greekme/Hero";
import Opportunity from "@/components/greekme/Opportunity";
import Story from "@/components/greekme/Story";
import NotJustAMenu from "@/components/greekme/NotJustAMenu";
import MenuShowcase from "@/components/greekme/MenuShowcase";
import PartnerSystem from "@/components/greekme/PartnerSystem";
import RoyaltyModel from "@/components/greekme/RoyaltyModel";
import YourKitchen from "@/components/greekme/YourKitchen";
import HowItWorks from "@/components/greekme/HowItWorks";
import food-verseCredibility from "@/components/greekme/food-verseCredibility";
import OrderShowcase from "@/components/greekme/OrderShowcase";
import DeliveryChannels from "@/components/greekme/DeliveryChannels";
import Faq from "@/components/greekme/Faq";
import FinalCta from "@/components/greekme/FinalCta";
import MarqueeStrip from "@/components/greekme/marqueeStrip";
import Footer from "@/components/greekme/Footer";
import SideTabs from "@/components/greekme/SideTabs";

export default function Home() {
  return (
    <div className="bg-black scroll-smooth pb-16 lg:pb-0">
      <Nav />
      <SideTabs />
      <main>
        <Hero />
        <MarqueeStrip />
        <Opportunity />
        <Story />
        <NotJustAMenu />
        <MenuShowcase />
        <PartnerSystem />
        <RoyaltyModel />
        <YourKitchen />
        <HowItWorks />
        <food-verseCredibility />
        <OrderShowcase />
        <DeliveryChannels />
        <Faq />
        <FinalCta />
        <MarqueeStrip />
      </main>
      <Footer />
    </div>
  );
}
