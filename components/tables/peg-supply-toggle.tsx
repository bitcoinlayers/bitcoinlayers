import React from "react";
import { ChevronDown } from "lucide-react";

interface PegSupplyToggleProps {
    currentView: "pegs" | "supply";
    onViewChange: (view: "pegs" | "supply") => void;
}

const PegSupplyToggle: React.FC<PegSupplyToggleProps> = ({ 
    currentView, 
    onViewChange 
}) => {
    const [isOpen, setIsOpen] = React.useState(false);

    const viewOptions = [
        { value: "pegs" as const, label: "Pegs" },
        { value: "supply" as const, label: "Supply" }
    ];

    const currentOption = viewOptions.find(option => option.value === currentView);

    return (
        <div className="relative">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center gap-1 text-sm font-medium leading-tight text-foreground hover:text-brand transition-colors"
            >
                <span>BTC {currentOption?.label}</span>
                <ChevronDown className={`w-3 h-3 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
            </button>
            
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <div 
                        className="fixed inset-0 z-10" 
                        onClick={() => setIsOpen(false)}
                    />
                    
                    {/* Dropdown */}
                    <div className="absolute top-full left-0 mt-1 bg-popover border border-border rounded-md shadow-lg z-20 min-w-[120px]">
                        {viewOptions.map((option) => (
                            <button
                                key={option.value}
                                onClick={() => {
                                    onViewChange(option.value);
                                    setIsOpen(false);
                                }}
                                className={`w-full text-left px-3 py-2 text-sm hover:bg-muted transition-colors first:rounded-t-md last:rounded-b-md ${
                                    currentView === option.value 
                                        ? 'bg-brand/10 text-brand font-medium' 
                                        : 'text-foreground'
                                }`}
                            >
                                BTC {option.label}
                            </button>
                        ))}
                    </div>
                </>
            )}
        </div>
    );
};

export default PegSupplyToggle; 