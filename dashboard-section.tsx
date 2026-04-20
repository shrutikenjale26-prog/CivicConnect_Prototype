"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { 
  Clock, 
  CheckCircle2, 
  AlertCircle, 
  MapPin, 
  Calendar,
  ChevronRight,
  LayoutGrid,
  List
} from "lucide-react"

type IssueStatus = "pending" | "in-progress" | "resolved"

interface Issue {
  id: string
  title: string
  location: string
  date: string
  status: IssueStatus
  timeline: { date: string; event: string }[]
}

const mockIssues: Issue[] = [
  {
    id: "CIV-001",
    title: "Large Pothole on Main Street",
    location: "Main St & 5th Avenue",
    date: "2024-01-15",
    status: "in-progress",
    timeline: [
      { date: "Jan 15", event: "Issue reported" },
      { date: "Jan 16", event: "Assigned to Road Dept." },
      { date: "Jan 17", event: "Repair scheduled" },
    ],
  },
  {
    id: "CIV-002",
    title: "Street Light Malfunction",
    location: "Oak Park Drive",
    date: "2024-01-14",
    status: "resolved",
    timeline: [
      { date: "Jan 14", event: "Issue reported" },
      { date: "Jan 14", event: "Technician dispatched" },
      { date: "Jan 15", event: "Bulb replaced" },
      { date: "Jan 15", event: "Issue resolved" },
    ],
  },
  {
    id: "CIV-003",
    title: "Water Pipe Leakage",
    location: "Downtown Plaza",
    date: "2024-01-16",
    status: "pending",
    timeline: [
      { date: "Jan 16", event: "Issue reported" },
    ],
  },
  {
    id: "CIV-004",
    title: "Overflowing Garbage Bin",
    location: "Central Market Area",
    date: "2024-01-13",
    status: "resolved",
    timeline: [
      { date: "Jan 13", event: "Issue reported" },
      { date: "Jan 13", event: "Sanitation team notified" },
      { date: "Jan 14", event: "Bin cleared" },
    ],
  },
  {
    id: "CIV-005",
    title: "Damaged Road Sign",
    location: "Highway 42 Junction",
    date: "2024-01-12",
    status: "in-progress",
    timeline: [
      { date: "Jan 12", event: "Issue reported" },
      { date: "Jan 14", event: "Assessment completed" },
      { date: "Jan 16", event: "Replacement ordered" },
    ],
  },
]

const statusConfig: Record<IssueStatus, { label: string; color: string; icon: React.ElementType }> = {
  pending: { label: "Pending", color: "bg-primary text-primary-foreground", icon: Clock },
  "in-progress": { label: "In Progress", color: "bg-chart-3 text-primary-foreground", icon: AlertCircle },
  resolved: { label: "Resolved", color: "bg-accent text-accent-foreground", icon: CheckCircle2 },
}

function IssueCard({ issue }: { issue: Issue }) {
  const config = statusConfig[issue.status]
  const StatusIcon = config.icon

  return (
    <Card className="hover:shadow-lg transition-shadow">
      <CardContent className="p-6">
        <div className="flex items-start justify-between gap-4">
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 mb-2">
              <Badge className={config.color}>
                <StatusIcon className="w-3 h-3 mr-1" />
                {config.label}
              </Badge>
              <span className="text-xs text-muted-foreground">{issue.id}</span>
            </div>
            <h3 className="font-semibold text-foreground truncate">{issue.title}</h3>
            <div className="mt-2 flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
              <span className="flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5" />
                {issue.location}
              </span>
              <span className="flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5" />
                {issue.date}
              </span>
            </div>
          </div>
          <Button variant="ghost" size="icon" className="shrink-0">
            <ChevronRight className="w-4 h-4" />
          </Button>
        </div>

        <div className="mt-4 pt-4 border-t border-border">
          <p className="text-xs font-medium text-muted-foreground mb-3">Timeline</p>
          <div className="space-y-2">
            {issue.timeline.slice(-3).map((event, index) => (
              <div key={index} className="flex items-center gap-3 text-sm">
                <div className={`w-2 h-2 rounded-full ${index === issue.timeline.length - 1 ? 'bg-primary' : 'bg-muted-foreground/30'}`} />
                <span className="text-muted-foreground w-12 shrink-0">{event.date}</span>
                <span className="text-foreground">{event.event}</span>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

export function DashboardSection() {
  const [view, setView] = useState<"grid" | "list">("grid")
  const [filter, setFilter] = useState<"all" | IssueStatus>("all")

  const filteredIssues = filter === "all" 
    ? mockIssues 
    : mockIssues.filter((issue) => issue.status === filter)

  const stats = {
    total: mockIssues.length,
    pending: mockIssues.filter((i) => i.status === "pending").length,
    inProgress: mockIssues.filter((i) => i.status === "in-progress").length,
    resolved: mockIssues.filter((i) => i.status === "resolved").length,
  }

  return (
    <section id="dashboard" className="py-20 lg:py-32 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-sm font-medium text-primary uppercase tracking-wider">Dashboard</span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-foreground text-balance">
            Track Your Reported Issues
          </h2>
          <p className="mt-4 text-lg text-muted-foreground text-pretty">
            Monitor the status of all your civic complaints in one place. Get real-time updates and see the progress.
          </p>
        </div>

        <div className="grid sm:grid-cols-4 gap-4 mb-8">
          {[
            { label: "Total Reports", value: stats.total, color: "bg-primary/10 text-primary" },
            { label: "Pending", value: stats.pending, color: "bg-primary/10 text-primary" },
            { label: "In Progress", value: stats.inProgress, color: "bg-chart-3/10 text-chart-3" },
            { label: "Resolved", value: stats.resolved, color: "bg-accent/10 text-accent" },
          ].map((stat) => (
            <Card key={stat.label}>
              <CardContent className="p-4">
                <p className="text-sm text-muted-foreground">{stat.label}</p>
                <p className={`text-3xl font-bold mt-1 ${stat.color.split(" ")[1]}`}>{stat.value}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card>
          <CardHeader>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <CardTitle>Your Reports</CardTitle>
                <CardDescription>View and track all your submitted issues</CardDescription>
              </div>
              <div className="flex items-center gap-2">
                <div className="flex items-center border border-border rounded-lg p-1">
                  <Button
                    variant={view === "grid" ? "secondary" : "ghost"}
                    size="sm"
                    onClick={() => setView("grid")}
                  >
                    <LayoutGrid className="w-4 h-4" />
                  </Button>
                  <Button
                    variant={view === "list" ? "secondary" : "ghost"}
                    size="sm"
                    onClick={() => setView("list")}
                  >
                    <List className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <Tabs value={filter} onValueChange={(v) => setFilter(v as typeof filter)} className="w-full">
              <TabsList className="mb-6">
                <TabsTrigger value="all">All ({stats.total})</TabsTrigger>
                <TabsTrigger value="pending">Pending ({stats.pending})</TabsTrigger>
                <TabsTrigger value="in-progress">In Progress ({stats.inProgress})</TabsTrigger>
                <TabsTrigger value="resolved">Resolved ({stats.resolved})</TabsTrigger>
              </TabsList>

              <TabsContent value={filter} className="mt-0">
                <div className={view === "grid" ? "grid sm:grid-cols-2 lg:grid-cols-3 gap-4" : "space-y-4"}>
                  {filteredIssues.map((issue) => (
                    <IssueCard key={issue.id} issue={issue} />
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
