"use client";

import { useQueryState } from "nuqs";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
    AssessmentCategory,
    EntityType,
    LiveStatus,
    Purpose,
    RiskCategory,
    RiskFactor,
    Site,
    Type,
} from "@/content/props";
import { allLayers } from "@/util/layer_index";
import { allInfrastructures } from "@/util/infrastructure_index";
import { formSchema } from "@/components/submission/project-schema";
import BasicInfoForm from "@/components/submission/basic-info-form";
import FeaturesForm from "@/components/submission/features-form";
import RiskFactorsForm from "@/components/submission/risk-factors-form";
import LinksForm from "@/components/submission/links-form";
import SectionsForm from "@/components/submission/sections-form";
import InfrastructureForm from "@/components/submission/infrastructure-form";
import LayerForm from "@/components/submission/layer-form";
import { useMutation } from "@tanstack/react-query";
import { fetcher } from "@/util/fetcher";
import { Loader2 } from "lucide-react";
import Link from "next/link";
import { useToast } from "@/hooks/use-toast";

// Helper function to stringify enum values
const stringifyEnum = (enumObj: any, value: string) => {
    return (
        Object.entries(enumObj).find(([key, val]) => val === value)?.[0] ||
        value
    );
};

const safeStringify = (obj: any) => {
    if (!obj) {
        return "";
    }

    return JSON.stringify(obj).replace(/^"|"$/g, "");
};

export default function ProjectForm() {
    const [slug] = useQueryState("slug", { defaultValue: "" });
    const { toast } = useToast();

    const submitMutation = useMutation({
        mutationKey: ["submission"],
        mutationFn: (body: {
            type: Type;
            slug: string;
            fileContent: string;
        }) => {
            return fetcher("/api/submission", {
                method: "POST",
                body: JSON.stringify(body),
            });
        },
        onSuccess: (data: { url: string }) => {
            toast({
                title: "PR Submitted",
                description: (
                    <Link target="_blank" className="underline" href={data.url}>
                        {data.url}
                    </Link>
                ),
            });
        },
        onError: (error: any) => {
            const errorMessage =
                error.response?.data?.message ||
                error.message ||
                "Something went wrong...";
            toast({
                title: "PR Submission failed",
                description: errorMessage,
                variant: "destructive",
            });
        },
    });

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: (() => {
            const project = [...allLayers, ...allInfrastructures].find(
                (item) => item.slug === slug,
            );
            if (project) {
                return {
                    ...project,
                    links: project.links.map((link) => ({
                        text: link.text as Site,
                        url: link.url.toString(),
                    })),
                    riskFactors: project.riskFactors.filter(
                        (factor): factor is RiskFactor => factor !== "",
                    ),
                    associatedLayers: project.associatedLayers || "",
                };
            }
            return {
                type: Type.Layer,
                slug: "",
                title: "",
                entityType: EntityType.Rollup,
                live: LiveStatus.Mainnet,
                links: [],
                description: "",
                sections: [],
                riskFactors: [],
                staking: false,
                bridge: false,
                underReview: false,
                bitcoinOnly: false,
                associatedLayers: "",
            };
        })(),
    });

    async function onSubmit(values: z.infer<typeof formSchema>) {
        // Prepare the file content
        const fileContent = `
import { Type, LiveStatus, Purpose, RiskFactor, EntityType, Site, RiskCategory, ContentSection, AssessmentCategory, AssessmentSection, RiskSection, LayerProject, InfrastructureProject } from "@/content/props";

const ${values.slug}: ${values.type === Type.Layer ? "LayerProject" : "InfrastructureProject"} = {
  type: Type.${stringifyEnum(Type, values.type)},
  slug: "${values.slug}",
  title: "${values.title}",
  entityType: EntityType.${stringifyEnum(EntityType, values.entityType)},
  live: LiveStatus.${stringifyEnum(LiveStatus, values.live)},
  staking: ${values.staking},
  bridge: ${values.bridge},
  underReview: ${values.underReview},
  riskFactors: [${(values?.riskFactors || []).map((factor) => `RiskFactor.${stringifyEnum(RiskFactor, factor)}`).join(", ")}],
  nativeToken: "${values.nativeToken}",
  bitcoinOnly: ${values.bitcoinOnly},
  links: [
    ${values.links
        .map(
            (link) => `{
      text: Site.${stringifyEnum(Site, link.text)},
      url: "${link.url}"
    }`,
        )
        .join(",\n    ")}
  ],
  description: "${safeStringify(values.description)}",
  associatedLayers: "${safeStringify(values.associatedLayers)}",${
      values.type === Type.Layer
          ? `
  btcLocked: ${values.btcLocked},
  feeToken: "${safeStringify(values.feeToken)}",
  riskAnalysis: [
    ${values.riskAnalysis
        .map(
            (risk) => `{
      category: RiskCategory.${stringifyEnum(RiskCategory, risk.category)},
      score: ${risk.score},
      tier: ${risk.tier ? `RiskFactor.${stringifyEnum(RiskFactor, risk.tier)}` : '""'},
      title: "${safeStringify(risk.title)}",
      content: "${safeStringify(risk.content)}"
    }`,
        )
        .join(",\n    ")}
  ],
  sections: [
    ${values.sections
        .map(
            (section) => `{
      id: "${safeStringify(section.id)}",
      title: "${safeStringify(section.title)}",
      content: [
        ${section.content
            .map(
                (item) => `{
          title: "${safeStringify(item.title)}",
          content: "${safeStringify(item.content)}"
        }`,
            )
            .join(",\n        ")}
      ]
    }`,
        )
        .join(",\n    ")}
  ]
  `
          : `
  purpose: Purpose.${stringifyEnum(Purpose, values.purpose)},
  assessment: [
    ${values.assessment
        ?.map(
            (assess) => `{
      category: AssessmentCategory.${stringifyEnum(AssessmentCategory, assess.category)},
      score: ${assess.score},
      tier: ${assess.tier ? `RiskFactor.${stringifyEnum(RiskFactor, assess.tier)}` : "null"},
      title: "${safeStringify(assess.title)}",
      content: "${safeStringify(assess.content)}"
    }`,
        )
        .join(",\n    ")}
  ],
  sections: [
    ${values.sections
        .map(
            (section) => `{
      id: "${safeStringify(section.id)}",
      title: "${safeStringify(section.title)}",
      content: [
        ${section.content
            .map(
                (item) => `{
          title: "${safeStringify(item.title)}",
          content: "${safeStringify(item.content)}"
        }`,
            )
            .join(",\n        ")}
      ]
    }`,
        )
        .join(",\n    ")}
  ]
  `
  }
};

export default ${values.slug};
`.trim();

        submitMutation.mutate({
            type: values.type,
            slug: values.slug,
            fileContent,
        });
    }

    const title = form.watch("title");
    const watchType = form.watch("type");

    return (
        <Card className="w-auto mx-4 mt-12">
            <CardHeader>
                <CardTitle>{title || "New Project"}</CardTitle>
            </CardHeader>
            <CardContent>
                <Form {...form}>
                    <form
                        onSubmit={form.handleSubmit(onSubmit)}
                        className="space-y-8"
                    >
                        <BasicInfoForm control={form.control} />
                        <FeaturesForm control={form.control} />
                        <RiskFactorsForm control={form.control} />
                        <LinksForm control={form.control} />
                        <SectionsForm control={form.control} />
                        {watchType === Type.Infrastructure && (
                            <InfrastructureForm control={form.control} />
                        )}
                        {watchType === Type.Layer && (
                            <LayerForm control={form.control} />
                        )}
                        <div className="flex justify-end">
                            {submitMutation.isPending ? (
                                <Button
                                    variant="default"
                                    disabled
                                    type="button"
                                    className="text-white"
                                >
                                    <Loader2 className="mr-2 h-4 w-4 animate-spin text-white" />
                                    Please wait
                                </Button>
                            ) : (
                                <Button
                                    variant="default"
                                    className="text-white"
                                    type="submit"
                                >
                                    Submit
                                </Button>
                            )}
                        </div>
                    </form>
                </Form>
            </CardContent>
        </Card>
    );
}
