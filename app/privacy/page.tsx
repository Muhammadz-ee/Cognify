import { Container } from "@/components/ui/container";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />
      <Container className="pt-8 sm:pt-16 md:pt-24 pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-2 sm:mb-3 md:mb-4">
            Privacy Policy
          </h1>
          <p className="text-xs sm:text-sm md:text-base text-gray-400 mb-4 sm:mb-6 md:mb-8">
            <strong>Effective Date:</strong> March 26, 2025
          </p>

          <div className="space-y-4 sm:space-y-6 md:space-y-8 text-xs sm:text-sm md:text-base text-gray-300 leading-relaxed">
            <p>
              Cognify AI Inc. ("Cognify," "we," "us," or "our") respects your
              privacy and is committed to protecting your personal information.
              This Privacy Policy explains how we collect, use, and safeguard
              your data when you use our app, services, and website (the
              "Services").
            </p>

            <p>
              Please read this policy carefully to understand our views and
              practices regarding your personal data and how we will treat it.
            </p>

            <p>
              By using our Services, you agree to the collection, use, and
              processing of your data as described in this Privacy Policy.
            </p>

            {/* Privacy notice box */}
            <div className="bg-blue-900/20 border border-blue-700/30 rounded-lg p-3 sm:p-4 md:p-6">
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-blue-300 mb-2 sm:mb-3 md:mb-4">
                Your Privacy Matters to Us
              </h3>
              <p className="mb-2 sm:mb-3 md:mb-4">
                We are committed to being transparent about how we collect and
                use your data. We do not sell or share your personal information
                for advertising purposes. Your privacy is protected through
                industry-standard security measures.
              </p>
            </div>

            {/* Section 1 */}
            <div>
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold mb-2 sm:mb-3 md:mb-4 text-white">
                1. Information We Collect
              </h2>
              <p className="mb-2 sm:mb-3 md:mb-4">
                We collect the following types of information when you use our
                Services:
              </p>

              <h3 className="text-base sm:text-lg md:text-xl font-semibold mb-2 sm:mb-3 text-white">
                Personal Information
              </h3>
              <ul className="list-disc list-inside mb-2 sm:mb-3 md:mb-4 space-y-1 sm:space-y-2">
                <li>
                  <strong>Account Information:</strong> When you sign up or use
                  our app, we may collect your Google account information,
                  including email address and basic profile information (e.g.,
                  name, profile photo).
                </li>
                <li>
                  <strong>User Content:</strong> If you create, save, or share
                  notes, summaries, or annotations, we may collect the content
                  you input into the app.
                </li>
              </ul>

              <h3 className="text-base sm:text-lg md:text-xl font-semibold mb-2 sm:mb-3 text-white">
                Usage Data
              </h3>
              <ul className="list-disc list-inside space-y-1 sm:space-y-2">
                <li>
                  <strong>App Usage:</strong> We automatically collect data on
                  how you interact with our Services, such as which features you
                  use, your interactions with content, and the frequency of
                  usage.
                </li>
                <li>
                  <strong>Device and Log Information:</strong> We may collect
                  information about your device (e.g., device type, operating
                  system), IP address, browser type, and other technical details
                  to improve the functionality of the app.
                </li>
              </ul>
            </div>

            {/* Section 2 */}
            <div>
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold mb-2 sm:mb-3 md:mb-4 text-white">
                2. How We Use Your Information
              </h2>
              <p className="mb-2 sm:mb-3 md:mb-4">
                We use the information we collect for the following purposes:
              </p>
              <ul className="list-disc list-inside space-y-1 sm:space-y-2">
                <li>
                  <strong>Providing and improving our Services:</strong> To
                  personalize your experience, offer new features, and enhance
                  the overall functionality of the app.
                </li>
                <li>
                  <strong>Authentication:</strong> To authenticate your access
                  to the app and ensure security.
                </li>
                <li>
                  <strong>Communication:</strong> To send you updates, important
                  notifications, and information related to your account and the
                  Services.
                </li>
                <li>
                  <strong>Analytics:</strong> To analyze how users interact with
                  the app to improve features, fix bugs, and enhance the overall
                  experience.
                </li>
              </ul>
            </div>

            {/* Section 3 */}
            <div>
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold mb-2 sm:mb-3 md:mb-4 text-white">
                3. How We Protect Your Information
              </h2>
              <p>
                We implement reasonable administrative, technical, and physical
                safeguards to protect your personal information from
                unauthorized access, use, or disclosure. While we strive to
                protect your data, please note that no method of transmission
                over the Internet or electronic storage is 100% secure.
                Therefore, we cannot guarantee absolute security.
              </p>
            </div>

            {/* Section 4 */}
            <div>
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold mb-2 sm:mb-3 md:mb-4 text-white">
                4. Sharing Your Information
              </h2>
              <p className="mb-2 sm:mb-3 md:mb-4">
                We do not sell, rent, or share your personal information with
                third parties for their marketing purposes. However, we may
                share your data in the following cases:
              </p>
              <ul className="list-disc list-inside space-y-2 sm:space-y-3">
                <li>
                  <strong>Service Providers:</strong> We may share your
                  information with trusted third-party service providers who
                  assist in the operation of the app and provide services on our
                  behalf. These providers are required to maintain the
                  confidentiality of your data and are not authorized to use
                  your information for other purposes.
                </li>
                <li>
                  <strong>Legal Compliance:</strong> We may disclose your
                  information if required to do so by law or in response to a
                  legal request, such as a subpoena, court order, or government
                  inquiry.
                </li>
                <li>
                  <strong>Business Transfers:</strong> If Cognify undergoes a
                  business transaction such as a merger, acquisition, or sale of
                  assets, your information may be transferred as part of that
                  transaction. We will notify you if your data is subject to a
                  different privacy policy.
                </li>
              </ul>
            </div>

            {/* Section 4A */}
            <div>
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold mb-2 sm:mb-3 md:mb-4 text-white">
                4A. Cookies and Device-Based Data Collection
              </h2>
              <p className="mb-2 sm:mb-3 md:mb-4">
                We and our authorized third-party partners may store, access, or
                collect information from your device or browser using cookies,
                device identifiers, or similar technologies. These technologies
                are used to improve the performance and security of the app,
                remember your preferences, and understand usage patterns through
                analytics tools.
              </p>
              <p>
                By using our Services, you consent to the placement and use of
                these technologies on your device or browser. You may manage or
                disable cookies through your browser settings, but some features
                of the Services may not function properly without them.
              </p>
            </div>

            {/* Section 5 */}
            <div>
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold mb-2 sm:mb-3 md:mb-4 text-white">
                5. Third-Party Links
              </h2>
              <p>
                Our Services may contain links to third-party websites or
                services. We are not responsible for the privacy practices or
                content of those third-party sites. We encourage you to review
                their privacy policies before providing any personal
                information.
              </p>
            </div>

            {/* Section 6 */}
            <div>
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold mb-2 sm:mb-3 md:mb-4 text-white">
                6. Your Data Rights
              </h2>
              <p className="mb-2 sm:mb-3 md:mb-4">
                You have certain rights regarding your personal information,
                including:
              </p>
              <ul className="list-disc list-inside space-y-1 sm:space-y-2">
                <li>
                  <strong>Access and Correction:</strong> You can request access
                  to the personal information we hold about you and request
                  corrections to any inaccuracies.
                </li>
                <li>
                  <strong>Deletion:</strong> You can request the deletion of
                  your personal information. Please note that certain
                  information may be retained for legal or operational reasons.
                </li>
                <li>
                  <strong>Opt-Out of Communications:</strong> You can opt-out of
                  receiving promotional emails or notifications by following the
                  instructions in those communications.
                </li>
              </ul>
              <p className="mt-2 sm:mt-3 md:mt-4">
                To exercise these rights, please contact us at
                <a
                  href="mailto:Admin@getcognifyai.com"
                  className="text-blue-400 hover:text-blue-300 underline"
                >
                  Admin@getcognifyai.com
                </a>
                .
              </p>
            </div>

            {/* Section 7 */}
            <div>
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold mb-2 sm:mb-3 md:mb-4 text-white">
                7. Data Retention
              </h2>
              <p>
                We retain your personal information for as long as necessary to
                provide our Services, comply with legal obligations, resolve
                disputes, and enforce our agreements. When your information is
                no longer needed for these purposes, we will securely delete it.
              </p>
            </div>

            {/* Section 8 */}
            <div>
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold mb-2 sm:mb-3 md:mb-4 text-white">
                8. Children's Privacy
              </h2>
              <p>
                Our Services are not intended for use by children under the age
                of 13. We do not knowingly collect or solicit personal
                information from children. If we learn that we have
                inadvertently collected information from a child under 13, we
                will take steps to delete that information. If you are a parent
                or guardian and believe your child has provided us with personal
                information, please contact us.
              </p>
            </div>

            {/* Section 9 */}
            <div>
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold mb-2 sm:mb-3 md:mb-4 text-white">
                9. Changes to This Privacy Policy
              </h2>
              <p>
                We may update this Privacy Policy from time to time to reflect
                changes in our practices or for other operational, legal, or
                regulatory reasons. We will notify you of any material changes
                by updating the "Effective Date" at the top of this page and,
                when appropriate, notifying you through the app or other
                communication methods. Your continued use of the Services after
                any changes to this Privacy Policy will be considered acceptance
                of those changes.
              </p>
            </div>

            {/* Section 10 */}
            <div>
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold mb-2 sm:mb-3 md:mb-4 text-white">
                10. Data Access & Usage (Transparency clause)
              </h2>
              <p className="mb-2 sm:mb-3 md:mb-4">
                You can sign in using your Google account to access personalized
                features, including integration with YouTube content. By
                connecting your Google account, you grant us permission to
                access certain data such as your public and private YouTube
                playlists, "Liked Videos," and your YouTube channel
                subscriptions, in accordance with our Privacy Policy.
              </p>
              <p className="mb-2 sm:mb-3 md:mb-4">
                You're responsible for maintaining the confidentiality and
                security of your Google account. If you believe your account has
                been compromised, please disconnect it and contact us
                immediately.
              </p>
              <p className="mb-2 sm:mb-3 md:mb-4">
                We do not access your viewing history or any other personal data
                beyond what is authorized through your Google account
                connection. We do not store, share, or sell any personal
                information retrieved via the YouTube API. All data access is
                used solely to enhance your experience within the app.
              </p>
              <p>
                By using our app, you agree to be bound by the YouTube Terms of
                Service and Google's Privacy Policy.
              </p>
            </div>

            {/* Section 11 */}
            <div>
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold mb-2 sm:mb-3 md:mb-4 text-white">
                11. Revoking Access
              </h2>
              <p>
                If you connect your Google account, you can revoke the app's
                access to your data at any time via the Google security settings
                page:{" "}
                <a
                  href="https://myaccount.google.com/permissions"
                  className="text-blue-400 hover:text-blue-300 underline"
                >
                  https://myaccount.google.com/permissions
                </a>
              </p>
            </div>

            {/* Section 12 */}
            <div>
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold mb-2 sm:mb-3 md:mb-4 text-white">
                12. Contact Us
              </h2>
              <p>
                If you have any questions or concerns about this Privacy Policy
                or our data practices, please contact us at:
              </p>
              <p className="mt-2 sm:mt-3 md:mt-4 font-semibold text-sm sm:text-base">
                Cognify AI Inc.
              </p>
              <p className="mt-2 text-sm sm:text-base">
                📧{" "}
                <a
                  href="mailto:Admin@getcognifyai.com"
                  className="text-blue-400 hover:text-blue-300 underline"
                >
                  Admin@getcognifyai.com
                </a>
              </p>
            </div>

            {/* Section 13 */}
            <div>
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold mb-2 sm:mb-3 md:mb-4 text-white">
                13. California Privacy Rights (CCPA Notice)
              </h2>
              <p className="mb-2 sm:mb-3 md:mb-4">
                If you are a California resident, you may have certain rights
                under the California Consumer Privacy Act (CCPA) and the
                California Privacy Rights Act (CPRA), including the right to:
              </p>
              <ul className="list-disc list-inside space-y-1 sm:space-y-2">
                <li>
                  Know what personal information we collect, use, and disclose
                </li>
                <li>
                  Request access to the personal information we hold about you
                </li>
                <li>Request the deletion of your personal information</li>
                <li>
                  Opt out of the sale or sharing of personal information (Note:
                  We do not sell or share personal data for advertising
                  purposes)
                </li>
              </ul>
              <p className="mt-2 sm:mt-3 md:mt-4">
                To exercise any of these rights, please contact us at
                <a
                  href="mailto:Admin@getcognifyai.com"
                  className="text-blue-400 hover:text-blue-300 underline"
                >
                  Admin@getcognifyai.com
                </a>
                . We will verify your request using the information associated
                with your account.
              </p>
            </div>

            {/* Section 14 */}
            <div>
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold mb-2 sm:mb-3 md:mb-4 text-white">
                14. GDPR Rights for European Users
              </h2>
              <p className="mb-2 sm:mb-3 md:mb-4">
                If you are located in the European Economic Area (EEA), you have
                specific rights under the General Data Protection Regulation
                (GDPR), including the rights to:
              </p>
              <ul className="list-disc list-inside space-y-1 sm:space-y-2">
                <li>Access, correct, or delete your personal information</li>
                <li>
                  Object to or restrict the processing of your personal data
                </li>
                <li>Withdraw your consent at any time</li>
                <li>Request a copy of your data in a portable format</li>
                <li>Lodge a complaint with a data protection authority</li>
              </ul>
              <p className="mt-2 sm:mt-3 md:mt-4">
                If you wish to exercise any of these rights, please contact us
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
          </div>
        </div>
      </Container>
      <Footer />
    </main>
  );
}
