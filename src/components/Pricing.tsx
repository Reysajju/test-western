'use client';

import { useStripeCheckout } from '@/hooks/useStripeCheckout';

interface PricingPackage {
  name: string;
  price: number;
  priceId: string;
  description: string;
  features: string[];
}

const packages: PricingPackage[] = [
  {
    name: 'Basic Package',
    price: 499,
    priceId: 'price_basic', // You'll replace this with your actual Stripe price ID
    description: 'Perfect for small projects and individual researchers',
    features: [
      'Basic manuscript editing',
      'Grammar and spelling check',
      'Basic formatting',
      'Email support',
      '3-day turnaround',
    ],
  },
  {
    name: 'Professional Package',
    price: 999,
    priceId: 'price_pro', // You'll replace this with your actual Stripe price ID
    description: 'Ideal for research papers and clinical documents',
    features: [
      'Advanced manuscript editing',
      'Technical accuracy review',
      'Citation formatting',
      'Priority email support',
      '2-day turnaround',
      'One round of revisions',
    ],
  },
  {
    name: 'Premium Package',
    price: 1499,
    priceId: 'price_premium', // You'll replace this with your actual Stripe price ID
    description: 'Complete solution for comprehensive projects',
    features: [
      'Full manuscript editing and formatting',
      'Technical and scientific review',
      'Journal submission guidance',
      'Priority support',
      '24-hour turnaround',
      'Two rounds of revisions',
      'Journal-specific formatting',
    ],
  },
];

export default function Pricing() {
  const { createCheckoutSession, loading, error } = useStripeCheckout();

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Our Packages</h2>
          
          {error && (
            <div className="text-red-600 text-center mb-6">
              {error}
            </div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {packages.map((pkg) => (
              <div
                key={pkg.name}
                className="bg-white rounded-lg shadow-lg overflow-hidden"
              >
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-4">{pkg.name}</h3>
                  <div className="text-4xl font-bold mb-6">
                    ${pkg.price}
                    <span className="text-lg text-gray-600 font-normal">
                      /project
                    </span>
                  </div>
                  <p className="text-gray-600 mb-6">{pkg.description}</p>
                  <ul className="space-y-3 mb-8">
                    {pkg.features.map((feature) => (
                      <li key={feature} className="flex items-center">
                        <svg
                          className="w-5 h-5 text-green-500 mr-2"
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
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <button
                    onClick={() => createCheckoutSession(pkg.priceId)}
                    disabled={loading}
                    className="w-full bg-primary-600 text-white py-3 px-6 rounded-lg hover:bg-primary-700 transition-colors disabled:opacity-50"
                  >
                    {loading ? 'Processing...' : 'Select Package'}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
