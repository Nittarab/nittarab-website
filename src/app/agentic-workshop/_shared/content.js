export const calendarUrl = "https://calendar.app.google/8HnmappTvKTP2txz5";
export const askMailto =
  "mailto:patrick@weftlabs.com?subject=Question%20about%20Agentic%20Workshop&body=Hi%20Patrick%2C%0A%0AI%20have%20a%20question%20about%20the%20Agentic%20Workshop%3A%0A%0A";
export const email = "patrick@weftlabs.com";

export const tooling = ["Cursor", "Claude", "Copilot", "Claude Code"];

export const stackLine =
  "Founder, Weft Labs · ex-CTO · Conversational AI at On · builds agent systems daily";

export const identity = {
  name: "Patrick Barattin",
  city: "Zürich",
  tagline: "Founder, Weft Labs · ex-CTO · Conversational AI at On",
  weftUrl: "https://weftlabs.com",
  languages: "EN / IT / ES",
};

export const pricing = {
  lite: "From CHF 2’500",
  liteTime: "~2h",
  halfDay: "CHF 4’500–5’500",
  halfDayTime: "~3–3.5h",
  consulting: "Scoped separately",
};

export const artefacts = [
  {
    title: "Live session on your backlog",
    detail:
      "Under NDA: one real issue → plan → tested change on your stack, not a toy demo.",
  },
  {
    title: "Team playbook",
    detail:
      "How your team runs agent-owned work: roles, handoffs, and when a human must decide.",
  },
  {
    title: "Review checklist",
    detail:
      "What “good” looks like for agent-assisted PRs, so review stays consistent.",
  },
  {
    title: "Repo instruction starter",
    detail:
      "A first cut of project instructions / agent context for your repos (you keep and edit it).",
  },
  {
    title: "30-day pilot backlog",
    detail:
      "A short, ranked list of workflows to try next, with owners and success criteria.",
  },
];

export const waysToWork = [
  {
    name: "Workshop Lite",
    price: "From CHF 2’500",
    time: "~2h",
    fits: "Smaller groups, a first look, or when you need the method without a full half-day.",
  },
  {
    name: "Half-day",
    price: "CHF 4’500–5’500",
    time: "~3–3.5h",
    fits: "The main offer: live backlog work under NDA plus full artefacts and pilot plan.",
    featured: true,
  },
  {
    name: "Consulting hours after",
    price: "Scoped separately",
    time: "Time-boxed",
    fits: "A fixed block to refine the playbook and unblock the 30-day pilot, then done.",
  },
];

export const beforeSession = [
  {
    title: "NDA",
    detail:
      "We sign first so we can work on a real backlog item, not a toy repo.",
  },
  {
    title: "One real backlog issue",
    detail:
      "Pick a concrete ticket your team actually cares about. That’s the live workflow.",
  },
  {
    title: "Tools",
    detail:
      "Bring Cursor, Claude, Copilot, or whatever you already use. Tool-agnostic by design.",
  },
  {
    title: "Who attends",
    detail:
      "Best at about 6–12: leads and ICs who will own the pilot, not a spectator room.",
  },
];

export const forWhom = [
  "Engineering leads and senior ICs who want a shared method, not another tool trial",
  "Teams of roughly 6–12 who can join one half-day remote (or on-site in Switzerland)",
  "Shops already using Cursor, Claude, Copilot, or similar (tool-agnostic by design)",
];

export const notFor = [
  "Teams looking for a vendor pitch or a product to buy",
  "One-off “AI magic” demos with no artefacts to keep",
  "Groups larger than ~12 in a single session (we’ll split or scope Workshop Lite)",
];

export const experience = [
  {
    title: "Founder, Weft Labs",
    detail:
      "Zürich, 2023–present. Product and engineering for a platform that lets AI agents reach external data, software, and services through one integration.",
  },
  {
    title: "Conversational AI at On",
    detail:
      "From Aug 2025 on the Conversational AI team: agent architecture, monitoring, and live evaluation for an internal ecommerce platform.",
  },
  {
    title: "ex-CTO, Pix Group",
    detail:
      "Led 5 engineers and product experts while digitizing personalized apparel; scaled ops and platforms end to end.",
  },
];

export const faqs = [
  {
    q: "What does it cost?",
    a: "Workshop Lite (≈2h) from CHF 2’500. A full half-day is typically CHF 4’500–5’500 depending on team size, remote vs on-site, and prep. A fixed consulting block after the workshop is scoped separately. You’ll get a written scope before anything is booked.",
  },
  {
    q: "How many people?",
    a: "Best at about 6–12. Larger groups work as Workshop Lite or split sessions. We’ll decide on the discovery call.",
  },
  {
    q: "Which tools (Cursor, Claude, Copilot…)?",
    a: "Tool-agnostic. We work with what you already use. The method (issue → plan → tested change, review bar, repo instructions) transfers across IDEs and agents.",
  },
  {
    q: "NDA?",
    a: "Yes. We work under NDA so we can use a real backlog item on your stack.",
  },
  {
    q: "Remote or on-site?",
    a: "Remote by default. On-site across Switzerland when that helps the team move faster.",
  },
  {
    q: "Languages?",
    a: "English, Italian, or Spanish. Pick what works for the room.",
  },
  {
    q: "What does “after” support mean?",
    a: "A fixed consulting block for the 30-day pilot: refine the playbook, unblock early PRs, then done. Time-boxed and scoped up front.",
  },
  {
    q: "How fast do you reply?",
    a: "I aim to reply within one business day. Book discovery on the calendar for the fastest path.",
  },
  {
    q: "Can’t we just install OpenHands, Orca, or Cline ourselves?",
    a: "Yes, and many teams should. The workshop is not another agent IDE. You leave with a shared method, review bar, repo instructions, and a 30-day pilot on your backlog. Tools are inputs; the leave-behind is what makes agent work stick.",
  },
  {
    q: "What is a software factory in this context?",
    a: "A repeatable loop: backlog intake → agent session → human review → PR leave-behind, with repo instructions so the next run is not ad hoc. The half-day installs that method. OSS repos below are optional starting points after you have the method.",
  },
];

/** Image paths used by the page (local files under /public). */
export const workshopImages = {
  liveSession: "/agentic-workshop/official-copilot-agents-ui.jpg",
  repoInstructions: "/agentic-workshop/official-claude-code.png",
  howWeWork: "/agentic-workshop/schema-halfday.jpg",
  methodLoop: "/agentic-workshop/method-loop.jpg",
  reviewChecklist: "/agentic-workshop/mock-review-checklist.jpg",
  pilotBoard: "/agentic-workshop/mock-pilot-board.jpg",
  founderPhoto: "/nittarab_profile.webp",
};

/** Map artefact titles to workshop image paths */
export const artefactImageByTitle = {
  "Live session on your backlog": workshopImages.liveSession,
  "Team playbook": workshopImages.methodLoop,
  "Review checklist": workshopImages.reviewChecklist,
  "Repo instruction starter": workshopImages.repoInstructions,
  "30-day pilot backlog": workshopImages.pilotBoard,
};

/** Open-source stacks to evaluate when building a coding factory around your repos.
 * Stars / activity are approximate snapshots (Oct 2026), not live API values.
 */
export const factoryNeeds = [
  {
    id: "backlog-intake",
    label: "Backlog intake",
    detail: "Issues or tickets land in a queue the agent can pick up.",
  },
  {
    id: "agent-session",
    label: "Agent session loop",
    detail: "Plan → edit → test in one owned run, not chat-only.",
  },
  {
    id: "human-review",
    label: "Human review gates",
    detail: "A clear bar before merge (PR review, checklist, or approval).",
  },
  {
    id: "repo-instructions",
    label: "Repo instructions",
    detail:
      "Project context the agent reads every time (AGENTS.md, rules, etc.).",
  },
  {
    id: "sandbox",
    label: "Sandbox / isolation",
    detail:
      "Worktrees, containers, or remote runtimes so agents do not trash the main tree.",
  },
  {
    id: "pr-loop",
    label: "PR / git loop",
    detail:
      "Commits and pull requests as the leave-behind, not a paste into chat.",
  },
  {
    id: "multi-agent",
    label: "Multi-agent / fleet",
    detail: "Parallel agents or roles (implement, review, on-call style).",
  },
  {
    id: "self-hosted",
    label: "Self-hosted option",
    detail: "You can run it on your machine or infra, not only a vendor cloud.",
  },
];

export const factoryRepos = [
  {
    id: "openhands",
    name: "OpenHands",
    blurb:
      "Self-hosted control center: sandbox runs, automations, issue-to-PR workflows. Strong when you want a factory host, not only an IDE.",
    url: "https://github.com/OpenHands/OpenHands",
    license: "MIT",
    stars: "90k+",
    activity: "Active",
    caps: [
      "backlog-intake",
      "agent-session",
      "sandbox",
      "pr-loop",
      "multi-agent",
      "self-hosted",
    ],
  },
  {
    id: "orca",
    name: "Orca",
    blurb:
      "ADE for parallel agents: worktrees, Claude Code / Codex / OpenCode side by side, GitHub and Linear in-app. Closest to a multi-agent factory desk.",
    url: "https://github.com/stablyai/orca",
    license: "MIT",
    stars: "87k+",
    activity: "Active",
    caps: [
      "agent-session",
      "human-review",
      "sandbox",
      "pr-loop",
      "multi-agent",
      "self-hosted",
    ],
  },
  {
    id: "cline",
    name: "Cline",
    blurb:
      "Coding agent as VS Code extension, CLI, or SDK. Best as a supervised cell inside a factory, not the whole factory.",
    url: "https://github.com/cline/cline",
    license: "Apache-2.0",
    stars: "70k+",
    activity: "Active",
    caps: [
      "agent-session",
      "human-review",
      "repo-instructions",
      "pr-loop",
      "self-hosted",
    ],
  },
  {
    id: "aider",
    name: "Aider",
    blurb:
      "Terminal pair programmer with git-native commits and repo mapping. Fast supervised cell; you still own the review bar.",
    url: "https://github.com/Aider-AI/aider",
    license: "Apache-2.0",
    stars: "49k+",
    activity: "Active",
    caps: [
      "agent-session",
      "human-review",
      "repo-instructions",
      "pr-loop",
      "self-hosted",
    ],
  },
  {
    id: "swe-agent",
    name: "SWE-agent",
    blurb:
      "Issue-to-fix harness with a constrained agent computer. Useful backlog intake pattern; method and review still yours.",
    url: "https://github.com/SWE-agent/SWE-agent",
    license: "MIT",
    stars: "20k+",
    activity: "Active",
    caps: [
      "backlog-intake",
      "agent-session",
      "sandbox",
      "pr-loop",
      "self-hosted",
    ],
  },
  {
    id: "mastra-factory",
    name: "Mastra Software Factory",
    blurb:
      "Template for an agent-powered delivery board: GitHub / Linear intake to coding agents to PRs you host. Closest literal “software factory” starter.",
    url: "https://github.com/mastra-ai/softwarefactory-template",
    license: "No SPDX yet",
    stars: "50+",
    activity: "Active",
    caps: [
      "backlog-intake",
      "agent-session",
      "human-review",
      "sandbox",
      "pr-loop",
      "self-hosted",
    ],
  },
];
