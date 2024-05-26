import React from "react";
import { Layer } from "./layerProps";

const LayerSummary: React.FC<{ layer: Layer }> = ({ layer }) => {
  return (
    <div className="flex flex-wrap sm:flex-row sm:flex-nowrap justify-between w-full sm:w-full panel p-4 rounded-xl sm:mr-4 mb-0 sm:mb-0 bg-lightsecondary dark:bg-secondary">
      <div className="w-full sm:w-1/4 mb-2 sm:mb-0 sm:mr-4 sm:ml-0 -ml-1 mr-1 sm:px-0 pl-4 sm:border-r border-b sm:border-b-0">
        <div className="textbox flex flex-row sm:flex-col justify-between items-baseline mx-auto">
          <h4 className="text-sm sm:text-base font-medium my-0 sm:my-1">Bridge</h4>
          <h3 className="text-base sm:text-xl font-bold my-0 sm:my-2 h-6 sm:h-12">{layer.btcBridge}</h3>
          <div className="text-sm font-extralight my-0 sm:my-2 cursor-pointer relative group">
            Learn More
            <div className="absolute -left-36 -left-4 sm:-left-20 top-full w-60 mt-2 hidden group-hover:flex flex-col items-center before:content-[''] before:absolute before:top-0 before:left-1/2 before:-translate-x-1/2 before:-translate-y-full before:border-l-8 before:border-l-transparent before:border-r-8 before:border-r-transparent before:border-b-8 before:border-b-white z-10">
              <div className="bg-lightsecondary dark:text-white text-xs rounded py-1 px-3 border border-white">
                <p className="text-lg font-bold">Bridge Design</p>
                <p>
                  Bridge Design is the architecture of either the consensus-enshrined BTC
                  bridge, or the safest third-party bridge (if there is no
                  enshrined bridge). For more information on the security assumptions of the
                  bridge design, see the Risk Analysis section.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full sm:w-1/4 mb-2 sm:mb-0 sm:mr-4 sm:ml-0 -ml-1 mr-1 sm:px-0 pl-4 sm:border-r border-b sm:border-b-0">
        <div className="textbox flex flex-row sm:flex-col justify-between items-baseline mx-auto">
          <h4 className="text-sm sm:text-base font-medium my-0 sm:my-1">BTC TVL</h4>
          <h3 className="text-base sm:text-xl font-bold my-0 sm:my-2 h-6 sm:h-12">{Number(layer.btcLocked).toLocaleString()} BTC</h3>
          <div className="text-sm font-extralight my-0 sm:my-2 cursor-pointer relative group">
            Learn More
            <div className="absolute -left-36 sm:-left-20 top-full w-60 mt-2 hidden group-hover:flex flex-col items-center before:content-[''] before:absolute before:top-0 before:left-1/2 before:-translate-x-1/2 before:-translate-y-full before:border-l-8 before:border-l-transparent before:border-r-8 before:border-r-transparent before:border-b-8 before:border-b-white z-10">
              <div className="bg-lightsecondary dark:text-white text-xs rounded py-1 px-2 border border-white">
                <p className="text-lg font-bold">BTC Total Value Locked</p>
                <p>
                  BTC TVL represents the total amount of bridged BTC on this
                  layer. This includes BTC from consensus-enshrined bridges,
                  third-party bridges, and synthetic issuance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full sm:w-1/4 mb-2 sm:mb-0 sm:mr-4 sm:ml-0 -ml-1 mr-1 sm:px-0 pl-4 sm:border-r border-b sm:border-b-0">
        <div className="textbox flex flex-row sm:flex-col justify-between items-baseline mx-auto">
          <h4 className="text-sm sm:text-base font-medium my-0 sm:my-1">Layer</h4>
          <h3 className="text-base sm:text-xl font-bold my-0 sm:my-2 h-6 sm:h-12">{layer.layerType}</h3>
          <div className="text-sm font-extralight my-0 sm:my-2 cursor-pointer relative group">
            Learn More
            <div className="absolute -left-36 sm:-left-20 top-full w-60 mt-2 hidden group-hover:flex flex-col items-center before:content-[''] before:absolute before:top-0 before:left-1/2 before:-translate-x-1/2 before:-translate-y-full before:border-l-8 before:border-l-transparent before:border-r-8 before:border-r-transparent before:border-b-8 before:border-b-white z-10">
              <div className="bg-lightsecondary dark:text-white text-xs rounded py-1 px-2 border border-white">
                <p className="text-lg font-bold">Layer Type</p>
                <p>Layers include Sidechains, Rollups, State Channels, State Chains, Metaprotocols, L2s, and more. For more details on the security assumptions of the layer type, see the Risk Analysis section.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full sm:w-1/4 mb-0 sm:px-0 pl-4 -ml-1 sm:-ml-0">
        <div className="textbox flex flex-row sm:flex-col justify-between items-baseline mx-auto">
          <h4 className="text-sm sm:text-base font-medium my-0 sm:my-1">Fee Token</h4>
          <h3 className="text-base sm:text-xl font-bold my-0 sm:my-2 h-6 sm:h-12">{layer.feeToken}</h3>
          <div className="text-sm font-extralight my-0 sm:my-2 cursor-pointer relative group">
            Learn More
            <div className="absolute -left-36 sm:-left-20 top-full w-60 mt-2 hidden group-hover:flex flex-col items-center before:content-[''] before:absolute before:top-0 before:left-1/2 before:-translate-x-1/2 before:-translate-y-full before:border-l-8 before:border-l-transparent before:border-r-8 before:border-r-transparent before:border-b-8 before:border-b-white z-10">
              <div className="bg-lightsecondary dark:text-white text-xs rounded py-1 px-2 border border-white">
                <p className="text-lg font-bold">Fee Token</p>
                <p>
                  Fee tokens are used to pay for transaction fees on a layer. In some
                  cases, networks will enable multiple fee tokens: typically a
                  native token in addition to a consensus-enshrined cross-chain
                  BTC.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LayerSummary;
