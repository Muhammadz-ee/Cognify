import { Container } from "@/components/ui/container";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />
      <Container className="pt-32 pb-20">
        <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
        <div className="prose prose-invert max-w-3xl">
          <p>Last updated: {new Date().toLocaleDateString()}</p>
          <p>
            At Cognify, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclosure, and safeguard your information when you visit our website or use our mobile application.
          </p>
          <h3>1. Collection of Information</h3>
          <p>
            We may collect information about you in a variety of ways. The information we may collect on the Site includes:
            Personal Data: Personally identifiable information, such as your name, shipping address, email address, and telephone number.
          </p>
          <h3>2. Use of Your Information</h3>
          <p>
            Having accurate information about you permits us to provide you with a smooth, efficient, and customized experience. Specifically, we may use information collected about you via the Site to:
            Create and manage your account.
            Compile anonymous statistical data and analysis for use internally or with third parties.
          </p>
          <h3>3. Contact Us</h3>
          <p>
            If you have questions or comments about this Privacy Policy, please contact us at: admin@getcognifyai.com
          </p>
        </div>
      </Container>
      <Footer />
    </main>
  );
}
