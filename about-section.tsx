import { Building2, Users, Globe, Award } from "lucide-react"

const stats = [
  { icon: Building2, value: "50+", label: "Cities Served" },
  { icon: Users, value: "100K+", label: "Active Citizens" },
  { icon: Globe, value: "500K+", label: "Issues Resolved" },
  { icon: Award, value: "98%", label: "Satisfaction Rate" },
]

export function AboutSection() {
  return (
    <section id="about" className="py-20 lg:py-32 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-sm font-medium text-primary uppercase tracking-wider">About Us</span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-foreground text-balance">
              Building Smarter Cities Through Citizen Engagement
            </h2>
            <p className="mt-6 text-lg text-muted-foreground text-pretty">
              CivicConnect AI was founded with a simple mission: to bridge the gap between citizens and their local governments. We believe that every voice matters and every civic issue deserves attention.
            </p>
            <p className="mt-4 text-muted-foreground text-pretty">
              Our AI-powered platform streamlines the process of reporting and tracking civic issues, making it easier for citizens to participate in improving their communities. By combining cutting-edge technology with a user-friendly interface, we empower both citizens and government agencies to work together more effectively.
            </p>
            <p className="mt-4 text-muted-foreground text-pretty">
              From potholes to water leakages, street lights to garbage collection, we ensure that no issue goes unnoticed. Our real-time tracking system keeps you informed every step of the way, creating transparency and accountability in civic services.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="bg-card rounded-2xl p-6 border border-border hover:shadow-lg hover:shadow-primary/5 transition-shadow"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                  <stat.icon className="w-6 h-6 text-primary" />
                </div>
                <p className="text-3xl font-bold text-foreground">{stat.value}</p>
                <p className="text-sm text-muted-foreground mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-20 bg-card rounded-2xl p-8 sm:p-12 border border-border">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-2xl sm:text-3xl font-bold text-foreground text-balance">
              Our Vision for Smart Cities
            </h3>
            <p className="mt-4 text-muted-foreground text-pretty">
              We envision a future where technology empowers every citizen to actively participate in shaping their communities. Where civic issues are resolved swiftly, transparently, and efficiently. Where the gap between citizens and their governments is bridged by intelligent systems that understand and respond to community needs.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              {["Transparency", "Efficiency", "Accessibility", "Innovation"].map((value) => (
                <span
                  key={value}
                  className="px-4 py-2 bg-secondary rounded-full text-sm font-medium text-secondary-foreground"
                >
                  {value}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
