import React, { useEffect } from "react";
import Image from "next/image";

interface SheetProps {
    isOpen: boolean;
    onClose: () => void;
    children: React.ReactNode;
}

const Sheet: React.FC<SheetProps> = ({ isOpen, onClose, children }) => {
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }
    }, [isOpen]);

    return (
        <div
            className={`fixed inset-0 z-50 h-[100vh] ${
                isOpen ? "" : "pointer-events-none"
            }`}
        >
            <div
                className={`fixed inset-0 bg-black bg-opacity-50 transition-opacity h-[100vh] ${
                    isOpen ? "opacity-100" : "opacity-0"
                }`}
                onClick={onClose}
            ></div>
            <div
                className={`absolute right-0 top-0 bottom-0 w-64 bg-white shadow-lg p-4 transition-transform transform ${
                    isOpen ? "translate-x-0 delay-150" : "translate-x-full"
                }`}
            >
                <button
                    className="absolute top-4 right-4 text-gray-500 hover:text-gray-800"
                    onClick={onClose}
                >
                    <Image src="/icons/close.svg" alt="close" width={20} height={20} />
                </button>
                {children}
            </div>
        </div>
    );
};

export default Sheet;
