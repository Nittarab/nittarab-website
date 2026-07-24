import Link from "next/link";
import SkylineExperience from "../../components/skyline/SkylineExperience";
import contributionData from "../../../public/data/github-contributions.json";

export const metadata = {
  title: "GitHub Skyline",
  description:
    "Explore Patrick Barattin's GitHub contribution history as an interactive 3D skyline from 2013 to 2026.",
  alternates: {
    canonical: "/skyline",
  },
  openGraph: {
    title: "Nittarab GitHub Skyline",
    description: "Fourteen years of building, rendered as an interactive contribution city.",
    url: "/skyline",
    type: "website",
  },
};

export default function SkylinePage() {
  return (
    <main className="min-h-screen bg-[#070a0f] p-2 font-clash-display sm:p-3">
      <SkylineExperience initialData={contributionData} />
      <Link
        href="/"
        className="fixed left-5 top-[9.5rem] z-20 rounded-full border border-white/10 bg-[#161b22]/80 px-4 py-2 text-xs text-[#c9d1d9] shadow-lg backdrop-blur-lg transition hover:border-[#3fb950]/60 hover:text-white sm:left-8 sm:top-[11rem]"
      >
        ← Back home
      </Link>
    </main>
  );
}
