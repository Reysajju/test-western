export default function Success() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center bg-gray-50">
      <div className="max-w-2xl mx-auto px-4 text-center">
        <div className="bg-white p-8 rounded-lg shadow-md">
          <div className="w-16 h-16 mx-auto mb-6 bg-green-100 rounded-full flex items-center justify-center">
            <svg
              className="w-8 h-8 text-green-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
          <h1 className="text-3xl font-bold mb-4">Payment Successful!</h1>
          <p className="text-gray-600 mb-6">
            Thank you for your purchase. We&apos;ll be in touch shortly with next steps.
          </p>
          <a
            href="/"
            className="inline-block bg-primary-600 text-white px-8 py-3 rounded-lg hover:bg-primary-700 transition-colors"
          >
            Return Home
          </a>
        </div>
      </div>
    </div>
  );
}
