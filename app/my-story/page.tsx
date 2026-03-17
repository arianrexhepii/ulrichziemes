"use client";


import QuoteSection from "./components/QuoteSection";
import Timeline from "./components/Timeline";
import HeroSection from "./components/HeroSection";
import { Footer } from "@/components/footer";

const LifePage = () => {

    return (
        <div className="min-h-screen bg-background">
            <HeroSection />
            <QuoteSection />
            <Timeline />
            <Footer /> 
        </div>
    )
}
export default LifePage;