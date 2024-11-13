import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <footer className="flex flex-col items-center justify-center gap-1 bg-black min-h-24 px-5">
      <p className="text-white/70 text-center">
        Designed and Developed with ❤️ by ITWizrd
      </p>
      <p className="text-white/70 text-center">
        Want to help us make ITWizrd better?{" "}
        <Link
          href="https://github.com/ITWizrd-App"
          className="text-blue-500 underline"
        >
          Visit us on our GitHub
        </Link>
      </p>
    </footer>
  );
}
