import React from "react";
import { LayerProject, InfrastructureProject } from "@/content/props";
import Image from "next/image";
import { parseTextWithLinks } from "@/util/parseTextWithLinks";

interface UnderReviewModalContentProps {
    project: LayerProject | InfrastructureProject;
    title: string;
}

const UnderReviewModalContent: React.FC<UnderReviewModalContentProps> = ({ project, title }) => {
    return (
        <div className="space-y-6">
            {/* Project Header */}
            <div className="flex items-center gap-3">
                <Image
                    src={`/logos/${project.slug}.png`}
                    alt={project.title}
                    width={32}
                    height={32}
                    className="rounded-full object-cover bg-muted"
                    onError={(e) => {
                        (e.target as HTMLImageElement).src = '/logos/default.png';
                    }}
                />
                <div>
                    <h3 className="text-xl font-medium text-foreground" style={{ lineHeight: "28px" }}>
                        {project.title} - {title}
                    </h3>
                </div>
            </div>
            
            {/* Underline separator */}
            <hr className="border-border" />
            
            {/* Under Review Content */}
            <div className="space-y-4">
                <div>
                    <h4 className="text-lg font-semibold text-foreground mb-3">
                        Project Under Review
                    </h4>
                    <div className="space-y-3">
                        <p className="text-foreground">
                            This project's categorization and technical implementation are currently under review by our team.
                        </p>
                        <p className="text-foreground">
                            We are evaluating whether it meets our technical standards to be considered a bitcoin sidesystem or integrated chain.
                        </p>
                        {project.notice && (
                            <div className="bg-muted p-4 rounded-lg">
                                <p className="text-foreground">
                                    {parseTextWithLinks(project.notice)}
                                </p>
                            </div>
                        )}
                    </div>
                </div>
                
                <div className="border-t border-border pt-4">
                    <h5 className="font-medium text-foreground mb-2">What does this mean?</h5>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                        <li>• Some information may be incomplete or subject to change</li>
                        <li>• Risk assessments and categorization are preliminary</li>
                        <li>• Final categorization will be published once review is complete</li>
                    </ul>
                </div>
                
                <div className="border-t border-border pt-4">
                    <p className="text-sm text-muted-foreground">
                        <a
                            href="https://www.lxresearch.co/starting-to-define-layers-a-year-later/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:underline text-blue-600 dark:text-blue-400"
                        >
                            Learn more about our categorization standards →
                        </a>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default UnderReviewModalContent; 