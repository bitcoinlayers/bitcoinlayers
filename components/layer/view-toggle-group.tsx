"use client";

import React, { useState } from "react";
import { useQueryState } from "nuqs";
import { ChevronDown } from "lucide-react";

const viewOptions = [
    { value: "networks", label: "Networks" },
    // { value: "staking", label: "Staking" },
    { value: "wrappers", label: "Wrappers" },
];

const moreOptions = [
    { value: "other protocols", label: "Other Protocols" },
    { value: "opcodes", label: "Opcodes (Coming Soon)", disabled: true },
];

const ViewToggleGroup = ({ showAll }: { showAll: boolean }) => {
    const [view, setView] = useQueryState("view", {
        defaultValue: showAll ? "all" : "networks",
    });
    const [subView, setSubView] = useQueryState("subview", {
        defaultValue: "other",
    });
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const displayOptions = showAll
        ? [{ value: "all", label: "All" }, ...viewOptions]
        : viewOptions;

    const isMoreActive = view === "more";
    const activeMoreOption = moreOptions.find(option => option.value === subView) || moreOptions[0];

    const handleMoreClick = (optionValue: string) => {
        setView("more");
        setSubView(optionValue);
        setDropdownOpen(false);
    };

    return (
        <div className="flex justify-start relative z-20">
            <div className="flex gap-2">
                {displayOptions.map((option) => {
                    const isActive = view === option.value;
                    return (
                        <div
                            key={option.value}
                            className={`h-[30px] px-4 py-[5px] rounded-full border-2 justify-center items-center gap-1.5 flex cursor-pointer ${
                                isActive
                                    ? "bg-background border-brand"
                                    : "border-muted-foreground"
                            }`}
                            onClick={() => {
                                setView(option.value);
                                setDropdownOpen(false);
                            }}
                        >
                            <div
                                className={`text-center text-sm font-medium leading-tight ${
                                    isActive
                                        ? "text-brand"
                                        : "text-muted-foreground"
                                }`}
                            >
                                {option.label}
                            </div>
                        </div>
                    );
                })}
                
                {/* More Button with Dropdown */}
                <div className="relative">
                    <div
                        className={`h-[30px] px-4 py-[5px] rounded-full border-2 justify-center items-center gap-1.5 flex cursor-pointer ${
                            isMoreActive
                                ? "bg-background border-brand"
                                : "border-muted-foreground"
                        }`}
                        onClick={() => setDropdownOpen(!dropdownOpen)}
                    >
                        <div
                            className={`text-center text-sm font-medium leading-tight ${
                                isMoreActive
                                    ? "text-brand"
                                    : "text-muted-foreground"
                            }`}
                        >
                            {isMoreActive ? activeMoreOption.label : "More"}
                        </div>
                        <ChevronDown 
                            className={`w-4 h-4 transition-transform ${
                                dropdownOpen ? "rotate-180" : ""
                            } ${isMoreActive ? "text-brand" : "text-muted-foreground"}`}
                        />
                    </div>
                    
                    {/* Dropdown Menu */}
                    {dropdownOpen && (
                        <div className="absolute top-full mt-1 left-0 bg-background border border-border rounded-lg shadow-lg min-w-[200px] z-30">
                            {moreOptions.map((option) => (
                                <div
                                    key={option.value}
                                    className={`px-4 py-2 transition-colors first:rounded-t-lg last:rounded-b-lg ${
                                        option.disabled
                                            ? "cursor-not-allowed text-muted-foreground opacity-50"
                                            : `cursor-pointer hover:bg-muted ${
                                                subView === option.value && isMoreActive
                                                    ? "bg-muted text-brand"
                                                    : "text-foreground"
                                            }`
                                    }`}
                                    onClick={() => !option.disabled && handleMoreClick(option.value)}
                                >
                                    {option.label}
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ViewToggleGroup;
