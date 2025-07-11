export const STRIPE_CONFIG = {
  publishableKey: process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY,
  secretKey: process.env.STRIPE_SECRET_KEY,
  webhookSecret: process.env.STRIPE_WEBHOOK_SECRET,
  apiVersion: '2023-10-16' as const,
  appInfo: {
    name: 'Western Medical Writer',
    version: '1.0.0',
  },
  typescript: true,
} as const;

// Validate required environment variables
export function validateStripeConfig() {
  const requiredVars = [
    'NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY',
    'STRIPE_SECRET_KEY',
  ] as const;

  for (const varName of requiredVars) {
    if (!process.env[varName]) {
      throw new Error(`Missing required environment variable: ${varName}`);
    }
  }
}

// Product price IDs
export const STRIPE_PRICE_IDS = {
  BASIC_PACKAGE: process.env.STRIPE_PRICE_ID_BASIC || '',
  PRO_PACKAGE: process.env.STRIPE_PRICE_ID_PRO || '',
  PREMIUM_PACKAGE: process.env.STRIPE_PRICE_ID_PREMIUM || '',
} as const;

// Currency configuration
export const CURRENCY = {
  code: 'USD',
  symbol: '$',
  decimal_digits: 2,
} as const;

// Stripe checkout configuration
export const CHECKOUT_CONFIG = {
  successUrl: `${process.env.NEXT_PUBLIC_SITE_URL}/success?session_id={CHECKOUT_SESSION_ID}`,
  cancelUrl: `${process.env.NEXT_PUBLIC_SITE_URL}/cancel`,
  payment_method_types: ['card'],
  allow_promotion_codes: true,
} as const;
