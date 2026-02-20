'use client'

import React, { useState } from 'react'
import { Github, Linkedin, Music, Mail, ExternalLink, Code2, Zap } from 'lucide-react'

export default function Home() {
  const [hoveredLink, setHoveredLink] = useState<string | null>(null)

  const products = [
    {
      id: 'etcher',
      title: 'Etcher',
      description: 'Simple & efficient HR & project management software for small startups',
      icon: Code2,
      href: 'https://etcher.mueed.xyz',
      color: 'from-slate-900 to-black',
    },
    {
      id: 'classman',
      title: 'Classman',
      description: 'Personal schedule manager for online classes',
      icon: Zap,
      href: 'https://classman.mueed.xyz',
      color: 'from-zinc-900 to-black',
    },
    {
      id: 'parhle',
      title: 'Parhle',
      description: 'Notes & resources sharing platform for university students',
      icon: Code2,
      href: 'https://parhle.mueed.xyz',
      color: 'from-gray-900 to-black',
    },
  ]

  const links = [
    {
      id: 'linkedin',
      title: 'LinkedIn',
      description: 'Professional experience',
      icon: Linkedin,
      href: 'https://mueed.xyz/linkedin',
      color: 'from-[#0077b5] to-[#00a0dc]',
    },
    {
      id: 'github',
      title: 'GitHub',
      description: 'Code & repositories',
      icon: Github,
      href: 'https://mueed.xyz/github',
      color: 'from-[#24292e] to-[#404448]',
    },
    {
      id: 'discord',
      title: 'Discord',
      description: 'Join my server',
      icon: Mail,
      href: 'https://mueed.xyz/discord',
      color: 'from-[#5865F2] to-[#7289da]',
    },
    {
      id: 'instagram',
      title: 'Instagram',
      description: 'Visual ventures',
      icon: Mail,
      href: 'https://mueed.xyz/instagram',
      color: 'from-[#833ab4] via-[#fd1d1d] to-[#fcb045]',
    },
    {
      id: 'spotify',
      title: 'Spotify',
      description: 'Music I produced',
      icon: Music,
      href: 'https://mueed.xyz/spotify',
      color: 'from-[#1DB954] to-[#191414]',
    },
    {
      id: 'contact',
      title: 'Get in Touch',
      description: 'Send me an email',
      icon: Mail,
      href: 'mailto:personal.abdulmueed@gmail.com',
      color: 'from-zinc-800 to-black',
    },
  ]

  return (
    <div className="min-h-screen bg-background text-foreground overflow-hidden texture-grid-me">
      {/* Grid Background Pattern */}
      <div className="fixed inset-0 grid-pattern pointer-events-none z-0" />

      {/* Animated gradient orbs */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-1/4 left-1/4 w-80 h-80 bg-black rounded-full mix-blend-darken filter blur-3xl opacity-2 animate-float-1" />
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-black rounded-full mix-blend-darken filter blur-3xl opacity-2 animate-float-2" />
      </div>

      <div className="relative z-10">
        {/* Hero Section */}
        <section className="max-w-6xl mx-auto px-3 sm:px-6 lg:px-8 py-8 sm:py-16 lg:py-24">
          <div className="space-y-4 sm:space-y-6 lg:space-y-8 mb-12 sm:mb-20">
            <div className="space-y-4">
              <div className="relative inline-block group">
                <div className="absolute -inset-2 bg-black skew-x-9 group-hover:skew-x-4 transition-transform duration-300" />
                <h1 className="relative z-10 text-5xl sm:text-7xl lg:text-9xl font-black tracking-tighter leading-none text-white px-4 sm:px-6 py-2" style={{ fontFamily: 'var(--font-space-grotesk)' }}>
                  MUEED
                </h1>
              </div>
              <p className="text-sm sm:text-lg lg:text-xl text-black font-black uppercase tracking-widest pl-1" style={{ fontFamily: 'var(--font-space-grotesk)' }}>
                Co-founder @ ExtensorLabs — Software Engineer
              </p>
            </div>
          </div>

          {/* Products Section - Frosted Glass */}
          <div className="mb-12 sm:mb-20 p-6 sm:p-8 lg:p-10 rounded-none bg-neutral-100/20 backdrop-blur-[2px] shadow-sm shadow-gray-800/10">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-black mb-6 sm:mb-8" style={{ fontFamily: 'var(--font-space-grotesk)' }}>
              My Products
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
              {products.map((product) => {
                const Icon = product.icon
                return (
                  <div className="relative bg-[#fcb345] w-full h-full" key={product.id}>
                    <a
                      href={product.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      onMouseEnter={() => setHoveredLink(product.id)}
                      onMouseLeave={() => setHoveredLink(null)}
                      className="group block w-full h-full relative overflow-hidden rounded-none border-2 border-black bg-white p-4 sm:p-6 lg:p-7 transition-all duration-150 hover:-translate-x-1.5 hover:-translate-y-1.5 hover:scale-95 hover:bg-black hover:text-white cursor-pointer active:scale-85 hover:-skew-x-2 hover:skew-y-1"
                      style={{
                        transform: hoveredLink === product.id ? 'perspective(1000px) rotateX(2deg) rotateZ(-1deg)' : 'none',
                      }}
                    >
                      {/* Aggressive gradient on hover */}
                      <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-200 bg-gradient-to-br ${product.color}`} />

                      {/* Content */}
                      <div className=" relative z-10 flex flex-col h-full">
                        <div className="flex items-center gap-3 mb-4 sm:mb-5">
                          <Icon className="w-6 sm:w-7 h-6 sm:h-7 flex-shrink-0 text-black group-hover:text-white transition-colors duration-150" />
                          <h3 className="text-lg sm:text-xl lg:text-2xl font-black" style={{ fontFamily: 'var(--font-space-grotesk)' }}>
                            {product.title}
                          </h3>
                        </div>
                        <p className="text-xs sm:text-sm text-black/60 group-hover:text-white/80 transition-colors duration-150 mb-4">
                          {product.description}
                        </p>
                        <div className="flex items-center gap-2 mt-auto text-xs font-medium text-black/50 group-hover:text-white/70 transition-colors duration-150">
                          <span>Visit</span>
                          <ExternalLink className="w-3.5 h-3.5" />
                        </div>
                      </div>
                    </a>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Connect with Me Section - Frosted Glass */}
          <div className="mb-12 sm:mb-20 p-6 sm:p-8 lg:p-10 rounded-none bg-neutral-100/20 backdrop-blur-[2px] shadow-sm shadow-gray-800/10">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-black mb-6 sm:mb-8" style={{ fontFamily: 'var(--font-space-grotesk)' }}>
              Me
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
              {links.map((link) => {
                const Icon = link.icon
                return (
                  <a
                    key={link.id}
                    href={link.href}
                    target={link.href.startsWith('http') ? '_blank' : undefined}
                    rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    onMouseEnter={() => setHoveredLink(link.id)}
                    onMouseLeave={() => setHoveredLink(null)}
                    className="group relative overflow-hidden rounded-none border-2 border-black bg-white p-4 sm:p-5 lg:p-6 transition-all duration-150 hover:scale-95 hover:bg-black hover:text-white cursor-pointer active:scale-85 hover:-skew-x-2 hover:skew-y-1"
                    style={{
                      transform: hoveredLink === link.id ? 'perspective(1000px) rotateX(2deg) rotateZ(-1deg)' : 'none',
                    }}
                  >
                    {/* Sharp gradient background on hover */}
                    <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-200 bg-gradient-to-br ${link.color}`} />

                    {/* Content */}
                    <div className="relative z-10 flex flex-col">
                      <div className="flex items-center gap-2.5 mb-2">
                        <Icon className="w-5 sm:w-6 h-5 sm:h-6 text-black group-hover:text-white transition-colors duration-150 flex-shrink-0" />
                        <h3 className="text-base sm:text-lg font-black" style={{ fontFamily: 'var(--font-space-grotesk)' }}>
                          {link.title}
                        </h3>
                      </div>
                      <p className="text-xs sm:text-sm text-black/55 group-hover:text-white/75 transition-colors duration-150">
                        {link.description}
                      </p>
                    </div>
                  </a>
                )
              })}
            </div>
          </div>

          {/* About Section - Frosted Glass */}
          <div className="p-6 sm:p-8 lg:p-10 rounded-none mb-12 sm:mb-20 bg-neutral-100/20 backdrop-blur-[2px] shadow-sm shadow-gray-800/10">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-black mb-4 sm:mb-6" style={{ fontFamily: 'var(--font-space-grotesk)' }}>
              About Me
            </h2>
            <div className="space-y-4 sm:space-y-6">
              <p className="text-sm sm:text-base lg:text-lg text-black/70 leading-relaxed">
                I'm Abdul Mueed, a Software Architect, Frontend Engineer, and Co-Founder with nearly a decade of experience building scalable systems and polished digital products. I operate at the intersection of design, code, and architecture — where most people choose one, I've mastered the overlap.
              </p>
              <p className="text-sm sm:text-base lg:text-lg text-black/70 leading-relaxed">
                As CTO of ExtensorLabs, I lead the engineering behind an AI-powered SaaS platform, driving everything from system architecture to product delivery. I've built and led cross-functional teams, making technical decisions that balance speed, scalability, and user experience.
              </p>
              <p className="text-sm sm:text-base lg:text-lg text-black/70 leading-relaxed">
                When I'm not building, I teach — taking absolute beginners through the full journey of becoming job-ready full-stack developers.
              </p>
              <div className="relative mt-12 group max-w-fit">
                {/* Neon Offset Border */}
                <div className="absolute inset-0 border-[6px] border-black translate-x-2 translate-y-2 group-hover:translate-x-1 group-hover:translate-y-1 transition-transform duration-200" />
                <div className="absolute inset-0 bg-[#fcb345] -z-10 translate-x-4 translate-y-4 opacity-70 group-hover:translate-x-3 group-hover:translate-y-3 transition-transform duration-200" />

                <div className="relative z-10 bg-white border-[4px] border-black p-5 sm:p-7 rotate-[-1deg] group-hover:rotate-0 transition-transform duration-300">
                  <p className="text-xl sm:text-2xl lg:text-3xl font-black tracking-tight text-black leading-none" style={{ fontFamily: 'var(--font-space-grotesk)' }}>
                    Design. Code. Architecture.<br />
                    <span className="text-black/40">All three, at once.</span>
                  </p>
                </div>
              </div>
              <div className="pt-4 sm:pt-6">
                <h3 className="text-base sm:text-lg font-black mb-3 sm:mb-4" style={{ fontFamily: 'var(--font-space-grotesk)' }}>
                  Skills & Expertise
                </h3>
                <div className="flex flex-wrap gap-2 sm:gap-3">
                  {['React', 'Next.js', 'TypeScript', 'Node.js', 'PostgreSQL', 'Product Design', 'Full-Stack Development'].map((skill) => (
                    <span
                      key={skill}
                      className="px-3 sm:px-4 py-1.5 sm:py-2 bg-white border-2 border-black text-xs sm:text-sm font-semibold text-black rounded-none"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="max-w-6xl mx-auto px-3 sm:px-6 lg:px-8 py-6 sm:py-8 lg:py-10 border-t-2 border-black/10 mt-12 sm:mt-16 lg:mt-20">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs sm:text-sm text-black/50">
            <p>© 2026 Abdul Mueed. Building with code & creativity.</p>
            <div className="flex items-center gap-2.5">
              {[
                { icon: Github, href: 'https://mueed.xyz/github' },
                { icon: Linkedin, href: 'https://mueed.xyz/linkedin' },
                { icon: Mail, href: 'mailto:personal.abdulmueed@gmail.com' },
              ].map(({ icon: Icon, href }) => (
                <a
                  key={href}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 sm:w-9 sm:h-9 rounded-none border-2 border-black/15 flex items-center justify-center text-black/50 hover:text-white hover:border-black hover:bg-black transition-all duration-150 hover:scale-95 active:scale-85"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}
