import Link from "next/link";
import React from "react";

const ContributePage: React.FC = () => {
  return (
    <article className="py-6 prose dark:prose-invert max-w-6xl mx-auto pb-12">
      <h1>Contribute</h1>
      <hr />
      <div className="pt-0 px-4 rounded-xl mr-4 mb-0 md:mb-0 dark:bg-secondary rounded-lg bg-lightsecondary px-4">
        <h2 className="pt-6 pt-6 dark:text-bitcoin dark:border-bitcoin border-b">How to contribute to the Bitcoin Layers project:</h2>
        <p className="pb-4">For now, please join our <Link href="https://t.me/+8rv-1I2gkmQ4ZmJh" target="_blank">Telegram</Link> group or reach out on <Link href="https://twitter.com/bitcoinlayers" target="_blank">Twitter</Link> if you&apos;d like to get involved.</p>
      </div>
    </article>
  );
};

export default ContributePage;