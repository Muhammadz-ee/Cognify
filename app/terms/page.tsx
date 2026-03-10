import { Container } from "@/components/ui/container";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />
      <Container className="pt-16 sm:pt-20 md:pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          {/* Terms of Service */}
          <section className="mb-12 sm:mb-14 md:mb-16">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-2 sm:mb-3 md:mb-4">Terms of Service</h1>
            <p className="text-xs sm:text-sm md:text-base text-gray-400 mb-4 sm:mb-6 md:mb-8">
              <strong>Effective Date:</strong> March 26, 2025
            </p>

            <div className="space-y-4 sm:space-y-6 md:space-y-8 text-xs sm:text-sm md:text-base text-gray-300 leading-relaxed">
              <div>
                <p>
                  Hey there! Welcome to Cognify AI Inc. ("Cognify," "we," "us," or
                  "our"). We're thrilled to have you here! By using our app or services, you
                  ("you," "your," or "User") agree to these Terms of Service. We
                  know legal stuff isn't the most exciting, but please take a moment to read them—they'll
                  help you understand how we operate and what you can expect from us.
                </p>
              </div>

              <div className="bg-blue-900/20 border border-blue-700/30 rounded-lg p-3 sm:p-4 md:p-6">
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-blue-300 mb-2 sm:mb-3 md:mb-4">Your Privacy Matters to Us</h3>
                <p className="mb-2 sm:mb-3 md:mb-4">
                  We know how important your personal data is, and we're committed to protecting it. Your trust
                  is essential, which is why we want to make it clear: we will never sell your personal data to third
                  parties, period. We're a company made by and for individuals—not advertisers or big
                  corporations. Our goal is to help you learn and grow, not to profit off your personal information.
                </p>
                <p>
                  We also want you to know that your data will never be shared with anyone, for any reason,
                  without your explicit consent (unless we're required to by law). We're dedicated to keeping your
                  information private and secure, so you can use our services with peace of mind.
                </p>
              </div>

              <div>
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-2 sm:mb-3 md:mb-4">1. A Little About Us</h3>
                <p>
                  Cognify is all about helping you become an active learner by turning YouTube videos into
                  summaries and interactive notes with the help of AI-powered features. You can use "Insight
                  Modes" and create annotations directly from video content—pretty cool, right?
                </p>
                <p className="mt-2 sm:mt-3">
                  By using our app, you're agreeing to these Terms. If that doesn't work for you, we totally
                  understand, and we suggest you don't use our services.
                </p>
              </div>

              <div>
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-2 sm:mb-3 md:mb-4">2. Who Can Use Cognify?</h3>
                <p>
                  You must be at least 13 years old to use our platform. If you're under 13, we can't allow you to use
                  our services, but we hope you'll check us out once you're old enough! By using the app, you're
                  saying that you're legally able to agree to these terms.
                </p>
              </div>

              <div>
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-2 sm:mb-3 md:mb-4">3. Free Trial and Subscriptions</h3>
                <p>
                  We love offering a 7-day free trial so you can test out our features. After the trial, you'll
                  automatically be enrolled in a paid subscription unless you cancel before the trial ends. Pricing
                  and subscription details are available within the app for full transparency.
                </p>
              </div>

              <div>
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-2 sm:mb-3 md:mb-4">4. Easy Sign-In with Google</h3>
                <p className="mb-2 sm:mb-3">
                  You can sign in using your Google account to access personalized features, including
                  integration with YouTube content. By connecting your Google account, you grant us permission
                  to access certain data such as your public and private YouTube playlists, "Liked Videos," and your
                  YouTube channel subscriptions, in accordance with our Privacy Policy.
                </p>
                <p>
                  You're responsible for maintaining the confidentiality and security of your Google account. If you
                  believe your account has been compromised, please disconnect it and contact us immediately.
                </p>
              </div>

              <div>
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-2 sm:mb-3 md:mb-4">5. YouTube API Services Disclaimer</h3>
                <p className="mb-2 sm:mb-3">
                  Our app uses YouTube API Services to access and display content. By using our app, you also
                  agree to be bound by the YouTube Terms of Service and Google's Privacy Policy.
                </p>
                <p className="mb-2 sm:mb-3">
                  We do not claim ownership of YouTube content and do not store or share your YouTube data
                  beyond what's necessary to provide core features of the app. For more information, please see
                  our Privacy Policy.
                </p>
                <p>
                  You can revoke access to your Google account at any time via your Google Account Permissions.
                </p>
              </div>

              <div>
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-2 sm:mb-3 md:mb-4">6. Transcriptions &amp; Accuracy (A Quick Heads-Up)</h3>
                <p className="mb-2 sm:mb-3">
                  Our app uses our own AI model to generate transcriptions and create summaries and notes
                  from YouTube videos. While we strive to provide accurate and high-quality content, there may
                  be occasional errors or discrepancies. We continuously work on improving our transcription
                  model, but we can't guarantee that every summary will be flawless.
                </p>
                <p>
                  Additionally, human reviewers might occasionally check anonymized data to help enhance our
                  transcription and summarization accuracy. By using Cognify, you acknowledge and accept this.
                </p>
              </div>

              <div>
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-2 sm:mb-3 md:mb-4">7. Your Content Is Yours</h3>
                <p className="mb-2 sm:mb-3">
                  Anything you create within our app—notes, summaries, or annotations—belongs to you! We
                  respect your ownership. By using our service, though, you give us a license to use your content
                  to operate and improve our services (but don't worry, it's only for those purposes).
                </p>
                <p>
                  Just a reminder: please keep it respectful. Don't upload anything that's offensive, infringes on
                  others' rights, or is spammy.
                </p>
              </div>

              <div>
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-2 sm:mb-3 md:mb-4">8. No User-to-User Sharing (For Now)</h3>
                <p>
                  We don't have a public sharing feature at the moment, and you can't interact with other users
                  directly. All content stays private unless you decide to share it somewhere else.
                </p>
              </div>

              <div>
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-2 sm:mb-3 md:mb-4">9. Intellectual Property</h3>
                <p>
                  Cognify owns the rights to the app and its content (except for your content). You're welcome to
                  use the service, but please don't copy, modify, or distribute any part of our app without getting
                  our written permission first.
                </p>
              </div>

              <div>
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-2 sm:mb-3 md:mb-4">10. What You Can and Can't Do</h3>
                <p className="mb-2 sm:mb-3 md:mb-4">Please use Cognify responsibly. Here are a few things you shouldn't do:</p>
                <ul className="list-disc list-inside space-y-1 sm:space-y-2 ml-2">
                  <li>Don't reverse-engineer or hack the app.</li>
                  <li>Don't use bots or other automated tools to access the service.</li>
                  <li>Don't interfere with or disrupt the app's operation.</li>
                </ul>
                <p className="mt-2 sm:mt-3 md:mt-4">
                  We're all about fun, learning, and safety—so let's keep it that way.
                </p>
              </div>

              <div>
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-2 sm:mb-3 md:mb-4">11. Termination of Access</h3>
                <p>
                  If you don't follow these Terms or misuse the service, we may suspend or cancel your access.
                  We'd rather not, but we have to keep things safe and fair for everyone.
                </p>
              </div>

              <div>
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-2 sm:mb-3 md:mb-4">12. No Guarantees (But We're Doing Our Best!)</h3>
                <p>
                  Cognify is provided "as is" and "as available." We can't promise that our service will always work
                  perfectly, but we're constantly working to improve it.
                </p>
              </div>

              <div>
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-2 sm:mb-3 md:mb-4">13. Limitation of Liability</h3>
                <p>
                  If something goes wrong while you're using Cognify, we're not responsible for any indirect,
                  incidental, or consequential damages. We want your experience to be great, but we do have to
                  set some limits.
                </p>
              </div>

              <div>
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-2 sm:mb-3 md:mb-4">14. App Updates and Changes</h3>
                <p>
                  We may update or modify the app from time to time to improve functionality, fix bugs, enhance
                  security, or add new features. These updates may happen automatically and may affect how you
                  interact with the app. By using the app, you agree to receive these updates as part of your
                  continued use.
                </p>
              </div>

              <div>
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-2 sm:mb-3 md:mb-4">15. Additional Legal Rights (GDPR + CCPA)</h3>
                <p>
                  If you are a resident of California or located in the European Economic Area (EEA), you may have
                  additional rights regarding your personal data, including the right to access, delete, or restrict
                  the use of your data, as outlined in our Privacy Policy.
                </p>
                <p className="mt-2 sm:mt-3">
                  We comply with the California Consumer Privacy Act (CCPA), the California Privacy Rights Act
                  (CPRA), and the General Data Protection Regulation (GDPR). To exercise your rights, contact us
                  at
                  <a
                    href="mailto:Admin@getcognifyai.com"
                    className="text-blue-400 hover:text-blue-300 underline"
                  >
                    Admin@getcognifyai.com
                  </a>
                  .
                </p>
              </div>

              <div>
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-2 sm:mb-3 md:mb-4">16. Governing Law</h3>
                <p>
                  These Terms are governed by the laws of the State of Florida and the United States of America,
                  regardless of where you're located.
                </p>
              </div>

              <div>
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-2 sm:mb-3 md:mb-4">17. Get in Touch</h3>
                <p className="mb-2 sm:mb-3 md:mb-4">
                  If you have any questions or concerns about these Terms or how we operate, don't hesitate to
                  reach out to us! We're here to help:
                </p>
                <p className="text-lg">
                  📧{" "}
                  <a
                    href="mailto:Admin@getcognifyai.com"
                    className="text-blue-400 hover:text-blue-300 underline"
                  >
                    Admin@getcognifyai.com
                  </a>
                </p>
              </div>
            </div>
          </section>

          {/* EULA */}
          <section>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-2 sm:mb-3 md:mb-4">End User License Agreement (EULA)</h2>
            <p className="text-xs sm:text-sm md:text-base text-gray-400 mb-4 sm:mb-6 md:mb-8">
              <strong>Effective Date:</strong> March 26, 2025
            </p>

            <div className="space-y-8 text-gray-300 leading-relaxed">
              <p>
                This End User License Agreement ("Agreement") is a legal contract between you ("Licensee,"
                "you," or "your") and Cognify AI Inc. ("Licensor," "we," "us," or "our"), the developer of the
                Cognify application ("Software"). By downloading, installing, or using the Software, you agree to
                be bound by the terms of this Agreement. If you do not agree to the terms, do not download,
                install, or use the Software.
              </p>

              <div>
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-2 sm:mb-3 md:mb-4">1. License Grant</h3>
                <p className="mb-2 sm:mb-3 md:mb-4">
                  Subject to your compliance with this Agreement, Licensor grants you a limited, non-exclusive,
                  non-transferable, revocable license to install and use the Software on a single device solely for
                  your personal, non-commercial use.
                </p>
                <p className="font-semibold mb-2 sm:mb-3 text-sm sm:text-base">You may not:</p>
                <ul className="list-disc list-inside space-y-1 sm:space-y-2 ml-2">
                  <li>Copy, modify, distribute, or create derivative works based on the Software</li>
                  <li>Reverse-engineer, decompile, or disassemble the Software, except where permitted by law</li>
                  <li>Rent, lease, sublicense, or transfer the Software to a third party</li>
                </ul>
                <p className="mt-4">
                  All rights not expressly granted are reserved by Licensor.
                </p>
              </div>

              <div>
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-2 sm:mb-3 md:mb-4">2. Ownership and Intellectual Property</h3>
                <p className="mb-2 sm:mb-3">
                  The Software is licensed, not sold. All rights, title, and interest in the Software and any
                  associated intellectual property (including patents, trademarks, copyrights, and trade secrets)
                  belong to Licensor and its licensors. This Agreement does not transfer any ownership rights to
                  you.
                </p>
                <p>
                  You agree not to assert any ownership rights over the Software.
                </p>
              </div>

              <div>
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-2 sm:mb-3 md:mb-4">3. Restrictions</h3>
                <p className="mb-2 sm:mb-3">You agree not to:</p>
                <ul className="list-disc list-inside space-y-1 sm:space-y-2 ml-2">
                  <li>Use the Software for any unlawful purpose</li>
                  <li>Harm, interfere with, or degrade the operation of the Software</li>
                  <li>Allow others to access or use the Software via a hosted or shared environment</li>
                  <li>Attempt unauthorized access to systems, data, or networks related to the Software</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-2 sm:mb-3 md:mb-4">4. Software Updates</h3>
                <p>
                  Licensor may provide automatic or manual updates, bug fixes, and enhancements to the Software
                  ("Updates"). These Updates may be installed without additional notice. You agree that this
                  Agreement applies to all such Updates.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-4">5. YouTube API Services Disclaimer</h3>
                <p className="mb-3">
                  This Software integrates with YouTube API Services to access and display video content. By
                  using the Software, you also agree to be bound by the YouTube Terms of Service and Google's
                  Privacy Policy.
                </p>
                <p className="mb-2 sm:mb-3">
                  We do not store or share your YouTube data beyond what is necessary to provide features within
                  the Software. For full details, please refer to our Privacy Policy.
                </p>
                <p>
                  You may revoke Google account access at any time via your Google Account Permissions.
                </p>
              </div>

              <div>
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-2 sm:mb-3 md:mb-4">6. Data Collection and Privacy</h3>
                <p className="mb-2 sm:mb-3">
                  Your use of the Software is subject to our Privacy Policy, which describes how we collect, use,
                  and protect your personal information. By using the Software, you consent to the practices
                  described in the Privacy Policy.
                </p>
                <p>
                  We do not sell your data to third parties. We may share information only as required by law or to
                  comply with legal obligations.
                </p>
              </div>

              <div>
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-2 sm:mb-3 md:mb-4">7. Termination</h3>
                <p className="mb-2 sm:mb-3">
                  This Agreement remains in effect until terminated. You may terminate it at any time by
                  uninstalling the Software. We may terminate this Agreement if you violate any of its terms. Upon
                  termination, you must stop using and uninstall the Software immediately.
                </p>
                <p>
                  We also reserve the right to suspend or restrict your access to the Software at our discretion.
                </p>
              </div>

              <div>
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-2 sm:mb-3 md:mb-4">8. Warranty Disclaimer</h3>
                <p className="mb-2 sm:mb-3">
                  THE SOFTWARE IS PROVIDED "AS IS" AND "AS AVAILABLE," WITHOUT WARRANTIES OF ANY KIND. TO
                  THE MAXIMUM EXTENT PERMITTED BY LAW, LICENSOR DISCLAIMS ALL WARRANTIES, EXPRESS OR
                  IMPLIED, INCLUDING MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-
                  INFRINGEMENT. WE DO NOT GUARANTEE THE SOFTWARE WILL BE UNINTERRUPTED, ERROR-FREE,
                  OR MEET YOUR EXPECTATIONS.
                </p>
              </div>

              <div>
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-2 sm:mb-3 md:mb-4">9. Limitation of Liability</h3>
                <p className="mb-2 sm:mb-3">
                  TO THE EXTENT PERMITTED BY LAW, LICENSOR SHALL NOT BE LIABLE FOR ANY INDIRECT,
                  INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR EXEMPLARY DAMAGES ARISING FROM YOUR USE OF THE
                  SOFTWARE. OUR TOTAL LIABILITY UNDER THIS AGREEMENT SHALL NOT EXCEED ANY AMOUNTS YOU
                  PAID FOR THE SOFTWARE (IF ANY).
                </p>
              </div>

              <div>
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-2 sm:mb-3 md:mb-4">10. Governing Law and Dispute Resolution</h3>
                <p>
                  This Agreement is governed by the laws of the State of Florida and the United States, without
                  regard to conflict-of-law principles. You agree that any disputes arising out of or related to this
                  Agreement shall be resolved in the state or federal courts located in Florida.
                </p>
              </div>

              <div>
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-2 sm:mb-3 md:mb-4">11. Modifications to This Agreement</h3>
                <p>
                  We reserve the right to modify this Agreement at any time. Changes will be communicated to
                  you, and continued use of the Software after any updates constitutes your acceptance of the
                  revised terms. If you do not agree, you must uninstall and stop using the Software.
                </p>
              </div>

              <div>
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-2 sm:mb-3 md:mb-4">12. Entire Agreement</h3>
                <p>
                  This Agreement constitutes the entire agreement between you and Licensor regarding the
                  Software and supersedes all prior or contemporaneous agreements, communications, and
                  understandings.
                </p>
              </div>

              <div>
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-2 sm:mb-3 md:mb-4">13. Severability</h3>
                <p>
                  If any provision of this Agreement is found to be invalid or unenforceable, the remaining
                  provisions will remain in full force and effect.
                </p>
              </div>

              <div>
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-2 sm:mb-3 md:mb-4">14. Contact Information</h3>
                <p className="mb-2 sm:mb-3 md:mb-4">If you have any questions about this Agreement, please contact us:</p>
                <p className="font-semibold mb-2 text-sm sm:text-base">Cognify AI Inc.</p>
                <p className="text-sm sm:text-base md:text-lg">
                  📧{" "}
                  <a
                    href="mailto:Admin@getcognifyai.com"
                    className="text-blue-400 hover:text-blue-300 underline"
                  >
                    Admin@getcognifyai.com
                  </a>
                </p>
              </div>
            </div>
          </section>
        </div>
      </Container>
      <Footer />
    </main>
  );
}
