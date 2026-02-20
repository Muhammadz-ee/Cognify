import { Container } from "@/components/ui/container";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />
      <Container className="pt-32 pb-20">
        <h1 className="text-4xl font-bold mb-8">Terms of Use</h1>
        <div className="prose prose-invert max-w-3xl">
          <p>Last updated: {new Date().toLocaleDateString()}</p>
          <h3>1. Agreement to Terms</h3>
          <p>
            These Terms of Use constitute a legally binding agreement made between you, whether personally or on behalf of an entity (“you”) and Cognify (“we,” “us” or “our”), concerning your access to and use of the Cognify website as well as any other media form, media channel, mobile website or mobile application related, linked, or otherwise connected thereto (collectively, the “Site”).
          </p>
          <h3>2. Intellectual Property Rights</h3>
          <p>
            Unless otherwise indicated, the Site is our proprietary property and all source code, databases, functionality, software, website designs, audio, video, text, photographs, and graphics on the Site (collectively, the “Content”) and the trademarks, service marks, and logos contained therein (the “Marks”) are owned or controlled by us or licensed to us, and are protected by copyright and trademark laws.
          </p>
          <h3>3. Contact Us</h3>
          <p>
            In order to resolve a complaint regarding the Site or to receive further information regarding use of the Site, please contact us at: admin@getcognifyai.com
          </p>
        </div>
      </Container>
      <Footer />
    </main>
  );
}
