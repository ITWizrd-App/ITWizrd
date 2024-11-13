import { ExternalLink } from "lucide-react";
import Link from "next/link";
import React from "react";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 bg-foreground flex items-center justify-between w-full h-16 px-6">
      <h1 className="text-3xl font-bold text-white">ITWizrd</h1>
      <nav className="flex gap-5 items-center text-white">
        <Link href="/" prefetch>
          Home
        </Link>
        <Link
          href="https://github.com/ITWizrd-App"
          className="flex items-center gap-1"
        >
          GitHub <ExternalLink size={20} />
        </Link>
      </nav>
    </header>
  );
}
