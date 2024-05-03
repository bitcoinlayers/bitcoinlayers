import React from "react";

const AboutPage: React.FC = () => {
  return (
    <article className="py-6 prose dark:prose-invert max-w-6xl mx-auto pb-12">
      <h1>About</h1>
      <hr />
      <div className="pt-0 px-4 rounded-xl mr-4 mb-0 md:mb-0 dark:bg-secondary rounded-lg bg-lightsecondary px-4">
        <h2 className="pt-6 pt-6 dark:text-bitcoin dark:border-bitcoin border-b">The Team</h2>
        <p className="pb-4">Bitcoin Layers is currently managed on a volunteer basis by Januszg (a pseudonymous contributor) and Red Sheehan from Messari. Januszg has experience leading marketing functions at well-known projects in the privacy and scaling space. Red is a crypto research analyst specializing in base layer network architectures.</p>
      </div>
      <div className="pt-0 px-4 rounded-xl mr-4 mb-0 md:mb-0 dark:bg-secondary rounded-lg bg-lightsecondary px-4">
        <h2 className="pt-6 pt-6 dark:text-bitcoin dark:border-bitcoin border-b">The Project</h2>
        <p className="pb-4">Bitcoin Layers is an educational tool that helps users understand the risks associated with various protocols that support Bitcoin and BTC the asset. We analyze risk primarily for protocols that claim to be a Bitcoin L2. The project is free and open-source under an MIT license. Anyone is welcome to use our code and risk framework for their own project.</p>
      </div>
    </article>
  );
};

export default AboutPage;
