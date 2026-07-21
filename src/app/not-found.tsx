import Link from "next/link";

export default function NotFound() {
  return (
    <div className="container-custom py-20 text-center">
      <h1 className="text-6xl font-extrabold gradient-text mb-4">404</h1>
      <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
        This page doesn't exist.
      </p>
      <Link href="/" className="btn-primary">
        Go home
      </Link>
    </div>
  );
}
