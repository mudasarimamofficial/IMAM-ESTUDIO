// IMAM ESTUDIO | Pricing Matrix Engine (Loss-Leader Calculator)

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
    name: "Shopify Lead Expert & headless Storefront",
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
      // Fallback
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

    // Price calculated directly on cost and margin, bypassing generic high margins
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
}
