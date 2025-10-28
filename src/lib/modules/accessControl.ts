/**
 * Beacon IR - Access Control System
 *
 * Feature flag management for modular architecture
 */

import { ModuleAccess, PlanTier } from "./types";

/**
 * Check if user has access to IR module
 */
export function hasIRAccess(access: ModuleAccess): boolean {
  return access.hasIRAccess;
}

/**
 * Check if user has access to PR module
 */
export function hasPRAccess(access: ModuleAccess): boolean {
  return access.hasPRAccess;
}

/**
 * Check if user has active bundle
 */
export function hasBundleAccess(access: ModuleAccess): boolean {
  return access.bundleTier !== "none";
}

/**
 * Get accessible modules for a user
 */
export function getAccessibleModules(access: ModuleAccess): string[] {
  const modules: string[] = [];

  if (hasIRAccess(access)) {
    modules.push("ir");
  }

  if (hasPRAccess(access)) {
    modules.push("pr");
  }

  if (hasBundleAccess(access)) {
    modules.push("bundle");
  }

  return modules;
}

/**
 * Set IR access for a user
 */
export function setIRAccess(
  access: ModuleAccess,
  hasAccess: boolean
): ModuleAccess {
  return {
    ...access,
    hasIRAccess: hasAccess,
  };
}

/**
 * Set PR access for a user
 */
export function setPRAccess(
  access: ModuleAccess,
  hasAccess: boolean
): ModuleAccess {
  return {
    ...access,
    hasPRAccess: hasAccess,
  };
}

/**
 * Set bundle tier for a user
 */
export function setBundleTier(
  access: ModuleAccess,
  tier: PlanTier | "none"
): ModuleAccess {
  return {
    ...access,
    bundleTier: tier,
  };
}

/**
 * Create new access record
 */
export function createAccess(clientEmail: string): ModuleAccess {
  return {
    hasIRAccess: false,
    hasPRAccess: false,
    bundleTier: "none",
    clientEmail,
  };
}

/**
 * Check if user can access a specific module
 */
export function canAccessModule(
  access: ModuleAccess,
  module: "ir" | "pr" | "bundle"
): boolean {
  switch (module) {
    case "ir":
      return hasIRAccess(access);
    case "pr":
      return hasPRAccess(access);
    case "bundle":
      return hasBundleAccess(access);
    default:
      return false;
  }
}

/**
 * Determine if user should see upsell widget
 */
export function shouldShowUpsell(access: ModuleAccess): {
  showIRUpsell: boolean;
  showPRUpsell: boolean;
  showBundleUpsell: boolean;
} {
  return {
    showIRUpsell: !access.hasIRAccess,
    showPRUpsell: !access.hasPRAccess,
    showBundleUpsell: !access.hasIRAccess && !access.hasPRAccess,
  };
}

/**
 * Check if user has specific tier access
 */
export function hasTierAccess(access: ModuleAccess, tier: PlanTier): boolean {
  if (access.bundleTier === "none") {
    return false;
  }

  const tierOrder: PlanTier[] = ["starter", "growth", "premium", "enterprise"];
  const currentTierIndex = tierOrder.indexOf(access.bundleTier as PlanTier);
  const requiredTierIndex = tierOrder.indexOf(tier);

  return currentTierIndex >= requiredTierIndex;
}
