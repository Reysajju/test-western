import Stripe from 'stripe';

// Only create a single Stripe instance per server process (singleton pattern)
const stripeSecretKey = process.env.STRIPE_SECRET_KEY;
if (!stripeSecretKey) {
  throw new Error('Missing required environment variable: STRIPE_SECRET_KEY');
}

// Stripe instance (singleton)
export const stripe = new Stripe(stripeSecretKey, {
  apiVersion: '2025-06-30.basil',
  appInfo: {
    name: 'Western Medical Writer',
    version: '1.0.0',
  },
});

// Helper function to create a checkout session
export async function createCheckoutSession(params: Stripe.Checkout.SessionCreateParams) {
  return stripe.checkout.sessions.create(params);
}

// Helper function to list products
export async function listProducts(params?: { limit?: number; active?: boolean }) {
  return stripe.products.list(params);
}

// Helper function to list prices
export async function listPrices(params?: { product?: string; active?: boolean }) {
  return stripe.prices.list(params);
}
