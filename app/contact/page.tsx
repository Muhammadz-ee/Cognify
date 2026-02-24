"use client";

import { Container } from "@/components/ui/container";
import { NavbarContact } from "@/components/layout/navbarContact";
import { Footer } from "@/components/layout/footer";

export default function ContactPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-900">
      <NavbarContact />

      <main className="relative py-16 flex-1">
        <div className="absolute inset-0 top-0 w-full h-full bg-gradient-to-b from-purple-200 via-purple-100 to-transparent opacity-40 blur-3xl z-0" />

        <Container>
          <div className="max-w-6xl mx-auto relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
              {/* Left column: heading + form */}
              <div className="space-y-6">
                <h1 className="heading-4 font-bold text-center text-gray-900">
                  We Love Feedback!
                </h1>
              {/* Left: form card */}
              <form
                action="https://form.jotform.com/251245347804153"
                method="get"
                target="_blank"
                className="bg-white rounded-[28px] p-8 md:p-10 shadow-2xl border border-white/60 max-w-xl"
              >
                <label className="block text-sm font-medium text-gray-600">Name *</label>
                <div className="flex gap-4 mt-2 mb-6">
                  <input
                    name="first"
                    placeholder="First Name"
                    className="flex-1 border rounded px-3 py-2 text-sm bg-white text-gray-900"
                  />
                  <input
                    name="last"
                    placeholder="Last Name"
                    className="flex-1 border rounded px-3 py-2 text-sm bg-white text-gray-900"
                  />
                </div>

                <label className="block text-sm font-medium text-gray-600">Email *</label>
                <div className="mt-2 mb-6">
                  <input
                    name="email"
                    type="email"
                    placeholder="example@example.com"
                    className="w-full border rounded px-3 py-2 text-sm bg-white text-gray-900"
                  />
                </div>

                <label className="block text-sm font-medium text-gray-600">Your Message</label>
                <div className="mt-2 mb-6">
                  <textarea
                    name="message"
                    rows={8}
                    placeholder="Have a question, suggestion, or issue? Drop us a note here."
                    className="w-full border rounded px-3 py-3 text-sm bg-white text-gray-900 resize-none"
                  />
                </div>

                <div className="flex items-center justify-start">
                  <button
                    type="submit"
                    className="bg-black text-white px-6 py-2 rounded-md shadow-sm hover:opacity-95"
                  >
                    SUBMIT
                  </button>
                </div>
              </form>
              </div>

              {/* Right: contact info */}
              <aside className="flex flex-col items-start justify-center px-2 md:pl-8">
                <div className="mb-6 max-w-md">
                  <h3 className="text-xl md:text-2xl font-bold mb-4 leading-tight text-gray-900">
                    Have a question, need support, or want to collaborate? Reach out—we'd love to hear from you.
                  </h3>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 flex items-center justify-center rounded-full bg-white shadow-sm ring-2 ring-purple-200">
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        aria-hidden
                      >
                        <path d="M3 8.5L12 13L21 8.5" stroke="#6B21A8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        <rect x="2" y="4" width="20" height="16" rx="2" stroke="#6B21A8" strokeWidth="1.5" />
                      </svg>
                    </div>

                    <div>
                      <a
                        href="mailto:admin@getcognifyai.com"
                        className="font-semibold text-base md:text-lg text-gray-900 hover:underline"
                      >
                        admin@getcognifyai.com
                      </a>
                      <br />
                      <p className="mt-8   text-sm text-gray-600 max-w-sm">
                        If you want to delete your Cognify account or any personal data associated with it, please email us at <strong>admin@getcognifyai.com</strong>.
                        We'll permanently delete your data (email, saved notes, summaries, and usage history) within 7 days.
                      </p>
                    </div>
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </Container>
      </main>
      <Footer />
    </div>
  );
}
