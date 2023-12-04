import React from 'react';
 import HeroSection from '../Components/HeroSection';
import AboutSection from '../Components/AboutSection';
import ProjectsSection from '../Components/ProjectsSection';
import ContactBanner from '../Components/ContactBanner';

export default function Home() {
    return (
        <div>
        < HeroSection/>
        < AboutSection/>
        <ProjectsSection />
        <ContactBanner />
        </div>
    )
}
