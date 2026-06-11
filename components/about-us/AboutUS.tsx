import SectionHeader from "../SectionHeader";
import { aboutUsCard, highlights } from "@/lib/constants";
import Highlights from "./Highlights";
import Card from "./Card";

const AboutUS = () => {
  return (
    <section
      className="min-h-screen flex justify-center items-center flex-col w-full bg-amber-900 px-5 py-24 gap-24"
      id="about-us"
    >
      <div className="max-w-7xl w-full flex gap-20 items-center">
        <div className="max-w-3xl mx-auto text-center space-y-8 tracking-wider">
          <SectionHeader text="About" accent="US" />
          <div className="space-y-4 text-justify">
            <p className="text-md md:text-lg leading-relaxed">
            Loony Wolfie is a developer-first project tracking platform that
            goes beyond simple commit logging. We integrate deeply with your git
            workflow to provide real-time visibility into your team&apos;s
            development lifecycle — from the first commit to the final
            deployment.
          </p>
          <p className="text-md md:text-lg leading-relaxed">
            Our mission is to eliminate the guesswork from software project
            management. Instead of relying on manual status updates and stale
            spreadsheets, Loony Wolfie automatically surfaces actionable
            insights from the data your team already generates every day: your
            code.
          </p>
          <p className="text-md md:text-lg leading-relaxed">
            We believe the best project tracker is the one you barely notice. By
            living inside your existing git workflow instead of demanding yet
            another tool to check, Loony Wolfie gives you insights without
            interruptions. No context switching, no manual data entry — just
            clear, honest signals about where your project stands.
          </p>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <div className="space-y-6">
            <h2 className="text-2xl md:text-4xl font-bold text-black text-center">
              What Loony Wolfie <span className="text-amber-600">Does</span>
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
              {highlights.map((item,idx:number) =>(
                <Highlights key={idx} {...item} />
              ) )}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            {aboutUsCard.map((item, index:number) => (
              <Card key={index} {...item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUS;
