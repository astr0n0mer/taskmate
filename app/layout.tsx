import Link from "next/link";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head></head>
      <body>
        <header>
          <nav>
            <Link href="/">Home</Link>
            <Link href="/notes">Notes</Link>
          </nav>
        </header>
        <main>{children}</main>
      </body>
    </html>
  );
}

export const metadata = {
  title: "TaskMate",
  description: "An introductory project to Next.JS",
};
