import Header from "@/components/header"
import HeroSection from "@/components/hero-section"
import AboutSection from "@/components/about-section"
import ServicesSection from "@/components/services-section"
import ContactSection from "@/components/contact-section"
import Footer from "@/components/footer"
import SectionDivider from "@/components/section-divider"

export default function LandingPage() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <SectionDivider />
        <AboutSection />
        <ServicesSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  )
}
