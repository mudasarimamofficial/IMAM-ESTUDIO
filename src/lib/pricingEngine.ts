// IMAM ESTUDIO | Pricing Matrix, Commission Rails, & Escrow State Machine
// 100% Alignment with Enterprise Specification Blueprint

export interface ServiceCostStructure {
  slug: string;
  name: string;
  underlyingCosts: {
    infrastructure: number; // Cloud resources, LLM, API keys, hosting
    baseTalent: number;     // Contractor or direct engineer baseline cost
    operations: number;     // PM, vetting, transaction fees
  };
  marketReferencePrice: number; // Competitor baseline agency pricing
}

export const servicesCosts: Record<string, ServiceCostStructure> = {
  "ai-voice-agents": {
    slug: "ai-voice-agents",
    name: "Autonomous AI Voice Agent System",
    underlyingCosts: {
      infrastructure: 850.00,
      baseTalent: 2200.00,
      operations: 450.00,
    },
    marketReferencePrice: 9500.00,
  },
  "shopify-expert": {
    slug: "shopify-expert",
    name: "Shopify Lead Expert & Headless Storefront",
    underlyingCosts: {
      infrastructure: 400.00,
      baseTalent: 1800.00,
      operations: 300.00,
    },
    marketReferencePrice: 6500.00,
  },
  "automation-workflows": {
    slug: "automation-workflows",
    name: "Autonomous Systems Workflow Integration",
    underlyingCosts: {
      infrastructure: 600.00,
      baseTalent: 1500.00,
      operations: 250.00,
    },
    marketReferencePrice: 5000.00,
  },
};

export interface ComputedPriceBreakdown {
  totalBaseCost: number;
  targetMargin: number;
  finalPrice: number;
  savingsVsMarket: number;
  savingsPercentage: number;
}

export class PricingEngine {
  /**
   * Computes service cost based on underlying costs and target margins.
   * A margin of -0.05 represents a -5% loss-leader pricing scheme.
   */
  static calculate(serviceSlug: string, targetMargin: number = -0.05): ComputedPriceBreakdown & { serviceName: string } {
    const service = servicesCosts[serviceSlug];
    if (!service) {
      return {
        serviceName: "Custom Development Suite",
        totalBaseCost: 1000,
        targetMargin,
        finalPrice: 1000 * (1 + targetMargin),
        savingsVsMarket: 2000,
        savingsPercentage: 50,
      };
    }

    const totalBaseCost = 
      service.underlyingCosts.infrastructure + 
      service.underlyingCosts.baseTalent + 
      service.underlyingCosts.operations;

    const finalPrice = Math.max(0, totalBaseCost * (1 + targetMargin));
    const savingsVsMarket = Math.max(0, service.marketReferencePrice - finalPrice);
    const savingsPercentage = Math.round((savingsVsMarket / service.marketReferencePrice) * 100);

    return {
      serviceName: service.name,
      totalBaseCost,
      targetMargin,
      finalPrice: Math.round(finalPrice * 100) / 100,
      savingsVsMarket: Math.round(savingsVsMarket * 100) / 100,
      savingsPercentage,
    };
  }

  /**
   * B. Business Logic & Payment Architecture
   * Toptal-Style Client Markup & Zero-Commission Rail Logic
   */
  static calculateContractRates(
    expertBaselineRate: number,
    platformSourced: boolean // If FALSE, expert brought client -> 0% platform commission rail
  ): {
    expertPayoutRate: number;
    clientChargeRate: number;
    platformMarkupFee: number;
    markupPercentage: number;
  } {
    if (!platformSourced) {
      // Zero-Commission Rail Engine active
      return {
        expertPayoutRate: expertBaselineRate,
        clientChargeRate: expertBaselineRate, // No markup
        platformMarkupFee: 0,
        markupPercentage: 0,
      };
    }

    // Platform-sourced: apply transparent 20% client-side markup
    const markupPercentage = 20; // 20% Toptal style markup
    const platformMarkupFee = expertBaselineRate * 0.20;
    const clientChargeRate = expertBaselineRate + platformMarkupFee;

    return {
      expertPayoutRate: expertBaselineRate,
      clientChargeRate: Math.round(clientChargeRate * 100) / 100,
      platformMarkupFee: Math.round(platformMarkupFee * 100) / 100,
      markupPercentage,
    };
  }
}

/**
 * Stripe Escrow State Machine Transitions
 */
export type EscrowState = "CREATED" | "ESCROWED" | "SUBMITTED" | "RELEASED" | "DISPUTED" | "REFUNDED";

export interface EscrowContext {
  milestoneId: string;
  projectId: string;
  currentState: EscrowState;
  amount: number;
  moderatorId?: string;
  resolutionSummary?: string;
}

export class EscrowStateMachine {
  /**
   * transitionCreatedToEscrowed
   * Client funds the escrow using Stripe
   */
  static escrowFunds(ctx: EscrowContext, stripePaymentId: string): EscrowContext {
    if (ctx.currentState !== "CREATED") {
      throw new Error(`Invalid transition: Cannot fund milestone in ${ctx.currentState} state.`);
    }
    return {
      ...ctx,
      currentState: "ESCROWED",
    };
  }

  /**
   * transitionEscrowedToSubmitted
   * Expert submits milestone work deliverables
   */
  static submitDeliverable(ctx: EscrowContext): EscrowContext {
    if (ctx.currentState !== "ESCROWED") {
      throw new Error(`Invalid transition: Cannot submit deliverables in ${ctx.currentState} state.`);
    }
    return {
      ...ctx,
      currentState: "SUBMITTED",
    };
  }

  /**
   * transitionSubmittedToReleased
   * Client approves work, dispersing funds to expert Connect account
   */
  static approveRelease(ctx: EscrowContext): EscrowContext {
    if (ctx.currentState !== "SUBMITTED") {
      throw new Error(`Invalid transition: Cannot release funds unless work is submitted.`);
    }
    return {
      ...ctx,
      currentState: "RELEASED",
    };
  }

  /**
   * transitionToDisputed
   * Client or expert freezes funds due to dispute
   */
  static initiateDispute(ctx: EscrowContext): EscrowContext {
    if (ctx.currentState !== "SUBMITTED" && ctx.currentState !== "ESCROWED") {
      throw new Error(`Invalid transition: Cannot dispute in state ${ctx.currentState}.`);
    }
    return {
      ...ctx,
      currentState: "DISPUTED",
    };
  }

  /**
   * transitionDisputedToResolved
   * Moderator adjudicates and releases/refunds based on specifications
   */
  static resolveDispute(
    ctx: EscrowContext,
    moderatorId: string,
    action: "release" | "refund",
    summary: string
  ): EscrowContext {
    if (ctx.currentState !== "DISPUTED") {
      throw new Error(`Invalid transition: Cannot resolve unless escrow state is DISPUTED.`);
    }
    return {
      ...ctx,
      currentState: action === "release" ? "RELEASED" : "REFUNDED",
      moderatorId,
      resolutionSummary: summary,
    };
  }
}
