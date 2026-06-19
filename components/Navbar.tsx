import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center p-6 border-b">
      <Link href="/">
        <h1 className="text-2xl font-bold">
          MeetFlow AI
        </h1>
      </Link>

      <div className="space-x-4">
        <Link href="/login">
          Login
        </Link>

        <Link
          href="/dashboard"
          className="bg-black text-white px-4 py-2 rounded"
        >
          Dashboard
        </Link>
      </div>
    </nav>
  );
}