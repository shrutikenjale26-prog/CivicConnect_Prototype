import { 
  Brain, 
  MapPin, 
  Bell, 
  LayoutDashboard, 
  Clock, 
  Shield 
} from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const features = [
  {
    icon: Brain,
    title: "AI-Powered Detection",
    description: "Our AI automatically categorizes issues from photos and descriptions, ensuring accurate routing to the right department.",
  },
  {
    icon: Clock,
    title: "Real-Time Tracking",
    description: "Track the status of your complaints in real-time with detailed progress updates and estimated resolution times.",
  },
  {
    icon: MapPin,
    title: "Location-Based Reporting",
    description: "Pin issues on an interactive map for precise location reporting. See nearby issues reported by other citizens.",
  },
  {
    icon: Bell,
    title: "Smart Notifications",
    description: "Receive instant updates via SMS, email, or push notifications when your complaint status changes.",
  },
  {
    icon: LayoutDashboard,
    title: "Citizen Dashboard",
    description: "Access a personalized dashboard to view all your reports, track progress, and see community statistics.",
  },
  {
    icon: Shield,
    title: "Verified Resolution",
    description: "Every resolved issue is verified with photo evidence and citizen confirmation for complete transparency.",
  },
]

export function FeaturesSection() {
  return (
    <section id="features" className="py-20 lg:py-32 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-sm font-medium text-primary uppercase tracking-wider">Features</span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-foreground text-balance">
            Everything You Need for Smart Civic Engagement
          </h2>
          <p className="mt-4 text-lg text-muted-foreground text-pretty">
            Our platform combines cutting-edge AI technology with intuitive design to make reporting and tracking civic issues effortless.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature) => (
            <Card 
              key={feature.title} 
              className="group hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 hover:-translate-y-1"
            >
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-foreground">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
