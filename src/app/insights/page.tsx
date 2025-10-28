"use client";

import Footer from "@/components/Footer";
import {
  BookOpen,
  Briefcase,
  FileText,
  Newspaper,
  Radio,
  Rocket,
} from "lucide-react";

const iconMap = {
  BookOpen,
  Radio,
  Rocket,
  Briefcase,
};

interface Category {
  name: string;
  description: string;
  icon: keyof typeof iconMap;
}

export default function InsightsPage() {
  // Placeholder content - this will be populated with actual articles
  const categories: Category[] = [
    {
      name: "IR Strategy",
      description: "Playbooks, best practices, founder guides",
      icon: "BookOpen",
    },
    {
      name: "Market Signal",
      description: "Commentary on trends, funding rounds, disclosure standards",
      icon: "Radio",
    },
    {
      name: "Product Updates",
      description: "New features, platform enhancements, partnerships",
      icon: "Rocket",
    },
    {
      name: "Case Studies",
      description: "Real stories from clients using Beacon IR",
      icon: "Briefcase",
    },
  ];

  const exampleArticles = [
    {
      title: "Why Startups Should Launch Their IR Site Before Series B",
      category: "IR Strategy",
      excerpt:
        "Building investor trust early sets your company apart. Here's how to get started.",
      date: "Coming Soon",
    },
    {
      title: "Investor Updates That Actually Get Read",
      category: "IR Strategy",
      excerpt:
        "Structure your communications for maximum engagement and clarity.",
      date: "Coming Soon",
    },
    {
      title: "The New Rules of Market Signal",
      category: "Market Signal",
      excerpt: "How modern companies communicate value in noisy markets.",
      date: "Coming Soon",
    },
    {
      title: "How [Client] Launched an IR Site in 48 Hours",
      category: "Case Studies",
      excerpt:
        "A real-world look at rapid IR deployment and the impact it creates.",
      date: "Coming Soon",
    },
  ];

  const handleBookCall = () => {
    window.open("https://calendly.com/beacon-ir", "_blank");
  };

  return (
    <div className="min-h-screen bg-deep-navy">
      {/* Hero Section */}
      <section className="relative py-32 px-4 sm:px-6 lg:px-8 pt-40 overflow-hidden">
        {/* Enhanced Animated Gradient Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-deep-navy via-navy-light/30 to-deep-navy"></div>
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-beacon-gold/10 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-signal-blue/5 rounded-full blur-3xl animate-pulse animation-delay-2000"></div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <div className="inline-block mb-6">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-3xl bg-gradient-to-br from-beacon-gold/30 to-transparent mb-6 group hover:scale-110 transition-transform duration-300">
              <Newspaper className="w-10 h-10 text-accent-gold" />
            </div>
          </div>
          <h1 className="heading-main mb-8">Beacon IR Insights</h1>
          <p className="text-body-lg max-w-4xl mx-auto leading-relaxed">
            Perspectives on investor relations, storytelling, and signal
            strategy.
          </p>
        </div>
      </section>

      {/* Content Categories */}
      <section className="relative py-40 px-4 sm:px-6 lg:px-8 bg-deep-navy overflow-hidden">
        {/* Gradient Divider */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-beacon-gold/40 to-transparent animate-pulse"></div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="heading-section mb-6">Content Categories</h2>
            <p className="text-body-lg max-w-3xl mx-auto">
              Strategic insights and practical guidance for modern investor
              relations.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {categories.map((category, index) => {
              const Icon = iconMap[category.icon];
              if (!Icon) return null;
              return (
                <div
                  key={index}
                  className="card-glass rounded-xl p-8 group hover:shadow-xl hover:shadow-beacon-gold/10 transition-all duration-300"
                >
                  <div className="mb-6 text-center flex justify-center">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-beacon-gold/20 to-transparent group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-8 h-8 text-accent-gold" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-beacon-gold mb-4 text-center">
                    {category.name}
                  </h3>
                  <p className="text-stone-gray text-center leading-relaxed">
                    {category.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Example Articles */}
      <section className="relative py-40 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-3xl bg-gradient-to-br from-beacon-gold/30 to-transparent mb-6 group hover:scale-110 transition-transform duration-300">
              <FileText className="w-10 h-10 text-accent-gold" />
            </div>
            <h2 className="heading-section mb-6">Featured Articles</h2>
            <p className="text-body-lg max-w-3xl mx-auto">
              Deep dives on IR strategy, market trends, and best practices.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {exampleArticles.map((article, index) => (
              <div
                key={index}
                className="card-glass rounded-xl p-8 group hover:shadow-xl hover:shadow-beacon-gold/10 transition-all duration-300"
              >
                <div className="mb-4">
                  <span className="text-beacon-gold text-sm font-semibold uppercase tracking-wider">
                    {article.category}
                  </span>
                  <span className="text-stone-gray text-sm ml-4">
                    {article.date}
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-pure-white mb-4 leading-snug">
                  {article.title}
                </h3>
                <p className="text-stone-gray leading-relaxed mb-6">
                  {article.excerpt}
                </p>
                <button
                  onClick={handleBookCall}
                  className="text-beacon-gold hover:text-beacon-gold/80 font-semibold text-sm uppercase tracking-wider transition-colors duration-200"
                >
                  Read More →
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-40 px-4 sm:px-6 lg:px-8 bg-deep-navy overflow-hidden">
        {/* Gradient Divider */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-beacon-gold/40 to-transparent animate-pulse"></div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="card-glass rounded-2xl p-12">
            <h2 className="heading-section mb-8">
              Ready to build your investor signal?
            </h2>
            <p className="text-body-lg mb-12 max-w-2xl mx-auto">
              Start with a free demo and see how Beacon IR can transform your
              investor communications.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button onClick={handleBookCall} className="btn-primary">
                Launch Your IR Site
              </button>
              <button onClick={handleBookCall} className="btn-secondary">
                Book a Demo
              </button>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
