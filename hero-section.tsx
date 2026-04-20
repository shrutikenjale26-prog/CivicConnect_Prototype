"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Zap, Shield, Bell } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/10 via-background to-background" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-sm font-medium text-primary mb-6">
            <Zap className="w-4 h-4" />
            <span>AI-Powered Civic Engagement Platform</span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground tracking-tight text-balance">
            Smart Civic Problem Reporting with{" "}
            <span className="text-primary">AI</span>
          </h1>
          
          <p className="mt-6 text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            Report local issues like potholes, garbage, water leakage, and street light problems. Get AI-powered assistance and real-time updates on your complaints.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" className="w-full sm:w-auto gap-2 group">
              Report an Issue
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </Button>
            <Button variant="outline" size="lg" className="w-full sm:w-auto">
              Track Complaint
            </Button>
          </div>

          <div className="mt-16 grid grid-cols-3 gap-8 max-w-lg mx-auto">
            {[
              { icon: Zap, label: "AI Detection", value: "98%" },
              { icon: Shield, label: "Resolved", value: "15K+" },
              { icon: Bell, label: "Response Time", value: "24h" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="w-12 h-12 mx-auto bg-secondary rounded-xl flex items-center justify-center mb-3">
                  <stat.icon className="w-5 h-5 text-primary" />
                </div>
                <p className="text-2xl font-bold text-foreground">{stat.value}</p>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-20 relative">
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent z-10 pointer-events-none" />
          <div className="bg-card rounded-2xl border border-border shadow-2xl shadow-primary/5 overflow-hidden">
            <div className="p-1 bg-secondary/50">
              <div className="flex items-center gap-2 px-3">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-destructive/60" />
                  <div className="w-3 h-3 rounded-full bg-chart-3/60" />
                  <div className="w-3 h-3 rounded-full bg-accent/60" />
                </div>
                <div className="flex-1 text-center">
                  <span className="text-xs text-muted-foreground">civicconnect.ai/dashboard</span>
                </div>
              </div>
            </div>
            <div className="p-6 sm:p-8 bg-gradient-to-br from-secondary/30 to-secondary/10">
              <div className="grid sm:grid-cols-3 gap-4">
                {[
                  { title: "Pothole Repair", status: "In Progress", location: "Main St & 5th Ave", color: "bg-chart-3" },
                  { title: "Street Light Out", status: "Resolved", location: "Oak Park Drive", color: "bg-accent" },
                  { title: "Water Leakage", status: "Pending", location: "Downtown Plaza", color: "bg-primary" },
                ].map((issue) => (
                  <div key={issue.title} className="bg-card rounded-xl p-4 border border-border">
                    <div className="flex items-start justify-between mb-3">
                      <span className={`px-2 py-1 text-xs font-medium rounded-full ${issue.color} text-primary-foreground`}>
                        {issue.status}
                      </span>
                    </div>
                    <h3 className="font-semibold text-foreground mb-1">{issue.title}</h3>
                    <p className="text-sm text-muted-foreground">{issue.location}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
