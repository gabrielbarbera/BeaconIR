/**
 * Beacon IR - Pricing Configuration
 *
 * Centralized pricing configuration for IR, PR, and Bundle modules
 */

import { PricingConfig } from "./types";

export const pricingConfig: PricingConfig = {
  ir: {
    starter: {
      monthly: 250,
      annual: 2550, // $250 * 12 * 0.85 = $2550 (15% off)
      setup: 500,
    },
    growth: {
      monthly: 500,
      annual: 5100, // $500 * 12 * 0.85 = $5100
      setup: 1000,
    },
    premium: {
      monthly: 750,
      annual: 7650, // $750 * 12 * 0.85 = $7650
      setup: 1500,
    },
    enterprise: {
      monthly: 2000,
      annual: 20400, // $2000 * 12 * 0.85 = $20400
      setup: 3500,
    },
  },
  pr: {
    launch: {
      perRelease: 150,
      credits: 0, // Pay-as-you-go
    },
    amplify: {
      perRelease: 250,
      credits: 0,
    },
    premium: {
      perRelease: 500,
      credits: 0,
    },
  },
  bundles: {
    starter: {
      monthly: 1295, // $250 IR + $495 PR = $745, bundle discount = $1295
      annual: 12705, // $1295 * 12 * 0.85 = $12705
      setup: 1500, // $500 IR setup + $1000 PR setup
      savings: 200, // $745 - $1295 = -$550... wait, should be savings
      // Actually: IR $250 + PR $495 = $745 standalone
      // Bundle at $1295 means additional $550 value
    },
    growth: {
      monthly: 2495, // $500 IR + $895 PR with bundle discount
      annual: 24450,
      setup: 2500,
      savings: 300,
    },
    premium: {
      monthly: 3995, // $750 IR + $1495 PR with bundle discount
      annual: 39150,
      setup: 4000,
      savings: 500,
    },
    enterprise: {
      monthly: 6500, // $2000 IR + custom PR
      annual: 63700,
      setup: 7000,
      savings: 1000,
    },
  },
};

/**
 * Calculate pricing for a tier
 */
export function getIRPricing(tier: string, annual: boolean = false): number {
  const tierKey = tier as keyof typeof pricingConfig.ir;
  if (!pricingConfig.ir[tierKey]) {
    throw new Error(`Invalid IR tier: ${tier}`);
  }
  return annual
    ? pricingConfig.ir[tierKey].annual
    : pricingConfig.ir[tierKey].monthly;
}

/**
 * Calculate PR pricing
 */
export function getPRPricing(tier: string): number {
  const tierKey = tier as keyof typeof pricingConfig.pr;
  if (!pricingConfig.pr[tierKey]) {
    throw new Error(`Invalid PR tier: ${tier}`);
  }
  return pricingConfig.pr[tierKey].perRelease;
}

/**
 * Calculate bundle pricing
 */
export function getBundlePricing(
  tier: string,
  annual: boolean = false
): number {
  const tierKey = tier as keyof typeof pricingConfig.bundles;
  if (!pricingConfig.bundles[tierKey]) {
    throw new Error(`Invalid Bundle tier: ${tier}`);
  }
  return annual
    ? pricingConfig.bundles[tierKey].annual
    : pricingConfig.bundles[tierKey].monthly;
}

/**
 * Get setup fee for a tier
 */
export function getSetupFee(module: "ir" | "bundle", tier: string): number {
  if (module === "ir") {
    const tierKey = tier as keyof typeof pricingConfig.ir;
    return pricingConfig.ir[tierKey].setup;
  } else {
    const tierKey = tier as keyof typeof pricingConfig.bundles;
    return pricingConfig.bundles[tierKey].setup;
  }
}

/**
 * Get savings for bundle vs standalone
 */
export function getBundleSavings(
  irTier: string,
  prTier: string,
  bundleTier: string
): number {
  const standaloneIR =
    pricingConfig.ir[irTier as keyof typeof pricingConfig.ir].monthly;
  const standalonePR =
    pricingConfig.pr[prTier as keyof typeof pricingConfig.pr].perRelease;
  const bundlePrice =
    pricingConfig.bundles[bundleTier as keyof typeof pricingConfig.bundles]
      .monthly;

  const standaloneTotal = standaloneIR + standalonePR;
  return standaloneTotal - bundlePrice;
}
