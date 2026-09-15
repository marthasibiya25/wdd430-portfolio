interface ProjectCardProps {
    title: string;
    description: string;
    technologies: string[];
    link?: string;
}

export default function ProjectCard({
    title,
    description,
    technologies,
    link,
}: ProjectCardProps) {
    return (
        <article className="p-6 border border-gray-200 rounded-lg shadow-sm bg-white">
            <h3 className="text-2xl font-bold mb-3 text-gray-900">
                {title}
            </h3>

            <p className="text-gray-700 mb-4">
                {description}
            </p>

            <p className="text-sm text-gray-600 mb-4">
                <strong>Technologies:</strong> {technologies.join(", ")}
            </p>

            {link && (
                <a
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-red-700 font-semibold hover:underline"
                >
                    View Project
                </a>
            )}
        </article>
    );
}