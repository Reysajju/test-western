export interface Service {
  id: string;
  title: string;
  description: string;
  price: number;
  discountedPrice?: number;
  isNewClientDiscount: boolean;
}

export interface PublishingPath {
  title: string;
  description: string;
  benefits: string[];
  support: string[];
  icon: string;
}

export interface SuccessStory {
  title: string;
  content: string;
  author: {
    name: string;
    role: string;
  };
  stats: {
    value: string;
    label: string;
  }[];
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface TimelineStep {
  step: number;
  title: string;
  description: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  message: string;
  selectedServices: string[];
}
