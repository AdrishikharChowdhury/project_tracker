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
    name: "Services",
    link: "/services",
    id: "services",
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
