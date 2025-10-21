// Application to Custody Mechanism Mappings
// This maps popular Bitcoin applications, wallets, and services to their underlying custody mechanisms

export interface ApplicationMapping {
    name: string;
    slug: string; // For logo mapping
    category: 'wallet' | 'exchange' | 'defi' | 'service' | 'bridge' | 'staking';
    description: string;
    pegSlug: string;
    chainSlug: string;
    keywords: string[]; // Additional search terms
}

export const applicationMappings: ApplicationMapping[] = [
    // Lightning Wallets
    {
        name: "Wallet of Satoshi",
        slug: "wallet-of-satoshi",
        category: "wallet",
        description: "Lightning wallet",
        pegSlug: "spark",
        chainSlug: "lightning",
        keywords: ["wos", "wallet satoshi", "lightning wallet", "custodial lightning"]
    },
];

// Search function for applications
export function searchApplications(query: string): ApplicationMapping[] {
    const searchTerm = query.toLowerCase();
    
    return applicationMappings.filter(app => {
        return (
            app.name.toLowerCase().includes(searchTerm) ||
            app.description.toLowerCase().includes(searchTerm) ||
            app.keywords.some(keyword => keyword.toLowerCase().includes(searchTerm))
        );
    });
}

// Get application by exact name
export function getApplicationByName(name: string): ApplicationMapping | undefined {
    return applicationMappings.find(app => 
        app.name.toLowerCase() === name.toLowerCase()
    );
}

// Get applications by category
export function getApplicationsByCategory(category: ApplicationMapping['category']): ApplicationMapping[] {
    return applicationMappings.filter(app => app.category === category);
} 