import React from "react";
import { Layer } from "./layerProps";

const LayerMenu: React.FC<{ layer: Layer }> = ({ layer }) => {
  return (
    <nav className="sticky top-0 h-screen w-full overflow-y-auto pt-6">
      <div className="flex flex-col justify-start items-start gap-4">
        {[
          ...layer.sections,
          { id: "knowledgebits", title: "Knowledge Bits" },
        ].map((section, index) => (
          <div key={index} className="flex justify-start items-center gap-4">
            <div
              className={`w-[3px] h-10 ${
                index === 0 ? "bg-orange-600" : "opacity-0 bg-slate-50"
              }`}
            ></div>
            <a
              className={`no-underline text-sm ${
                index === 0
                  ? 'text-orange-600 font-semibold font-["Inter"] leading-tight'
                  : "text-neutral-700 font-light leading-tight"
              }`}
              href={`#${section.id}`}
            >
              {section.title}
            </a>
          </div>
        ))}
      </div>
    </nav>
  );
};

export default LayerMenu;