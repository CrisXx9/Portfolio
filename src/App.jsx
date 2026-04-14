export default function NavBar() {
  return (
    <div className="min-h-screen font-sans bg-black text-white">
      <nav className="sticky top-0 z-50 flex justify-between items-center px-6 py-4 backdrop-blur-md">
        <h1 className="font-semibold tracking-wide">Cristiano Ferreira</h1>

        <div className="flex gap-6 text-white/60">
          <section
            className="hover:text-white cursor-pointer"
            onClick={() =>
              document
                .getElementById("about")
                .scrollIntoView({ behavior: "smooth" })
            }
          >
            About
          </section>

          <section
            className="hover:text-white cursor-pointer"
            onClick={() =>
              document
                .getElementById("skills")
                .scrollIntoView({ behavior: "smooth" })
            }
          >
            Skills
          </section>

          <section
            className="hover:text-white cursor-pointer"
            onClick={() =>
              document
                .getElementById("project")
                .scrollIntoView({ behavior: "smooth" })
            }
          >
            Project
          </section>

          <section
            className="hover:text-white cursor-pointer"
            onClick={() =>
              document
                .getElementById("contact")
                .scrollIntoView({ behavior: "smooth" })
            }
          >
            Contact
          </section>
        </div>
      </nav>

      <div className="flex justify-center items-center min-h-screen text-white">
        <div className="flex flex-col items-center gap-4 text-center">
          <img
            className="w-40 h-40 object-cover rounded-full border border-white/20 shadow-lg"
            src="src/assets/pfp.png"
            alt="profile"
          />

          <h1 className="text-5xl font-bold">Cristiano Ferreira</h1>

          <h2 className="text-white/50 text-lg">Full-stack Developer</h2>

          <h3 className="text-white/50 max-w-md text-sm leading-relaxed">
            Crafting beautiful, scalable web applications with modern
            technologies.
          </h3>

          <div className="flex gap-4 mt-4">
            <button className="rounded-xl bg-white text-black px-6 py-3 hover:scale-105 transition">
              View my work
            </button>

            <button className="rounded-xl border border-white/30 text-white px-6 py-3 hover:bg-white hover:text-black transition">
              Contact me
            </button>
          </div>
        </div>
      </div>

      <div
        id="about"
        className="flex justify-center items-center py-20 text-white"
      >
        <div className="flex flex-col items-center text-center max-w-md space-y-4">
          <h1 className="text-5xl font-bold">About</h1>

          <p className="text-white/60 text-sm leading-relaxed">
            I'm a passionate full-stack engineer focused on building modern,
            scalable and beautiful web applications.
          </p>

          <p className="text-white/60 text-sm leading-relaxed">
            When I'm not coding, I explore new technologies and contribute to
            open-source projects.
          </p>
        </div>
      </div>

      <div
        id="skills"
        className="flex justify-center items-center py-20 text-white"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="border border-white/10 rounded-2xl p-6 w-72 shadow-lg backdrop-blur-md hover:scale-105 transition duration-300 text-center">
            <img
              src="src/assets/react.png"
              alt="React"
              className="w-16 h-16 mx-auto mb-4"
            />

            <h2 className="text-xl font-semibold mb-2">React</h2>

            <p className="text-white/60 text-sm leading-relaxed">
              Building fast and interactive user interfaces with reusable
              components.
            </p>
          </div>

          <div className="border border-white/10 rounded-2xl p-6 w-72 shadow-lg backdrop-blur-md hover:scale-105 transition duration-300 text-center">
            <img
              src="src/assets/javascript.png"
              alt="JavaScript"
              className="w-16 h-16 mx-auto mb-4"
            />

            <h2 className="text-xl font-semibold mb-2">JavaScript</h2>

            <p className="text-white/60 text-sm leading-relaxed">
              Core language for dynamic web applications and logic handling.
            </p>
          </div>

          <div className="border border-white/10 rounded-2xl p-6 w-72 shadow-lg backdrop-blur-md hover:scale-105 transition duration-300 text-center">
            <img
              src="src/assets/tailwind.png"
              alt="Tailwind"
              className="w-16 h-16 mx-auto mb-4"
            />

            <h2 className="text-xl font-semibold mb-2">Tailwind CSS</h2>

            <p className="text-white/60 text-sm leading-relaxed">
              Utility-first CSS framework for building modern UI quickly.
            </p>
          </div>
        </div>
      </div>

      <div
        id="project"
        className="flex justify-center items-center py-20 text-white"
      >
        <div className="bg-black/60 border border-white/10 rounded-2xl overflow-hidden shadow-lg w-80 hover:scale-105 transition duration-300">
          <img
            src="src/assets/socially.svg"
            alt="project"
            className="w-full h-44 object-fit"
          />

          <div className="p-5 text-white">
            <h2 className="text-xl font-semibold mb-2">Socially</h2>

            <p className="text-white/60 text-sm leading-relaxed mb-4">
              A full-stack application built with React and modern web
              technologies.
            </p>

            <button className="w-full bg-white text-black py-2 rounded-xl hover:bg-white/80 transition">
              View Project
            </button>
          </div>
        </div>
      </div>

      <div
        id="contact"
        className="flex justify-center items-center py-20 text-white"
      >
        <div className="flex flex-col items-center gap-3 text-center">
          <h1 className="text-4xl font-bold">Contact</h1>

          <h2 className="text-white/60 text-lg">
            cristiano.ferreira.23mult3@meu.ipta.pt
          </h2>
        </div>
      </div>
    </div>
  );
}
