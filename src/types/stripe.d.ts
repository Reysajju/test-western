declare module 'stripe' {
  namespace Stripe {
    interface Config {
      apiVersion: string;
      appInfo?: {
        name: string;
        version: string;
      };
      typescript: boolean;
    }

    interface CheckoutSessionCreateParams {
      mode: 'payment' | 'subscription';
      line_items: Array<{
        price: string;
        quantity: number;
      }>;
      success_url: string;
      cancel_url: string;
      payment_method_types?: string[];
      metadata?: Record<string, string>;
    }

    interface CheckoutSession {
      id: string;
      object: 'checkout.session';
      url: string | null;
      payment_status: 'paid' | 'unpaid' | 'no_payment_required';
      status: 'open' | 'complete' | 'expired';
    }

    interface Product {
      id: string;
      name: string;
      description: string | null;
      active: boolean;
      metadata: Record<string, string>;
      default_price?: string;
    }

    interface Price {
      id: string;
      product: string;
      active: boolean;
      currency: string;
      unit_amount: number;
      type: 'one_time' | 'recurring';
      interval?: 'day' | 'week' | 'month' | 'year';
      interval_count?: number;
    }
  }

  export default class Stripe {
    constructor(apiKey: string, config?: Stripe.Config);
    
    checkout: {
      sessions: {
        create(params: Stripe.CheckoutSessionCreateParams): Promise<Stripe.CheckoutSession>;
      };
    };
    
    products: {
      list(params?: { limit?: number; active?: boolean }): Promise<{ data: Stripe.Product[] }>;
      retrieve(id: string): Promise<Stripe.Product>;
    };
    
    prices: {
      list(params?: { product?: string; active?: boolean }): Promise<{ data: Stripe.Price[] }>;
      retrieve(id: string): Promise<Stripe.Price>;
    };
  }
}
