import Stripe from "stripe";

export const stripe = new Stripe(
  process.env.STRIPE_SECRET_KEY || "sk_test_mock",
  {
    apiVersion: "2024-11-20.acacia",
    typescript: true,
  }
);

export const STRIPE_PLANS = {
  free: {
    name: "Free",
    price: 0,
    priceId: "",
  },
  professional: {
    name: "Professional",
    price: 299,
    priceId: process.env.STRIPE_PROFESSIONAL_PRICE_ID || "price_professional",
  },
  enterprise: {
    name: "Enterprise",
    price: 0,
    priceId: "",
  },
};
