export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="text-center space-y-6">
        <h1 className="text-9xl font-bold text-primary-600">404</h1>
        <h2 className="text-3xl font-bold text-gray-900">Page Not Found</h2>
        <p className="text-gray-600 max-w-lg mx-auto">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="flex justify-center gap-4">
          <a href="/" className="btn btn-primary">
            Return Home
          </a>
          <a href="/contact" className="btn btn-secondary">
            Contact Us
          </a>
        </div>
      </div>
    </div>
  );
}
