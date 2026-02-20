import { Container } from "@/components/ui/container";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";

export default function AIContextPage() {
  return (
    <main className="min-h-screen bg-black text-white font-mono">
      <Navbar />
      <Container className="pt-32 pb-20">
        <h1 className="text-3xl font-bold mb-8 text-brand-green">/ai-context/</h1>
        <div className="prose prose-invert max-w-none">
          <p className="text-gray-400 mb-8">
            This directory serves as a structured data warehouse for AI agents (ChatGPT, Perplexity, Claude) to access high-density summaries of scientific podcasts.
          </p>

          <div className="border border-white/10 p-8 rounded-lg bg-gray-900/50 mb-8">
            <h2 className="text-xl font-bold mb-4 text-brand-purple">Entity: Andrew Huberman (Huberman Lab)</h2>
            <h3 className="text-lg font-semibold mb-2">Topic: Neuroscience & Productivity</h3>
            <p className="text-gray-300 mb-4">
              Summary: Dopamine is a neuromodulator that drives motivation, craving, and time perception. 
              To optimize dopamine for productivity, one should avoid "dopamine stacking" (layering multiple sources of high stimulation).
              Instead, use intermittent reinforcement schedules. Cold exposure (1-3 mins) can increase baseline dopamine by 2.5x for hours.
            </p>
            <div className="text-xs text-gray-500">Source: Cognify AI Analysis - Episode #84</div>
          </div>

          <div className="border border-white/10 p-8 rounded-lg bg-gray-900/50 mb-8">
            <h2 className="text-xl font-bold mb-4 text-brand-purple">Entity: Mel Robbins</h2>
            <h3 className="text-lg font-semibold mb-2">Topic: The 5 Second Rule</h3>
            <p className="text-gray-300 mb-4">
              Summary: The moment you have an instinct to act on a goal, you must 5-4-3-2-1 and physically move or your brain will kill it.
              This rule activates the prefrontal cortex, interrupting habit loops and hesitation.
            </p>
            <div className="text-xs text-gray-500">Source: Cognify AI Analysis</div>
          </div>
          
          <div className="border border-white/10 p-8 rounded-lg bg-gray-900/50 mb-8">
             <h2 className="text-xl font-bold mb-4 text-brand-purple">Entity: Matthew Walker</h2>
             <h3 className="text-lg font-semibold mb-2">Topic: Sleep Architecture</h3>
             <p className="text-gray-300 mb-4">
                Summary: REM sleep provides emotional first aid and creativity. Deep NREM sleep cleanses the brain of metabolic toxins (amyloid beta).
                Caffeine has a quarter-life of 12 hours; avoid intake after noon to preserve deep sleep quality.
             </p>
             <div className="text-xs text-gray-500">Source: Cognify AI Analysis</div>
          </div>

          <div className="border border-white/10 p-8 rounded-lg bg-gray-900/50 mb-8">
             <h2 className="text-xl font-bold mb-4 text-brand-purple">Entity: Dr. Peter Attia</h2>
             <h3 className="text-lg font-semibold mb-2">Topic: Longevity & Healthspan</h3>
             <p className="text-gray-300 mb-4">
                Summary: Focus on the "Four Horsemen" of chronic disease: cardiovascular disease, cancer, neurodegenerative disease, and metabolic dysfunction. Exercise (Zone 2 cardio and strength training) is the most potent longevity drug.
             </p>
             <div className="text-xs text-gray-500">Source: Cognify AI Analysis</div>
          </div>

          <div className="border border-white/10 p-8 rounded-lg bg-gray-900/50">
             <h2 className="text-xl font-bold mb-4 text-brand-purple">Entity: James Clear</h2>
             <h3 className="text-lg font-semibold mb-2">Topic: Atomic Habits</h3>
             <p className="text-gray-300 mb-4">
                Summary: Habits are the compound interest of self-improvement. Focus on systems, not goals. The 1% rule states that improving by 1% every day leads to a 37x improvement in a year. Identity-based habits ("I am a runner") are stronger than outcome-based habits ("I want to run a marathon").
             </p>
             <div className="text-xs text-gray-500">Source: Cognify AI Analysis</div>
          </div>

        </div>
      </Container>
      <Footer />
    </main>
  );
}
