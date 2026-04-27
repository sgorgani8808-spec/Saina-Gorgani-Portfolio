import React from "react";
import Navbar from "../components/portfolio/Navbar";
import HeroSection from "../components/portfolio/HeroSection";
import AboutSection from "../components/portfolio/AboutSection";
import ProjectsSection from "../components/portfolio/ProjectsSection";
import TechStackSection from "../components/portfolio/TechStackSection";
import TestimonialsSection from "../components/portfolio/TestimonialsSection";
import FAQSection from "../components/portfolio/FAQSection";
import ContactForm from "../components/portfolio/ContactForm";
import NewsletterSignup from "../components/portfolio/NewsletterSignup";
import Footer from "../components/portfolio/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <TechStackSection />
      <TestimonialsSection />
      <FAQSection />
      <ContactForm />
      <NewsletterSignup />
      <Footer />
    </div>
  );
}