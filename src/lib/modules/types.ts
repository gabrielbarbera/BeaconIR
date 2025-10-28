/**
 * Beacon IR - Modular Architecture Type Definitions
 *
 * This file defines the core types for the modular IR/PR/Bundle system
 */

// =====================
// Feature Access Types
// =====================

export type ModuleAccess = {
  hasIRAccess: boolean;
  hasPRAccess: boolean;
  bundleTier: "none" | "starter" | "growth" | "premium" | "enterprise";
  clientEmail: string;
};

export type PlanTier = "starter" | "growth" | "premium" | "enterprise";

// =====================
// IR Module Types
// =====================

export interface IRProject {
  irId: string; // IR-<RECORD_ID>
  companyName: string;
  clientEmail: string;
  siteUrl: string;
  status: "draft" | "active" | "paused";
  planTier: PlanTier;
  createdAt: Date;
  lastUpdated: Date;
}

export interface IRCreateSiteRequest {
  companyName: string;
  clientEmail: string;
  planTier: PlanTier;
  customDomain?: string;
}

export interface IRCreateSiteResponse {
  success: boolean;
  irId?: string;
  siteUrl?: string;
  error?: string;
}

// =====================
// PR Module Types
// =====================

export interface PRSubmission {
  prId: string; // PR-<RECORD_ID>
  title: string;
  content: string;
  clientEmail: string;
  partner?: "BlockchainWire" | "ContentSyndicate" | "GlobeNewswire";
  status: "draft" | "submitted" | "distributed" | "failed";
  distributionDate?: Date;
  reportLinks?: string[];
  createdAt: Date;
  creditsUsed?: number;
}

export interface PRSubmitRequest {
  title: string;
  content: string;
  clientEmail: string;
  distributionDate?: Date;
  partner?: "BlockchainWire" | "ContentSyndicate" | "GlobeNewswire";
}

export interface PRSubmitResponse {
  success: boolean;
  prId?: string;
  status?: string;
  error?: string;
}

export type PRTier = "launch" | "amplify" | "premium";

// =====================
// Bundle Module Types
// =====================

export interface Bundle {
  bundleId: string; // BND-<RECORD_ID>
  clientEmail: string;
  irProjectId?: string;
  prSubmissionsLinked?: string[];
  bundleTier: PlanTier;
  status: "active" | "paused" | "cancelled";
  price: number;
  createdAt: Date;
}

export interface BundlePurchaseRequest {
  clientEmail: string;
  bundleTier: PlanTier;
  paymentMethod: "stripe" | "manual";
}

export interface BundlePurchaseResponse {
  success: boolean;
  bundleId?: string;
  irProjectId?: string;
  prCredits?: number;
  error?: string;
}

// =====================
// Pricing Configuration
// =====================

export interface PricingConfig {
  ir: {
    [key in PlanTier]: {
      monthly: number;
      annual: number;
      setup: number;
    };
  };
  pr: {
    [key in PRTier]: {
      perRelease: number;
      credits: number;
    };
  };
  bundles: {
    [key in PlanTier]: {
      monthly: number;
      annual: number;
      setup: number;
      savings: number;
    };
  };
}

// =====================
// Partner Routing Types
// =====================

export type PRPartner = "BlockchainWire" | "ContentSyndicate" | "GlobeNewswire";

export interface PartnerRoutingConfig {
  partner: PRPartner;
  apiEndpoint?: string;
  apiKey?: string;
  emailEndpoint?: string;
}

export interface PartnerSubmission {
  title: string;
  content: string;
  metadata: {
    companyName: string;
    contactEmail: string;
    distributionDate?: Date;
  };
}

// =====================
// Dashboard Types
// =====================

export interface DashboardView {
  clientEmail: string;
  activeModules: {
    ir: boolean;
    pr: boolean;
    bundle: boolean;
  };
  irProjects?: IRProject[];
  prSubmissions?: PRSubmission[];
  bundleDetails?: Bundle;
}

// =====================
// Notification Types
// =====================

export interface NotificationConfig {
  email?: boolean;
  sms?: boolean;
  inApp?: boolean;
}

export interface NotificationPayload {
  recipient: string;
  subject: string;
  message: string;
  type:
    | "ir_site_launched"
    | "pr_distributed"
    | "payment_received"
    | "account_updated";
}
