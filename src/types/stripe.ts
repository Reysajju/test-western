declare global {
  namespace NodeJS {
    interface ProcessEnv {
      STRIPE_PUBLIC_KEY: string;
      STRIPE_SECRET_KEY: string;
      NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY: string;
    }
  }
}

export interface Price {
  id: string;
  product: string;
  active: boolean;
  description: string | null;
  unit_amount: number;
  currency: string;
  type: 'one_time' | 'recurring';
  interval?: 'month' | 'year';
  interval_count?: number;
}

export interface Product {
  id: string;
  name: string;
  description: string | null;
  active: boolean;
  default_price: string;
  prices?: Price[];
}

export interface PaymentIntent {
  id: string;
  amount: number;
  status: string;
  client_secret: string;
}

export interface CheckoutSession {
  id: string;
  url: string;
}
