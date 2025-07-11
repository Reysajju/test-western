import Stripe from 'stripe';

const stripeSecretKey = process.env.STRIPE_SECRET_KEY;
export const stripe = stripeSecretKey
  ? new Stripe(stripeSecretKey, {
      apiVersion: '2025-06-30.basil',
      appInfo: {
        name: 'Western Medical Writer',
        version: '1.0.0',
      },
    })
  : null;

export async function createCheckoutSession(params: Stripe.Checkout.SessionCreateParams) {
  if (!stripe) throw new Error('Stripe is not configured.');
  return stripe.checkout.sessions.create(params);
}

export async function listProducts(params?: { limit?: number; active?: boolean }) {
  if (!stripe) return [];
  return stripe.products.list(params);
}

export async function listPrices(params?: { product?: string; active?: boolean }) {
  if (!stripe) return [];
  return stripe.prices.list(params);
}
