import AboutHighlight from "@/components/AboutHighlight";

export default function About() {
    return (
        <main className="max-w-4xl mx-auto px-6 py-12">
            <section className="text-center">
                <h1 className="text-4xl font-bold text-gray-900 mb-6">
                    About Me
                </h1>

                <p className="text-lg text-gray-700 leading-8 mb-6">
                    My name is Martha Sibiya, and I am a web development student
                    interested in creating useful and accessible web applications.
                </p>

                <p className="text-lg text-gray-700 leading-8">
                    I enjoy learning modern web technologies and using my skills to
                    build projects that solve real-world problems.
                </p>
            </section>

            <AboutHighlight title="My Focus">
                I am focused on developing my skills in modern web development,
                including React, Next.js, TypeScript, and responsive design.
            </AboutHighlight>
        </main>
    );
}