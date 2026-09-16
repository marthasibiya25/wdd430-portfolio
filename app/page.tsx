import ProjectList from "@/components/ProjectList";

const projects = [
  {
    title: "CSE340 Service Network",
    description:
      "A web application that connects community organizations with projects and volunteers. The application includes organization, project, category, user authentication, and volunteer management features.",
    technologies: ["Node.js", "Express", "EJS", "PostgreSQL"],
    link: "https://github.com/marthasibiya25/cse340",
  },
  {
    title: "SafeHer SA",
    description:
      "A proposed web application designed to help women in South Africa quickly request help when they feel unsafe by providing emergency alerts, trusted contacts, location sharing, and access to safety resources.",
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    link: "#",
  },
];

export default function Home() {
  return (
    <main className="max-w-6xl mx-auto px-6 py-12">
      <section className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Welcome to My Portfolio
        </h1>

        <p className="text-lg text-gray-700 max-w-2xl mx-auto">
          I am Martha Sibiya, a web development student building practical
          applications with modern web technologies.
        </p>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-6">
          My Projects
        </h2>

        <ProjectList projects={projects} />
      </section>
    </main>
  );
}