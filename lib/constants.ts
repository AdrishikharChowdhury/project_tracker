import {
  Code2,
  GitBranch,
  Shield,
  Sparkles,
  Target,
  Users,
} from "lucide-react";

export const navlinks = [
  {
    name: "Home",
    link: "/",
    id: "home",
  },
  {
    name: "About Us",
    link: "/about-us",
    id: "about-us",
  },
  {
    name: "Reviews",
    link: "/reviews",
    id: "reviews",
  },
  {
    name: "Contact Us",
    link: "/contact-us",
    id: "contact-us",
  },
];

export const highlights = [
  {
    icon: GitBranch,
    title: "Git Integration",
    description:
      "Seamlessly connects with your repositories to track commits, branches, and contribution patterns in real time.",
  },
  {
    icon: Target,
    title: "Milestone Mapping",
    description:
      "Map commits to milestones and releases automatically, giving you a clear picture of progress toward each goal.",
  },
  {
    icon: Users,
    title: "Team Collaboration",
    description:
      "See who contributed what, when, and how. Identify collaboration patterns and balance workload across your team.",
  },
  {
    icon: Shield,
    title: "Code Quality Insights",
    description:
      "Track test coverage, lint error trends, and deployment frequency alongside your git history for a complete quality picture.",
  },
  {
    icon: Sparkles,
    title: "AI Summaries",
    description:
      "Daily and weekly AI-generated summaries of what your team built, what got merged, and what needs attention.",
  },
  {
    icon: Code2,
    title: "Developer-First UX",
    description:
      "Built by developers, for developers. No bloat, no noise — just the metrics that actually matter to your workflow.",
  },
];

export interface Review {
  id: number
  name: string
  avatar: string
  rating: number
  title: string
  description: string
}

function avatar(name: string) {
  return `https://api.dicebear.com/10.x/stripes/svg?seed=${encodeURIComponent(name)}`
}

export const reviews: Review[] = [
  {
    id: 1,
    name: "Alex Rivera",
    avatar: avatar("Alex Rivera"),
    rating: 5,
    title: "Transformed our workflow",
    description:
      "Loony Wolfie has completely changed how we track progress. The git integration is seamless and the AI summaries are surprisingly insightful.",
  },
  {
    id: 2,
    name: "Jordan Chen",
    avatar: avatar("Jordan Chen"),
    rating: 4,
    title: "Great tool for dev teams",
    description:
      "Really clean interface and the milestone mapping feature helps us stay on top of releases. Would love to see more customization options.",
  },
  {
    id: 3,
    name: "Sam Patel",
    avatar: avatar("Sam Patel"),
    rating: 5,
    title: "Exactly what we needed",
    description:
      "We tried several project tracking tools but none of them understood developer workflows. The code quality insights are a game changer.",
  },
  {
    id: 4,
    name: "Taylor Kim",
    avatar: avatar("Taylor Kim"),
    rating: 5,
    title: "Incredible insights",
    description:
      "The AI summaries alone are worth it. We catch regressions faster and our standups have never been more focused. Highly recommend.",
  },
  {
    id: 5,
    name: "Morgan Hayes",
    avatar: avatar("Morgan Hayes"),
    rating: 3,
    title: "Solid but needs polish",
    description:
      "Great concept and the milestone mapping is brilliant. A few rough edges in the UI, but the team is clearly iterating fast.",
  },
  {
    id: 6,
    name: "Priya Sharma",
    avatar: avatar("Priya Sharma"),
    rating: 5,
    title: "Game changer for remote teams",
    description:
      "Our distributed team finally has full visibility into who's working on what. The commit-to-milestone tracing is a lifesaver.",
  },
  {
    id: 7,
    name: "Chris Nguyen",
    avatar: avatar("Chris Nguyen"),
    rating: 4,
    title: "Almost perfect",
    description:
      "Clean, fast, and developer-first. I'd love deeper IDE integrations, but the core functionality is already best-in-class.",
  },
  {
    id: 8,
    name: "Riley O'Brien",
    avatar: avatar("Riley O'Brien"),
    rating: 5,
    title: "Finally, a tracker that gets it",
    description:
      "Built by devs for devs — it shows in every decision. No bloat, meaningful metrics, and the team health dashboard is eye-opening.",
  },
  {
    id: 9,
    name: "Jamie Foster",
    avatar: avatar("Jamie Foster"),
    rating: 4,
    title: "Great for agile teams",
    description:
      "Sprint planning has become so much easier with the milestone mapping. We can actually see our velocity trend in real time.",
  },
  {
    id: 10,
    name: "Dana White",
    avatar: avatar("Dana White"),
    rating: 5,
    title: "Replaced three tools",
    description:
      "We were juggling Jira, a git dashboard, and a separate analytics tool. Loony Wolfie does all three better than any of them.",
  },
  {
    id: 11,
    name: "Marcus Bell",
    avatar: avatar("Marcus Bell"),
    rating: 4,
    title: "Excellent start",
    description:
      "The team collaboration insights are fantastic. I can finally see contribution patterns across the entire org at a glance.",
  },
  {
    id: 12,
    name: "Aisha Kapoor",
    avatar: avatar("Aisha Kapoor"),
    rating: 5,
    title: "The AI summaries are magic",
    description:
      "Our CTO reads the weekly AI summary instead of digging through Slack. It captures everything that matters and nothing that doesn't.",
  },
  {
    id: 13,
    name: "Leo Torres",
    avatar: avatar("Leo Torres"),
    rating: 3,
    title: "Promising but limited",
    description:
      "The core features are solid but I need more integration options. Once the API is public this will be a no-brainer for any dev shop.",
  },
  {
    id: 14,
    name: "Nina Johansson",
    avatar: avatar("Nina Johansson"),
    rating: 5,
    title: "Built for how we actually work",
    description:
      "Finally a tool that doesn't force us into a rigid workflow. It adapts to our git habits instead of the other way around.",
  },
  {
    id: 15,
    name: "Omar Hassan",
    avatar: avatar("Omar Hassan"),
    rating: 4,
    title: "Code quality insights are gold",
    description:
      "The lint trend tracking helped us reduce our warning count by 80% in two months. That alone pays for the tool.",
  },
  {
    id: 16,
    name: "Elena Petrov",
    avatar: avatar("Elena Petrov"),
    rating: 5,
    title: "Indispensable for open source",
    description:
      "Managing 40+ contributors was chaos before this. Now I can see exactly who contributes what across all our repos.",
  },
  {
    id: 17,
    name: "David Park",
    avatar: avatar("David Park"),
    rating: 4,
    title: "Sleek and fast",
    description:
      "The UI is beautiful and snappy. No bloat, no lag. The deployment frequency tracker is my favorite feature so far.",
  },
  {
    id: 18,
    name: "Sophie Martin",
    avatar: avatar("Sophie Martin"),
    rating: 5,
    title: "Our team loves it",
    description:
      "We introduced it as a trial and within a week the whole team was hooked. The commit-to-milestone visibility is unmatched.",
  },
  {
    id: 19,
    name: "Isaac Nakamura",
    avatar: avatar("Isaac Nakamura"),
    rating: 4,
    title: "Great potential",
    description:
      "Already very useful and the team is clearly iterating fast. The nightly builds integration would make this a ten out of ten.",
  },
  {
    id: 20,
    name: "Valentina Rossi",
    avatar: avatar("Valentina Rossi"),
    rating: 5,
    title: "Exactly what devs need",
    description:
      "No fluff, no marketing buzzwords — just real metrics that help us ship better code faster. The AI summaries save hours every week.",
  },
]

export const aboutUsCard = [
  {
    title: "Built for Teams",
    description:
      "Whether you're a solo indie developer, a growing startup, or a large engineering organization, Loony Wolfie scales with you. Our lightweight architecture means minimal overhead, while our powerful analytics engine handles millions of commits without breaking a sweat.",
  },
  {
    title: "Open Source DNA",
    description:
      "We eat our own dog food — Loony Wolfie itself is built in the open. Our commit history is transparent, our roadmap is public, and we welcome contributions from the community. Because we believe the best tools emerge when builders collaborate openly.",
  },
];
