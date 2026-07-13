import { Link } from "react-router-dom";
import { Download, Shield, Zap, Smartphone, ChevronRight, Users, BarChart3, Lock, HelpCircle } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
};

export function LandingPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-white pt-16 md:pt-24 pb-32">
        {/* Subtle grid background */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
        <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
            <motion.div {...fadeInUp} className="max-w-2xl">
              <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-sm font-medium text-primary mb-6">
                <span className="flex h-2 w-2 rounded-full bg-primary mr-2 animate-pulse" />
                Version 2.3.1 Available Now
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 tracking-tight mb-6">
                Vishnu Mobile Shop App
              </h1>
              <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed">
                Private Business Management Application for Owner &amp; Staff. Streamline billing, inventory, and daily operations from your phone.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="rounded-full shadow-lg shadow-primary/25 text-base px-8" asChild>
                  <Link to="/download">
                    <Download className="mr-2 h-5 w-5" />
                    Download APK
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="rounded-full bg-white text-base px-8" asChild>
                  <Link to="/login">
                    Staff Login <ChevronRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
              <p className="mt-4 text-sm text-gray-500">
                Release Date: October 15, 2026 · 24.5 MB
              </p>
            </motion.div>

            {/* Phone Mockup */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative mx-auto w-full max-w-xs lg:max-w-sm"
            >
              <div className="relative rounded-[2.5rem] border-[6px] border-gray-900 bg-gray-900 shadow-2xl overflow-hidden aspect-[9/19.5]">
                <div className="absolute top-0 inset-x-0 h-6 bg-gray-900 z-20 rounded-b-3xl w-1/3 mx-auto" />
                <div className="absolute inset-0 bg-gradient-to-br from-primary via-blue-500 to-secondary z-10 flex flex-col items-center justify-center p-8 text-white text-center">
                  <div className="w-20 h-20 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center mb-6">
                    <Shield className="h-10 w-10" />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">Vishnu Mobile Shop</h3>
                  <p className="text-white/80 text-sm">Secure Business Portal</p>
                  <div className="mt-8 bg-white/15 backdrop-blur-sm rounded-xl px-6 py-3 text-sm">
                    v2.3.1 • Ready to Install
                  </div>
                </div>
              </div>
              {/* Glow behind phone */}
              <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[130%] h-[130%] bg-gradient-to-tr from-primary/20 to-secondary/20 blur-3xl rounded-full" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-muted" id="features">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">App Features</h2>
            <p className="text-gray-600 text-lg">Everything you need to manage daily business operations efficiently.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: Zap, title: "Fast Billing", desc: "Process orders and generate bills quickly with our optimized mobile interface.", color: "bg-blue-100 text-blue-600" },
              { icon: Shield, title: "Secure Access", desc: "Enterprise-grade security ensuring all business data remains strictly confidential.", color: "bg-orange-100 text-orange-600" },
              { icon: Smartphone, title: "Offline Mode", desc: "Continue working even when the internet connection drops. Data syncs later.", color: "bg-purple-100 text-purple-600" },
              { icon: BarChart3, title: "Sales Reports", desc: "View daily, weekly, and monthly sales summaries with detailed analytics.", color: "bg-green-100 text-green-600" },
              { icon: Users, title: "Staff Management", desc: "Manage staff accounts and permissions with role-based access control.", color: "bg-red-100 text-red-600" },
              { icon: Lock, title: "Data Privacy", desc: "All data is stored locally on your device. No external servers, no leaks.", color: "bg-cyan-100 text-cyan-600" },
            ].map((feature, i) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              >
                <div className={`h-12 w-12 rounded-xl flex items-center justify-center mb-6 ${feature.color}`}>
                  <feature.icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Use This App */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Why Use This App?</h2>
              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                Built from the ground up for Vishnu Mobile Shop's specific business needs. No bloat, no unnecessary features — just what you need.
              </p>
              <div className="space-y-5">
                {[
                  "Custom-built for our billing and inventory workflow",
                  "Works offline — no internet dependency",
                  "Instant thermal printer support",
                  "Secure staff-only access with role management",
                  "Lightweight — under 25MB APK size",
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="mt-1 flex-shrink-0 h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center">
                      <ChevronRight className="h-3 w-3 text-primary" />
                    </div>
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-3xl p-8 md:p-12 border border-primary/10">
              <div className="grid grid-cols-2 gap-6">
                {[
                  { value: "99.9%", label: "Uptime" },
                  { value: "<25MB", label: "App Size" },
                  { value: "5+", label: "Staff Accounts" },
                  { value: "24/7", label: "Offline Ready" },
                ].map((stat) => (
                  <div key={stat.label} className="text-center p-6 bg-white rounded-2xl shadow-sm">
                    <p className="text-2xl md:text-3xl font-bold text-primary">{stat.value}</p>
                    <p className="text-sm text-gray-500 mt-1">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Security Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 text-primary mb-6">
            <Shield className="h-8 w-8" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Security First</h2>
          <p className="text-gray-600 text-lg mb-8 leading-relaxed">
            Your business data is your most valuable asset. Our app keeps everything locked down with enterprise-grade protection.
          </p>
          <div className="grid sm:grid-cols-3 gap-6 text-left">
            {[
              { title: "Local Storage", desc: "All data stored on-device. Nothing sent to external servers." },
              { title: "Role-Based Access", desc: "Owner and staff get different permission levels." },
              { title: "PIN Protection", desc: "App-level PIN lock prevents unauthorized access to data." },
            ].map((item) => (
              <div key={item.title} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                <h4 className="font-semibold text-gray-900 mb-2">{item.title}</h4>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-white" id="faq">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-secondary/10 text-secondary mb-4">
              <HelpCircle className="h-6 w-6" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
          </div>
          <Accordion type="single" collapsible className="w-full">
            {[
              { q: "Who can access this portal?", a: "Only the shop owner and authorized staff members with valid credentials can access this portal and download the APK." },
              { q: "How do I install the APK?", a: "Download the APK from the Download page, enable 'Install from unknown sources' in your Android settings, then tap the downloaded file to install." },
              { q: "Is my data safe?", a: "Yes. All business data is stored locally on your device. The app does not send any data to external servers." },
              { q: "What if I forget my password?", a: "Contact the admin directly via phone or WhatsApp to reset your password. Self-service password reset is not available for security reasons." },
              { q: "Which Android versions are supported?", a: "The app requires Android 8.0 (Oreo) or higher. We recommend using Android 10+ for the best experience." },
            ].map((faq, i) => (
              <AccordionItem key={i} value={`item-${i}`}>
                <AccordionTrigger className="text-left text-base">{faq.q}</AccordionTrigger>
                <AccordionContent className="text-gray-600">{faq.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-primary to-blue-700">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Get Started?</h2>
          <p className="text-blue-100 text-lg mb-8 max-w-xl mx-auto">
            Download the latest version and start managing your business more efficiently.
          </p>
          <Button size="lg" className="rounded-full bg-white text-primary hover:bg-gray-100 shadow-xl text-base px-8" asChild>
            <Link to="/download">
              <Download className="mr-2 h-5 w-5" /> Download Now
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
