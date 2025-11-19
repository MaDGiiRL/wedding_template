
import HeroSection from "../components/Home/HeroSection";
import CategoriesGrid from "../components/Home/CategoriesGrid";
import HighlightVendors from "../components/Home/HighlightVendors";
import HowItWorks from "../components/Home/HowItWorks";
import CallToActionSection from "../components/Home/CallToActionSection";


export default function Home() {
    return (
        <>
            <HeroSection />
            <CategoriesGrid />
            <HighlightVendors />
            <HowItWorks />
            <CallToActionSection />
        </>
    );
}
