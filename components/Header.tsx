import Link from "next/link";

export default function Header() {
    return (
        <header className="bg-red-700 text-white shadow-md">
            <div className="max-w-6xl mx-auto px-6 py-5 flex flex-col sm:flex-row justify-between items-center gap-4">
                <Link href="/" className="text-2xl font-bold">
                    Martha Sibiya
                </Link>

                <nav>
                    <ul className="flex gap-6">
                        <li>
                            <Link href="/" className="hover:underline">
                                Home
                            </Link>
                        </li>

                        <li>
                            <Link href="/about" className="hover:underline">
                                About
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}