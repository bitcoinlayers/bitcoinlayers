"use client";

import React from "react";
import { useQueryState } from "nuqs";

const viewOptions = [
    { value: "layers", label: "Layers" },
    { value: "staking", label: "Staking" },
    { value: "wrappers", label: "Wrappers" },
];

const ViewToggleGroup = () => {
    const [view, setView] = useQueryState("view", {
        defaultValue: viewOptions[0].value,
    });

    return (
        <div className="flex justify-start relative z-20">
            <div className="flex gap-2">
                {viewOptions.map((option) => {
                    const isActive = view === option.value;
                    return (
                        <div
                            key={option.value}
                            className={`h-[30px] px-4 py-[5px] rounded-full border-2 justify-center items-center gap-1.5 flex cursor-pointer ${
                                isActive
                                    ? "bg-white border-orange-600"
                                    : "border-slate-300"
                            }`}
                            onClick={() => setView(option.value)}
                        >
                            <div
                                className={`text-center text-sm font-medium leading-tight ${
                                    isActive
                                        ? "text-orange-600"
                                        : "text-slate-600"
                                }`}
                            >
                                {option.label}
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default ViewToggleGroup;
