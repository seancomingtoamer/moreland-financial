import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-navy-dark/90 backdrop-blur-md border-b border-gold/10">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gold/20 flex items-center justify-center">
              <span className="text-gold font-bold text-lg">M</span>
            </div>
            <div>
              <span className="text-gold font-semibold text-lg tracking-wide">
                MORELAND
              </span>
              <span className="text-foreground/60 text-sm block -mt-1">
                Financial Services
              </span>
            </div>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a
              href="#services"
              className="text-foreground/70 hover:text-gold transition-colors text-sm"
            >
              Services
            </a>
            <a
              href="#about"
              className="text-foreground/70 hover:text-gold transition-colors text-sm"
            >
              About
            </a>
            <a
              href="#process"
              className="text-foreground/70 hover:text-gold transition-colors text-sm"
            >
              Process
            </a>
            <a
              href="#contact"
              className="bg-gold text-navy-dark px-5 py-2 rounded font-semibold text-sm hover:bg-gold-light transition-colors"
            >
              Free Consultation
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-navy-dark via-navy to-navy-light opacity-80" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl" />

        <div className="relative max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-block px-3 py-1 rounded-full bg-gold/10 text-gold text-xs font-semibold tracking-wider mb-6 border border-gold/20">
              TRUSTED FINANCIAL ADVOCATE
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Take Control of{" "}
              <span className="text-gradient-gold">Your Credit.</span>
              <br />
              Build Your{" "}
              <span className="text-gradient-gold">Future.</span>
            </h1>
            <p className="text-foreground/70 text-lg mb-8 leading-relaxed max-w-lg">
              Professional credit repair, tax preparation, and financial
              consulting for hardworking individuals and families in Atlanta.
              Led by a veteran, community leader, and man of faith.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#contact"
                className="bg-gold text-navy-dark px-8 py-4 rounded font-bold text-center hover:bg-gold-light transition-colors text-lg"
              >
                Get Your Free Consultation
              </a>
              <a
                href="tel:4705340821"
                className="border border-gold/30 text-gold px-8 py-4 rounded font-semibold text-center hover:bg-gold/10 transition-colors text-lg"
              >
                Call (470) 534-0821
              </a>
            </div>
          </div>

          <div className="flex justify-center">
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-br from-gold/30 to-gold/5 rounded-2xl blur-sm" />
              <div className="relative rounded-2xl overflow-hidden border border-gold/20 glow-gold">
                <Image
                  src="/alonzo.png"
                  alt="Bishop Alonzo Moreland"
                  width={480}
                  height={480}
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="bg-navy-light/50 border-y border-gold/10 py-8">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { number: "10+", label: "Years Experience" },
              { number: "500+", label: "Clients Helped" },
              { number: "100+", label: "Points Avg. Increase" },
              { number: "5th", label: "District Community" },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="text-gold text-3xl font-bold">
                  {stat.number}
                </div>
                <div className="text-foreground/50 text-sm mt-1">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our <span className="text-gradient-gold">Services</span>
            </h2>
            <p className="text-foreground/60 max-w-2xl mx-auto">
              Comprehensive financial solutions to help you build wealth,
              repair credit, and secure your financial future.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Credit Repair */}
            <div className="bg-navy-light/50 border border-gold/10 rounded-xl p-8 card-hover">
              <div className="w-14 h-14 rounded-lg bg-gold/10 flex items-center justify-center mb-6">
                <svg
                  className="w-7 h-7 text-gold"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-gold">
                Credit Repair
              </h3>
              <p className="text-foreground/60 leading-relaxed mb-4">
                Dispute inaccuracies, negotiate with creditors, and develop a
                personalized strategy to raise your credit score. We fight for
                every point.
              </p>
              <ul className="space-y-2 text-sm text-foreground/50">
                <li className="flex items-center gap-2">
                  <span className="text-gold">&#10003;</span> Credit report analysis
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-gold">&#10003;</span> Dispute filing &amp; follow-up
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-gold">&#10003;</span> Creditor negotiations
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-gold">&#10003;</span> Monthly progress reports
                </li>
              </ul>
            </div>

            {/* Tax Preparation */}
            <div className="bg-navy-light/50 border border-gold/10 rounded-xl p-8 card-hover">
              <div className="w-14 h-14 rounded-lg bg-gold/10 flex items-center justify-center mb-6">
                <svg
                  className="w-7 h-7 text-gold"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-gold">
                Tax Preparation
              </h3>
              <p className="text-foreground/60 leading-relaxed mb-4">
                Accurate, affordable tax filing for individuals and small
                businesses. Maximize your refund and stay compliant year-round.
              </p>
              <ul className="space-y-2 text-sm text-foreground/50">
                <li className="flex items-center gap-2">
                  <span className="text-gold">&#10003;</span> Individual &amp; business returns
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-gold">&#10003;</span> Maximum refund guarantee
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-gold">&#10003;</span> Year-round tax planning
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-gold">&#10003;</span> IRS resolution assistance
                </li>
              </ul>
            </div>

            {/* Financial Consulting */}
            <div className="bg-navy-light/50 border border-gold/10 rounded-xl p-8 card-hover">
              <div className="w-14 h-14 rounded-lg bg-gold/10 flex items-center justify-center mb-6">
                <svg
                  className="w-7 h-7 text-gold"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-gold">
                Financial Consulting
              </h3>
              <p className="text-foreground/60 leading-relaxed mb-4">
                One-on-one guidance to build wealth, manage debt, and create a
                financial roadmap for your family&apos;s future.
              </p>
              <ul className="space-y-2 text-sm text-foreground/50">
                <li className="flex items-center gap-2">
                  <span className="text-gold">&#10003;</span> Budgeting &amp; debt management
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-gold">&#10003;</span> Savings &amp; investment strategy
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-gold">&#10003;</span> Home buying preparation
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-gold">&#10003;</span> Business credit building
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section
        id="about"
        className="py-20 px-6 bg-navy-light/30 border-y border-gold/10"
      >
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Meet <span className="text-gradient-gold">Bishop Moreland</span>
            </h2>
            <p className="text-foreground/70 leading-relaxed mb-4">
              Bishop Alonzo Moreland is a proud Atlanta native, U.S. veteran,
              pastor, union organizer, and dedicated community advocate serving
              the Grove Park neighborhood and beyond.
            </p>
            <p className="text-foreground/70 leading-relaxed mb-4">
              With years of experience in financial services and a deep
              commitment to empowering families, Bishop Moreland founded
              Moreland Financial Services to help everyday people take control
              of their credit, their taxes, and their financial futures.
            </p>
            <p className="text-foreground/70 leading-relaxed mb-6">
              As the shepherd of{" "}
              <strong className="text-gold">Holy House of Faith, Inc.</strong>{" "}
              and a union organizer with{" "}
              <strong className="text-gold">UAMPU</strong>, Bishop Moreland
              understands the real struggles working families face — and
              brings that same fight to the financial table.
            </p>

            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center gap-3 bg-navy/50 rounded-lg p-3 border border-gold/10">
                <span className="text-2xl">🎖️</span>
                <span className="text-sm font-medium text-foreground/80">U.S. Veteran</span>
              </div>
              <div className="flex items-center gap-3 bg-navy/50 rounded-lg p-3 border border-gold/10">
                <span className="text-2xl">⛪</span>
                <span className="text-sm font-medium text-foreground/80">Bishop &amp; Pastor</span>
              </div>
              <div className="flex items-center gap-3 bg-navy/50 rounded-lg p-3 border border-gold/10">
                <span className="text-2xl">✊</span>
                <span className="text-sm font-medium text-foreground/80">Union Organizer</span>
              </div>
              <div className="flex items-center gap-3 bg-navy/50 rounded-lg p-3 border border-gold/10">
                <span className="text-2xl">🏘️</span>
                <span className="text-sm font-medium text-foreground/80">Grove Park, ATL</span>
              </div>
            </div>
          </div>

          <div className="flex justify-center">
            <div className="bg-navy/50 border border-gold/10 rounded-xl p-8 max-w-md">
              <div className="text-gold text-5xl mb-4">&ldquo;</div>
              <p className="text-foreground/80 text-lg italic leading-relaxed">
                I believe every person deserves a second chance with their
                finances. Your credit score doesn&apos;t define you — but
                repairing it can change your life. That&apos;s what we do here.
              </p>
              <div className="mt-6 flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-gold/20 flex items-center justify-center">
                  <span className="text-gold font-bold">AM</span>
                </div>
                <div>
                  <div className="font-semibold text-gold">
                    Bishop Alonzo Moreland
                  </div>
                  <div className="text-foreground/50 text-sm">
                    Founder, Moreland Financial Services
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="process" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              How It <span className="text-gradient-gold">Works</span>
            </h2>
            <p className="text-foreground/60 max-w-2xl mx-auto">
              A simple, transparent process to get your finances on track.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Free Consultation",
                desc: "Call or fill out the form. We\u2019ll discuss your situation and goals at no cost.",
              },
              {
                step: "02",
                title: "Credit Analysis",
                desc: "We pull your reports, identify errors, and create a personalized action plan.",
              },
              {
                step: "03",
                title: "Dispute & Repair",
                desc: "We file disputes, negotiate with creditors, and work to remove negative items.",
              },
              {
                step: "04",
                title: "Results & Growth",
                desc: "Watch your score climb. We provide ongoing support to keep you on track.",
              },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="w-16 h-16 rounded-full bg-gold/10 border border-gold/20 flex items-center justify-center mx-auto mb-4">
                  <span className="text-gold font-bold text-xl">
                    {item.step}
                  </span>
                </div>
                <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                <p className="text-foreground/50 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-6 bg-gradient-to-r from-navy-dark via-navy to-navy-dark border-y border-gold/10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Fix Your{" "}
            <span className="text-gradient-gold">Credit?</span>
          </h2>
          <p className="text-foreground/60 mb-8 text-lg">
            Don&apos;t lose when you can win. Take the first step today — your
            free consultation is one call away.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:4705340821"
              className="bg-gold text-navy-dark px-10 py-4 rounded font-bold text-lg hover:bg-gold-light transition-colors"
            >
              Call (470) 534-0821
            </a>
            <a
              href="#contact"
              className="border border-gold/30 text-gold px-10 py-4 rounded font-bold text-lg hover:bg-gold/10 transition-colors"
            >
              Send a Message
            </a>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Get In <span className="text-gradient-gold">Touch</span>
            </h2>
            <p className="text-foreground/60 mb-8 leading-relaxed">
              Ready to take control of your financial future? Reach out for a
              free, no-obligation consultation. We serve clients throughout the
              Atlanta metro area.
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-gold/10 flex items-center justify-center shrink-0">
                  <svg
                    className="w-6 h-6 text-gold"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                </div>
                <div>
                  <div className="text-sm text-foreground/50">Phone</div>
                  <a
                    href="tel:4705340821"
                    className="text-gold font-semibold hover:text-gold-light"
                  >
                    (470) 534-0821
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-gold/10 flex items-center justify-center shrink-0">
                  <svg
                    className="w-6 h-6 text-gold"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <div>
                  <div className="text-sm text-foreground/50">Email</div>
                  <a
                    href="mailto:uampu100@gmail.com"
                    className="text-gold font-semibold hover:text-gold-light"
                  >
                    uampu100@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-gold/10 flex items-center justify-center shrink-0">
                  <svg
                    className="w-6 h-6 text-gold"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
                <div>
                  <div className="text-sm text-foreground/50">Location</div>
                  <div className="font-semibold">Grove Park, Atlanta, GA</div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-navy-light/50 border border-gold/10 rounded-xl p-8">
            <h3 className="text-xl font-bold mb-6 text-gold">
              Request a Free Consultation
            </h3>
            <form className="space-y-5">
              <div>
                <label className="block text-sm text-foreground/60 mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  className="w-full bg-navy/50 border border-gold/10 rounded-lg px-4 py-3 text-foreground placeholder-foreground/30 focus:outline-none focus:border-gold/40"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-sm text-foreground/60 mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  className="w-full bg-navy/50 border border-gold/10 rounded-lg px-4 py-3 text-foreground placeholder-foreground/30 focus:outline-none focus:border-gold/40"
                  placeholder="(xxx) xxx-xxxx"
                />
              </div>
              <div>
                <label className="block text-sm text-foreground/60 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full bg-navy/50 border border-gold/10 rounded-lg px-4 py-3 text-foreground placeholder-foreground/30 focus:outline-none focus:border-gold/40"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label className="block text-sm text-foreground/60 mb-2">
                  What do you need help with?
                </label>
                <select className="w-full bg-navy/50 border border-gold/10 rounded-lg px-4 py-3 text-foreground focus:outline-none focus:border-gold/40">
                  <option value="">Select a service</option>
                  <option value="credit-repair">Credit Repair</option>
                  <option value="tax-prep">Tax Preparation</option>
                  <option value="financial-consulting">Financial Consulting</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div>
                <label className="block text-sm text-foreground/60 mb-2">
                  Tell us more
                </label>
                <textarea
                  rows={4}
                  className="w-full bg-navy/50 border border-gold/10 rounded-lg px-4 py-3 text-foreground placeholder-foreground/30 focus:outline-none focus:border-gold/40 resize-none"
                  placeholder="Briefly describe your situation..."
                />
              </div>
              <button
                type="submit"
                className="w-full bg-gold text-navy-dark py-4 rounded-lg font-bold text-lg hover:bg-gold-light transition-colors"
              >
                Submit Request
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-navy-dark border-t border-gold/10 py-10 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-gold/20 flex items-center justify-center">
              <span className="text-gold font-bold text-sm">M</span>
            </div>
            <span className="text-foreground/50 text-sm">
              &copy; 2026 Moreland Financial Services. All rights reserved.
            </span>
          </div>
          <div className="flex items-center gap-6 text-sm text-foreground/40">
            <span>Grove Park, Atlanta, GA</span>
            <a
              href="tel:4705340821"
              className="hover:text-gold transition-colors"
            >
              (470) 534-0821
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
