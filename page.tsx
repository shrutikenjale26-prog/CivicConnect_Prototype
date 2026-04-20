import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { FeaturesSection } from "@/components/features-section"
import { ReportIssueSection } from "@/components/report-issue-section"
import { DashboardSection } from "@/components/dashboard-section"
import { ChatAssistant } from "@/components/chat-assistant"
import { AboutSection } from "@/components/about-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <ReportIssueSection />
      <DashboardSection />
      <ChatAssistant />
      <AboutSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
