import Link from "next/link";
import React from "react";

const SupportPage: React.FC = () => {
  return (
    <article className="py-6 prose dark:prose-invert max-w-6xl mx-auto pb-12">
      <h1>Support</h1>
      <hr />
      <div className="pt-0 px-4 rounded-xl mr-4 mb-0 md:mb-0 dark:bg-secondary rounded-lg bg-highlight bg-opacity-20 dark:bg-opacity-100 px-4">
        <h2 className="pt-6 pt-6 dark:text-bitcoin dark:border-bitcoin border-b">
          How to support the Bitcoin Layers team:
        </h2>
        <p className="pb-4">
          Bitcoin Layers is currently managed on a volunteer basis by{" "}
          <Link href="https://twitter.com/januszg_" target="_blank">
            Januszg
          </Link>{" "}
          (a pseudonymous contributor) and{" "}
          <Link href="https://twitter.com/redvelvetzip" target="_blank">
            Red Sheehan
          </Link>{" "}
          from Messari. Both have experience working in the Bitcoin space, and
          have conducted research on Bitcoin scaling protocols. If you would
          like to support their work, consider donating at the Bitcoin address
          below.
        </p>
        <p className="pb-4">
          <Link
            href="https://mempool.space/address/bc1p73rvkvrsz5nup2p8zrfg433hk5y0ng5urd5u4zvdhpvjzml0hzyss7faky"
            target="_blank"
          >
            bc1p73rvkvrsz5nup2p8zrfg433hk5y0ng5urd5u4zvdhpvjzml0hzyss7faky
          </Link>{" "}
        </p>
      </div>
    </article>
  );
};

export default SupportPage;
