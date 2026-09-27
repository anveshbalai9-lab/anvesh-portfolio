import MobileMenu from "../components/MobileMenu";
export default function Home() {
  const skills = [
    "Python",
    "SQL",
    "MySQL",
    "Excel",
    "Power BI",
    "Data Cleaning",
    "Data Manipulation",
    "HTML",
    "CSS",
    "JavaScript",
    "Git",
    "GitHub",
  ];

  return (
    <main className="min-h-screen bg-[#050505] text-white">

      {/* Navbar */}
      <nav
        aria-label="Main navigation"
        className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-black/70 backdrop-blur-xl"
      >
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-6 py-5">
          <h1 className="text-xl font-bold">
            Bala<span className="text-cyan-400">Anvesh</span>
          </h1>

          <div className="hidden gap-8 text-sm text-gray-300 md:flex">
            <a href="#home" className="hover:text-cyan-400">Home</a>
            <a href="#about" className="hover:text-cyan-400">About</a>
            <a href="#skills" className="hover:text-cyan-400">Skills</a>
            <a href="#projects" className="hover:text-cyan-400">Projects</a>
            <a href="#contact" className="hover:text-cyan-400">Contact</a>
          </div>

          <div className="hidden items-center gap-4 md:flex">
            <a
              href="#contact"
              className="rounded-full border border-cyan-400/40 px-5 py-2 text-sm text-cyan-400 transition hover:bg-cyan-400 hover:text-black"
            >
              Contact Me
            </a>
          </div>

          <div className="md:hidden">
            <MobileMenu />
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section
        id="home"
        className="relative flex min-h-screen items-center justify-center overflow-hidden px-6"
      >
        <div className="absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/10 blur-3xl" />

        <div className="relative z-10 mx-auto max-w-4xl text-center">
          <div className="mb-10 flex justify-center">
            <div className="relative">
              <div className="absolute -inset-1 rounded-full bg-cyan-400/30 blur-xl" />

              <img
                src="/profile.jpg"
                alt="Balai Anvesh"
                className="relative h-40 w-40 rounded-full border-2 border-cyan-400/60 object-cover shadow-2xl md:h-48 md:w-48"
              />
            </div>
          </div>

          <p className="mb-5 text-sm uppercase tracking-[0.35em] text-cyan-400">
            Data Analyst Portfolio
          </p>

          <h2 className="text-5xl font-extrabold leading-tight md:text-7xl">
            Balai <span className="text-cyan-400">Anvesh</span>
          </h2>

          <h3 className="mt-5 text-2xl font-semibold text-gray-200 md:text-3xl">
            Aspiring Data Analyst
          </h3>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-gray-400 md:text-lg">
            B.Tech Computer Science and Engineering student with practical
            knowledge of Python, SQL, Excel and Power BI, focused on turning
            data into clear and actionable insights.
          </p>

          <div className="mt-9 flex flex-wrap justify-center gap-4">
            <a
              href="#projects"
              className="rounded-full bg-cyan-400 px-7 py-3 font-semibold text-black transition hover:scale-105"
            >
              View Projects
            </a>

            <a
              href="mailto:anveshbalai9@gmail.com"
              className="rounded-full border border-white/20 px-7 py-3 font-semibold text-white transition hover:border-cyan-400 hover:text-cyan-400"
            >
              Get In Touch
            </a>
          </div>

          <div className="mt-14 flex flex-wrap justify-center gap-3">
            {["Python", "SQL", "Excel", "Power BI"].map((skill) => (
              <span
                key={skill}
                className="rounded-full border border-white/10 bg-white/5 px-5 py-2 text-sm text-gray-300 backdrop-blur"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
<section id="about" className="border-t border-white/10 px-6 py-24">
  <div className="mx-auto max-w-6xl">
    <div className="mb-14 text-center">
      <p className="text-sm uppercase tracking-[0.3em] text-cyan-400">
        About Me
      </p>

      <h2 className="mt-3 text-4xl font-bold md:text-5xl">
        Turning Data Into{" "}
        <span className="text-cyan-400">Insights</span>
      </h2>
    </div>

    <div className="grid gap-10 md:grid-cols-2 md:items-center">
      <div>
        <h3 className="text-2xl font-semibold text-white">
          Who I Am
        </h3>

        <p className="mt-5 leading-8 text-gray-400">
          I am a B.Tech Computer Science and Engineering student aspiring
          to build a career as a Data Analyst. I have practical knowledge
          of Python, SQL, Excel and Power BI, with a focus on data cleaning,
          data manipulation, analysis and dashboard development.
        </p>

        <p className="mt-5 leading-8 text-gray-400">
          I enjoy working with data, identifying meaningful patterns and
          transforming information into clear and actionable insights.
          Along with data analytics, I have academic project experience
          with JavaScript, PHP, MySQL and web technologies.
        </p>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:border-cyan-400/40">
          <h4 className="text-lg font-semibold text-cyan-400">
            Python
          </h4>
          <p className="mt-2 text-sm text-gray-400">
            Data analysis and problem solving
          </p>
        </div>

        <div className="rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:border-cyan-400/40">
          <h4 className="text-lg font-semibold text-cyan-400">
            SQL
          </h4>
          <p className="mt-2 text-sm text-gray-400">
            Querying and working with databases
          </p>
        </div>

        <div className="rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:border-cyan-400/40">
          <h4 className="text-lg font-semibold text-cyan-400">
            Power BI
          </h4>
          <p className="mt-2 text-sm text-gray-400">
            Dashboard and data visualization
          </p>
        </div>

        <div className="rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:border-cyan-400/40">
          <h4 className="text-lg font-semibold text-cyan-400">
            Excel
          </h4>
          <p className="mt-2 text-sm text-gray-400">
            Data cleaning and manipulation
          </p>
        </div>
      </div>
    </div>
  </div>
</section>

      {/* Skills */}
<section id="skills" className="border-t border-white/10 px-6 py-24">
  <div className="mx-auto max-w-6xl">
    <div className="mb-14 text-center">
      <p className="text-sm uppercase tracking-[0.3em] text-cyan-400">
        Technical Skills
      </p>

      <h2 className="mt-3 text-4xl font-bold md:text-5xl">
        My <span className="text-cyan-400">Toolkit</span>
      </h2>
    </div>

    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
      {[
        ["Python", "Programming & Data Analysis"],
        ["SQL", "Queries & Database Management"],
        ["MySQL", "Relational Database"],
        ["Excel", "Data Cleaning & Manipulation"],
        ["Power BI", "Dashboards & Visualization"],
        ["HTML & CSS", "Web Development"],
        ["JavaScript", "Interactive Web Applications"],
        ["Git & GitHub", "Version Control"],
      ].map(([skill, description]) => (
        <div
          key={skill}
          className="rounded-2xl border border-white/10 bg-white/5 p-6 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/40 hover:bg-white/10"
        >
          <h3 className="text-lg font-semibold text-cyan-400">
            {skill}
          </h3>

          <p className="mt-2 text-sm leading-6 text-gray-400">
            {description}
          </p>
        </div>
      ))}
    </div>
  </div>
</section>
           {/* Projects */}
<section id="projects" className="border-t border-white/10 px-6 py-24">
  <div className="mx-auto max-w-6xl">
    <div className="mb-14 text-center">
      <p className="text-sm uppercase tracking-[0.3em] text-cyan-400">
        Projects
      </p>

      <h2 className="mt-3 text-4xl font-bold md:text-5xl">
        Featured <span className="text-cyan-400">Projects</span>
      </h2>
    </div>

    <div className="grid gap-6 md:grid-cols-2">
      {/* Project 1 */}
      <div className="rounded-2xl border border-white/10 bg-white/5 p-7 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/40">
        <div className="mb-5 flex items-center justify-between">
          <span className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-xs text-cyan-400">
            Web Application
          </span>

          <span className="text-2xl">⌘</span>
        </div>

        <h3 className="text-2xl font-bold text-white">
          Scientific Voice Calculator
        </h3>

        <p className="mt-4 leading-7 text-gray-400">
          An interactive scientific calculator with voice input using the
          Web Speech API. It supports arithmetic, trigonometric,
          logarithmic, square-root and power operations with a PHP and
          MySQL backend.
        </p>

        <div className="mt-6 flex flex-wrap gap-2">
          {[
            "JavaScript",
            "PHP",
            "MySQL",
            "Web Speech API",
            "XAMPP",
          ].map((tech) => (
            <span
              key={tech}
              className="rounded-full bg-white/5 px-3 py-1 text-xs text-gray-300"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Project 2 */}
      <div className="rounded-2xl border border-white/10 bg-white/5 p-7 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/40">
        <div className="mb-5 flex items-center justify-between">
          <span className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-xs text-cyan-400">
            Application Platform
          </span>

          <span className="text-2xl">⚡</span>
        </div>

        <h3 className="text-2xl font-bold text-white">
          LycasGo
        </h3>

        <p className="mt-4 leading-7 text-gray-400">
          A rent-to-own EV scooter platform focused on application
          integration and backend development, allowing users to explore
          and manage EV rental services.
        </p>

        <div className="mt-6 flex flex-wrap gap-2">
          {[
            "Backend Development",
            "Application Integration",
            "EV Platform",
            "Team Collaboration",
          ].map((tech) => (
            <span
              key={tech}
              className="rounded-full bg-white/5 px-3 py-1 text-xs text-gray-300"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  </div>
</section>
            {/* Training */}
<section
  id="training"
  className="border-t border-white/10 px-6 py-24"
>
  <div className="mx-auto max-w-6xl">
    <div className="mb-14 text-center">
      <p className="text-sm uppercase tracking-[0.3em] text-cyan-400">
        Training
      </p>

      <h2 className="mt-3 text-4xl font-bold md:text-5xl">
        Professional <span className="text-cyan-400">Training</span>
      </h2>
    </div>

    <div className="mx-auto max-w-3xl rounded-2xl border border-white/10 bg-white/5 p-7">
      <div className="flex flex-col justify-between gap-3 md:flex-row">
        <div>
          <h3 className="text-2xl font-bold text-white">
            JSpiders
          </h3>

          <p className="mt-1 text-cyan-400">
            Data Analyst Training
          </p>
        </div>

        <span className="text-sm text-gray-400">
          July 2026 – Present
        </span>
      </div>

      <p className="mt-5 leading-7 text-gray-400">
        Training in Python, SQL, Excel, Power BI, aptitude and
        hands-on data analysis, including SQL querying, spreadsheet
        operations and dashboard concepts.
      </p>
    </div>
  </div>
</section>

{/* Education */}
<section
  id="education"
  className="border-t border-white/10 px-6 py-24"
>
  <div className="mx-auto max-w-6xl">
    <div className="mb-14 text-center">
      <p className="text-sm uppercase tracking-[0.3em] text-cyan-400">
        Education
      </p>

      <h2 className="mt-3 text-4xl font-bold md:text-5xl">
        Academic <span className="text-cyan-400">Journey</span>
      </h2>
    </div>

    <div className="space-y-5">
      <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
        <div className="flex flex-col justify-between gap-2 md:flex-row">
          <div>
            <h3 className="text-xl font-bold text-white">
              B.Tech – Computer Science and Engineering
            </h3>

            <p className="mt-1 text-cyan-400">
              DRK College of Engineering, Hyderabad
            </p>
          </div>

          <span className="text-sm text-gray-400">
            2023 – 2027
          </span>
        </div>
      </div>

      <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
        <div className="flex flex-col justify-between gap-2 md:flex-row">
          <div>
            <h3 className="text-xl font-bold text-white">
              Intermediate
            </h3>

            <p className="mt-1 text-gray-400">
              SR Gayathri
            </p>
          </div>

          <span className="text-cyan-400">
            72%
          </span>
        </div>
      </div>

      <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
        <div className="flex flex-col justify-between gap-2 md:flex-row">
          <div>
            <h3 className="text-xl font-bold text-white">
              10th Standard
            </h3>

            <p className="mt-1 text-gray-400">
              Vasavi High School, Nirmal
            </p>
          </div>

          <span className="text-cyan-400">
            100%
          </span>
        </div>
      </div>
    </div>
  </div>
</section>

{/* Achievements */}
<section
  id="achievements"
  className="border-t border-white/10 px-6 py-24"
>
  <div className="mx-auto max-w-6xl">
    <div className="mb-14 text-center">
      <p className="text-sm uppercase tracking-[0.3em] text-cyan-400">
        Achievements
      </p>

      <h2 className="mt-3 text-4xl font-bold md:text-5xl">
        Courses & <span className="text-cyan-400">Achievements</span>
      </h2>
    </div>

    <div className="grid gap-5 md:grid-cols-2">
      <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
        <h3 className="text-xl font-bold text-white">
          Web Development Course
        </h3>

        <p className="mt-2 text-cyan-400">
          Rinex
        </p>

        <p className="mt-3 text-sm text-gray-400">
          5 July 2025 – 29 August 2025
        </p>
      </div>

      <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
        <h3 className="text-xl font-bold text-white">
          Artificial Intelligence Course
        </h3>

        <p className="mt-2 text-cyan-400">
          Rinex
        </p>

        <p className="mt-3 text-sm text-gray-400">
          5 July 2025 – 30 August 2025
        </p>
      </div>

      <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
        <h3 className="text-xl font-bold text-white">
          Academic Project Presentations
        </h3>

        <p className="mt-3 leading-7 text-gray-400">
          Participated in academic project presentations and gained
          practical project experience.
        </p>
      </div>

      <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
        <h3 className="text-xl font-bold text-white">
          Data Analytics Foundation
        </h3>

        <p className="mt-3 leading-7 text-gray-400">
          Built a practical foundation in Python, SQL, Excel and
          Power BI through structured training.
        </p>
      </div>
    </div>
  </div>
</section>

      {/* Education */}
      <section id="education" className="px-6 py-24">
        <div className="mx-auto max-w-6xl">

          <div className="mb-12">
            <p className="text-sm uppercase tracking-[0.3em] text-cyan-400">
              Education
            </p>

            <h2 className="mt-3 text-4xl font-bold md:text-5xl">
              Academic <span className="text-cyan-400">Journey</span>
            </h2>
          </div>

          <div className="space-y-5">

            <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-7">
              <p className="text-sm text-cyan-400">2023 – 2027</p>
              <h3 className="mt-2 text-xl font-bold">
                B.Tech – Computer Science & Engineering
              </h3>
              <p className="mt-2 text-gray-400">
                DRK College of Engineering, Hyderabad
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-7">
              <p className="text-sm text-cyan-400">2021 – 2022</p>
              <h3 className="mt-2 text-xl font-bold">
                Intermediate
              </h3>
              <p className="mt-2 text-gray-400">
                SR Gayathri — 72%
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-7">
              <p className="text-sm text-cyan-400">2020 – 2021</p>
              <h3 className="mt-2 text-xl font-bold">
                10th Class
              </h3>
              <p className="mt-2 text-gray-400">
                Vasavi High School, Nirmal — 100%
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Achievements */}
      <section id="achievements" className="px-6 py-24">
        <div className="mx-auto max-w-6xl">

          <div className="mb-12">
            <p className="text-sm uppercase tracking-[0.3em] text-cyan-400">
              Achievements
            </p>

            <h2 className="mt-3 text-4xl font-bold md:text-5xl">
              Certifications & <span className="text-cyan-400">Achievements</span>
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2">

            <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-7">
              <div className="text-3xl">🏆</div>
              <h3 className="mt-5 text-xl font-bold">
                Web Development Course
              </h3>
              <p className="mt-2 text-gray-400">
                Rinex · July 2025 – August 2025
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-7">
              <div className="text-3xl">🤖</div>
              <h3 className="mt-5 text-xl font-bold">
                Artificial Intelligence Course
              </h3>
              <p className="mt-2 text-gray-400">
                Rinex · July 2025 – August 2025
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-7">
              <div className="text-3xl">💻</div>
              <h3 className="mt-5 text-xl font-bold">
                Academic Project Presentation
              </h3>
              <p className="mt-2 text-gray-400">
                Developed and presented projects involving databases,
                web technologies and voice-based interaction.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-7">
              <div className="text-3xl">📈</div>
              <h3 className="mt-5 text-xl font-bold">
                Data Analyst Foundation
              </h3>
              <p className="mt-2 text-gray-400">
                Built practical knowledge in Python, SQL, Excel and
                Power BI through structured Data Analyst training.
              </p>
            </div>

          </div>
        </div>
      </section>
           {/* Contact */}
<section
  id="contact"
  className="border-t border-white/10 px-6 py-24"
>
  <div className="mx-auto max-w-5xl text-center">
    <p className="text-sm uppercase tracking-[0.3em] text-cyan-400">
      Contact
    </p>

    <h2 className="mt-3 text-4xl font-bold md:text-5xl">
      Let&apos;s Connect
    </h2>

    <p className="mx-auto mt-6 max-w-2xl leading-7 text-gray-400">
      I&apos;m open to opportunities and conversations related to Data
      Analytics, SQL, Excel, Python and Power BI.
    </p>

    <div className="mt-10 flex flex-wrap justify-center gap-4">
      <a
        href="mailto:anveshbalai9@gmail.com"
        className="rounded-full bg-cyan-400 px-7 py-3 font-semibold text-black transition hover:scale-105"
      >
        Email Me
      </a>

      <a
        href="https://www.linkedin.com/in/anveshbalai/"
        target="_blank"
        rel="noopener noreferrer"
        className="rounded-full border border-white/20 px-7 py-3 font-semibold text-white transition hover:border-cyan-400 hover:text-cyan-400"
      >
        LinkedIn
      </a>

      <a
        href="https://github.com/anveshbalai9-lab"
        target="_blank"
        rel="noopener noreferrer"
        className="rounded-full border border-white/20 px-7 py-3 font-semibold text-white transition hover:border-cyan-400 hover:text-cyan-400"
      >
        GitHub
      </a>

      <a
        href="/resume.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="rounded-full border border-white/20 px-7 py-3 font-semibold text-white transition hover:border-cyan-400 hover:text-cyan-400"
      >
        View Resume
      </a>
    </div>
  </div>
</section>

      {/* Footer */}
      <footer className="border-t border-white/10 px-6 py-8">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 text-sm text-gray-500 md:flex-row">

          <p>
            © {new Date().getFullYear()} Bala Anvesh. All rights reserved.
          </p>

          <p>
            Built with <span className="text-cyan-400">Next.js</span>
          </p>

        </div>
      </footer>

    </main>

  );
}