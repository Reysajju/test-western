import { useState } from 'react';

declare global {
  interface Window {
    Stripe?: any;
  }
}

export function useStripeCheckout() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const createCheckoutSession = async (priceId: string) => {
    try {
      setLoading(true);
      setError(null);

      // Load Stripe dynamically
      const stripe = await loadStripe();
      if (!stripe) {
        throw new Error('Stripe failed to load');
      }

      const response = await fetch('/api/create-checkout-session', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          priceId,
          successUrl: `${window.location.origin}/success`,
          cancelUrl: `${window.location.origin}/cancel`,
        }),
      });

      const { sessionId } = await response.json();

      if (sessionId) {
        const result = await stripe.redirectToCheckout({
          sessionId
        });

        if (result.error) {
          setError(result.error.message || 'Something went wrong. Please try again.');
        }
      } else {
        setError('Something went wrong. Please try again.');
      }
    } catch (err) {
      setError('An error occurred. Please try again.');
      console.error('Error:', err);
    } finally {
      setLoading(false);
    }
  };

  return {
    createCheckoutSession,
    loading,
    error,
  };
}

// Helper function to load Stripe
async function loadStripe() {
  if (!process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY) {
    throw new Error('Stripe publishable key is not set');
  }

  if (window.Stripe) {
    return window.Stripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);
  }

  const script = document.createElement('script');
  script.src = 'https://js.stripe.com/v3/';
  script.async = true;

  const promise = new Promise((resolve, reject) => {
    script.onload = () => {
      if (window.Stripe) {
        resolve(window.Stripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY));
      } else {
        reject(new Error('Stripe.js failed to load'));
      }
    };
    script.onerror = () => {
      reject(new Error('Failed to load Stripe.js'));
    };
  });

  document.head.appendChild(script);
  return promise;
}
