interface AboutHighlightProps {
    title: string;
    children: React.ReactNode;
}

export default function AboutHighlight({
    title,
    children,
}: AboutHighlightProps) {
    return (
        <section className="mt-8 rounded-lg border border-red-200 bg-red-50 p-6">
            <h2 className="mb-3 text-2xl font-bold text-red-700">
                {title}
            </h2>

            <div className="text-gray-700 leading-7">
                {children}
            </div>
        </section>
    );
}