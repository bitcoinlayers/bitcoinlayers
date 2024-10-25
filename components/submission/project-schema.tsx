import * as z from "zod";
import {
    Type,
    EntityType,
    LiveStatus,
    Site,
    Purpose,
    AssessmentCategory,
    RiskCategory,
    RiskFactor,
} from "@/content/props";

// Base schema
const baseSchema = z.object({
    type: z.nativeEnum(Type),
    slug: z.string().min(1),
    title: z.string().min(1),
    entityType: z.nativeEnum(EntityType),
    live: z.nativeEnum(LiveStatus),
    staking: z.boolean().optional(),
    bridge: z.boolean().optional(),
    underReview: z.boolean().optional(),
    riskFactors: z.array(z.nativeEnum(RiskFactor)).optional(),
    nativeToken: z.string().min(1).optional(),
    bitcoinOnly: z.boolean().optional(),
    links: z.array(
        z.object({
            text: z.nativeEnum(Site),
            url: z.string().url(),
        }),
    ),
    description: z.string().min(1),
    sections: z.array(
        z.object({
            id: z.string().min(1),
            title: z.string().min(1),
            content: z.array(
                z.object({
                    title: z.string().optional(),
                    content: z.string().min(1),
                }),
            ),
        }),
    ),
    associatedLayers: z.string().optional(),
});

// Infrastructure-specific schema
const infrastructureSchema = baseSchema.extend({
    type: z.literal(Type.Infrastructure),
    purpose: z.nativeEnum(Purpose),
    assessment: z.array(
        z.object({
            category: z.nativeEnum(AssessmentCategory),
            score: z.number().min(0).max(100),
            tier: z.nativeEnum(RiskFactor).or(z.literal("")),
            title: z.string().min(1),
            content: z.string().min(1),
        }),
    ),
});

// Layer-specific schema
const layerSchema = baseSchema.extend({
    type: z.literal(Type.Layer),
    btcLocked: z.number().min(0),
    feeToken: z.string().min(1).optional(),
    riskAnalysis: z.array(
        z.object({
            category: z.nativeEnum(RiskCategory),
            score: z.number().min(0).max(100),
            tier: z.nativeEnum(RiskFactor).or(z.literal("")),
            title: z.string().optional(),
            content: z.string().optional(),
        }),
    ),
});

// Combined schema
export const formSchema = z.discriminatedUnion("type", [
    infrastructureSchema,
    layerSchema,
]);
