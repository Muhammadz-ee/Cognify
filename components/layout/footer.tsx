import { Container } from "@/components/ui/container";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-black border-t border-white/10 pt-16 pb-8">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-2">
            <Link
              href="/"
              className="text-2xl font-bold tracking-tight text-white mb-4 block"
            >
              COGNIFY
            </Link>
            <p className="text-gray-400 max-w-sm">
              The premium AI intelligence layer. Distill YouTube and podcasts
              into personal Masterclasses with custom Key Moments, AI Insights,
              NoteVault, and AI-powered Q&A.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-white mb-4">Product</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="#features"
                  className="text-gray-400 hover:text-brand-purple transition-colors"
                >
                  Features
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-400 hover:text-brand-purple transition-colors"
                >
                  Pricing
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-400 hover:text-brand-purple transition-colors"
                >
                  Download
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white mb-4">Legal</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/privacy"
                  className="text-gray-400 hover:text-brand-purple transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="text-gray-400 hover:text-brand-purple transition-colors"
                >
                  Terms of Use
                </Link>
              </li>
              <li>
                <a
                  href="mailto:admin@getcognifyai.com"
                  className="text-gray-400 hover:text-brand-purple transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} Disclaimer: All podcast and video
            content displayed in this app—including creator images—is for
            illustrative purposes only. We do not claim ownership of third-party
            content, nor are we affiliated with, endorsed by, or sponsored by
            the creators featured. Their inclusion is solely to demonstrate the
            types of content accessible through our platform. If you are a
            content creator and have concerns, please contact us for prompt
            resolution. This app uses YouTube API Services but is not endorsed
            or certified by YouTube or Google. YouTube and the YouTube logo are
            trademarks of Google LLC. Interface previewS — final version may
            vary.
          </p>
          <div className="flex gap-6">
            {/* Social Icons Placeholder */}
            <div className="w-5 h-5 bg-gray-800 rounded-full" />
            <div className="w-5 h-5 bg-gray-800 rounded-full" />
            <div className="w-5 h-5 bg-gray-800 rounded-full" />
          </div>
        </div>
      </Container>
    </footer>
  );
}
