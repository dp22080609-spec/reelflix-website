'use client'

const services = [
  {
    title: 'Brand Identity',
    desc: 'Bold visual systems and cinematic storytelling for modern brands.',
  },
  {
    title: 'UI/UX Design',
    desc: 'Immersive interfaces crafted for emotion, clarity, and conversion.',
  },
  {
    title: 'Web Development',
    desc: 'Premium high-performance websites with motion-first experiences.',
  },
  {
    title: 'Motion Graphics',
    desc: 'Dynamic visuals, transitions, reels, and cinematic motion systems.',
  },
]

const works = [
  {
    title: 'NOVA',
    category: 'Creative Campaign',
    image:
      'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1600&auto=format&fit=crop',
  },
  {
    title: 'AETHER',
    category: 'Fashion Experience',
    image:
      'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1600&auto=format&fit=crop',
  },
]

export default function ReelflixHomepage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#0B0B0B] text-white">
      {/* Background */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] h-[500px] w-[500px] rounded-full bg-[#FE7201]/20 blur-[140px]" />
        <div className="absolute bottom-[-10%] right-[-10%] h-[500px] w-[500px] rounded-full bg-[#286EE6]/20 blur-[140px]" />

        <div className="absolute inset-0 opacity-[0.05] bg-[linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[size:70px_70px]" />
      </div>

      {/* Navbar */}
      <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-black/20 backdrop-blur-2xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-10">
          <div className="text-2xl font-black uppercase tracking-[0.35em]">
            REELFLIX
          </div>

          <nav className="hidden md:flex items-center gap-10 text-sm uppercase tracking-[0.2em] text-zinc-400">
            <a href="#" className="hover:text-[#FE7201] transition-colors">Work</a>
            <a href="#" className="hover:text-[#286EE6] transition-colors">Services</a>
            <a href="#" className="hover:text-[#FE7201] transition-colors">Studio</a>
            <a href="#" className="hover:text-[#286EE6] transition-colors">Contact</a>
          </nav>

          <button className="rounded-full bg-gradient-to-r from-[#FE7201] to-[#286EE6] px-6 py-3 text-xs font-medium uppercase tracking-[0.2em] shadow-[0_0_50px_rgba(254,114,1,0.3)] transition-transform hover:scale-105">
            Start Project
          </button>
        </div>
      </header>

      {/* Hero */}
      <section className="relative flex min-h-screen items-center px-6 pt-36 lg:px-10">
        <div className="mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <div className="mb-8 inline-flex items-center rounded-full border border-white/10 bg-white/[0.04] px-5 py-3 text-[11px] uppercase tracking-[0.35em] text-zinc-400 backdrop-blur-xl">
              Cinematic Creative Agency
            </div>

            <h1 className="text-[4.5rem] font-black uppercase leading-[0.82] tracking-[-0.08em] sm:text-[6rem] md:text-[8rem] lg:text-[10rem]">
              WE BUILD
              <span className="block bg-gradient-to-r from-[#FE7201] via-[#ffcfaa] to-[#286EE6] bg-clip-text text-transparent">
                DIGITAL
              </span>
              EXPERIENCES
              <span className="block text-[#286EE6]">THAT MOVE.</span>
            </h1>

            <div className="mt-10 flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
              <p className="max-w-xl text-lg leading-8 text-zinc-400">
                Reelflix creates visually immersive brands, motion-driven interfaces, and
                cinematic digital experiences that feel premium, modern, and unforgettable.
              </p>

              <button className="group flex items-center gap-4 rounded-full border border-white/10 bg-white/5 px-8 py-5 text-xs uppercase tracking-[0.2em] backdrop-blur-xl transition-all hover:border-[#FE7201]/50 hover:bg-gradient-to-r hover:from-[#FE7201] hover:to-[#286EE6] hover:shadow-[0_0_60px_rgba(40,110,230,0.25)]">
                View Showreel
                <span className="transition-transform group-hover:translate-x-1">
                  ↗
                </span>
              </button>
            </div>
          </div>

          <div className="relative hidden lg:block">
            <div className="absolute -left-10 top-10 h-40 w-40 rounded-full bg-[#FE7201]/30 blur-[90px]" />

            <div className="relative overflow-hidden rounded-[40px] border border-white/10 bg-gradient-to-br from-white/[0.08] to-white/[0.02] p-4 backdrop-blur-2xl shadow-[0_0_100px_rgba(40,110,230,0.15)]">
              <img
                src="https://images.unsplash.com/photo-1522542550221-31fd19575a2d?q=80&w=1400&auto=format&fit=crop"
                alt="Creative Studio"
                className="h-[720px] w-full rounded-[28px] object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

              <div className="absolute bottom-10 left-10 right-10 flex items-end justify-between">
                <div>
                  <div className="mb-4 text-[11px] uppercase tracking-[0.35em] text-zinc-400">
                    Featured Project
                  </div>

                  <h3 className="max-w-sm text-5xl font-black uppercase leading-none tracking-[-0.06em]">
                    Motion-Led Brand Experiences
                  </h3>
                </div>

                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-r from-[#FE7201] to-[#286EE6] text-lg shadow-[0_0_40px_rgba(254,114,1,0.4)]">
                  ↗
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Metrics */}
      <section className="relative z-10 -mt-10 px-6 lg:px-10">
        <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-3">
          {[
            ['120+', 'Projects Delivered'],
            ['8M+', 'Audience Reach'],
            ['24/7', 'Creative Execution'],
          ].map(([number, text]) => (
            <div
              key={text}
              className="rounded-[32px] border border-white/10 bg-gradient-to-br from-[#FE7201]/10 via-white/[0.03] to-[#286EE6]/10 p-8 backdrop-blur-xl transition-all hover:-translate-y-2 hover:shadow-[0_0_60px_rgba(254,114,1,0.12)]"
            >
              <div className="bg-gradient-to-r from-[#FE7201] to-[#286EE6] bg-clip-text text-6xl font-black tracking-[-0.06em] text-transparent">
                {number}
              </div>

              <div className="mt-4 text-xs uppercase tracking-[0.25em] text-zinc-500">
                {text}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Services */}
      <section className="px-6 py-36 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="mb-20 flex flex-col gap-10 lg:flex-row lg:justify-between">
            <div>
              <div className="mb-5 text-[11px] uppercase tracking-[0.35em] text-zinc-500">
                Services
              </div>

              <h2 className="max-w-4xl text-5xl font-black uppercase leading-[0.88] tracking-[-0.07em] md:text-7xl">
                DESIGNING
                <span className="block bg-gradient-to-r from-[#FE7201] to-[#286EE6] bg-clip-text text-transparent">
                  VISUAL STORIES
                </span>
                THAT FEEL ALIVE.
              </h2>
            </div>

            <p className="max-w-md text-lg leading-8 text-zinc-400">
              Modern design systems and motion-driven interfaces built for ambitious brands.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            {services.map((service, index) => (
              <div
                key={service.title}
                className="group relative overflow-hidden rounded-[36px] border border-white/10 bg-gradient-to-br from-[#FE7201]/10 via-white/[0.03] to-[#286EE6]/10 p-10 transition-all duration-500 hover:-translate-y-2 hover:border-[#FE7201]/40 hover:shadow-[0_0_80px_rgba(40,110,230,0.18)]"
              >
                <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100 bg-[radial-gradient(circle_at_top_left,rgba(254,114,1,0.18),transparent_40%),radial-gradient(circle_at_bottom_right,rgba(40,110,230,0.18),transparent_40%)]" />

                <div className="relative z-10">
                  <div className="mb-10 text-sm text-zinc-600">0{index + 1}</div>

                  <h3 className="max-w-xs text-5xl font-black uppercase leading-[0.9] tracking-[-0.06em]">
                    {service.title}
                  </h3>

                  <p className="mt-8 max-w-md leading-8 text-zinc-400">
                    {service.desc}
                  </p>

                  <div className="mt-10 flex items-center gap-3 text-xs uppercase tracking-[0.25em] text-white">
                    Explore Service
                    <span className="transition-transform group-hover:translate-x-2">
                      →
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Work */}
      <section className="border-t border-white/5 px-6 py-36 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="mb-20">
            <div className="mb-5 text-[11px] uppercase tracking-[0.35em] text-zinc-500">
              Selected Work
            </div>

            <h2 className="max-w-5xl text-5xl font-black uppercase leading-[0.88] tracking-[-0.07em] md:text-7xl">
              IMMERSIVE DIGITAL
              <span className="block bg-gradient-to-r from-[#FE7201] to-[#286EE6] bg-clip-text text-transparent">
                EXPERIENCES
              </span>
              FOR MODERN BRANDS.
            </h2>
          </div>

          <div className="space-y-10">
            {works.map((work) => (
              <div
                key={work.title}
                className="group relative overflow-hidden rounded-[40px] border border-white/10"
              >
                <img
                  src={work.image}
                  alt={work.title}
                  className="h-[750px] w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

                <div className="absolute bottom-0 left-0 right-0 flex flex-col gap-8 p-10 lg:flex-row lg:items-end lg:justify-between lg:p-16">
                  <div>
                    <div className="mb-5 text-[11px] uppercase tracking-[0.35em] text-zinc-400">
                      {work.category}
                    </div>

                    <h3 className="text-7xl font-black uppercase leading-none tracking-[-0.07em] md:text-9xl">
                      {work.title}
                    </h3>
                  </div>

                  <button className="rounded-full bg-gradient-to-r from-[#FE7201] to-[#286EE6] px-7 py-4 text-xs uppercase tracking-[0.2em] shadow-[0_0_50px_rgba(254,114,1,0.25)] transition-transform hover:scale-105">
                    View Case Study
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <footer className="relative overflow-hidden border-t border-white/5 px-6 py-40 lg:px-10">
        <div className="absolute inset-0 bg-gradient-to-br from-[#FE7201]/10 via-transparent to-[#286EE6]/10" />

        <div className="relative mx-auto max-w-7xl text-center">
          <h2 className="text-[4rem] font-black uppercase leading-[0.82] tracking-[-0.08em] md:text-[7rem] lg:text-[10rem]">
            LET’S CREATE
            <span className="block bg-gradient-to-r from-[#FE7201] via-[#ffd2ab] to-[#286EE6] bg-clip-text text-transparent">
              SOMETHING
            </span>
            UNFORGETTABLE.
          </h2>

          <div className="mt-14 flex justify-center">
            <button className="rounded-full bg-gradient-to-r from-[#FE7201] to-[#286EE6] px-10 py-5 text-xs uppercase tracking-[0.25em] shadow-[0_0_70px_rgba(254,114,1,0.35)] transition-transform hover:scale-105">
              Book Discovery Call
            </button>
          </div>
        </div>
      </footer>
    </main>
  )
}
