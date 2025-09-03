interface MediaNavProps {
    activeContent: "live" | "podcasts";
    setActiveContent: (content: "live" | "podcasts") => void;
}

export default function MediaNav({ activeContent, setActiveContent }: MediaNavProps) {
    return (
        <div className="flex items-center gap-4 mb-4">
            <button
                onClick={() => setActiveContent("live")}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                    activeContent === "live"
                        ? "bg-brand text-white"
                        : "bg-secondary text-text_primary hover:bg-brand/10"
                }`}
            >
                🔴 Live Stream
            </button>
            <button
                onClick={() => setActiveContent("podcasts")}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                    activeContent === "podcasts"
                        ? "bg-brand text-white"
                        : "bg-secondary text-text_primary hover:bg-brand/10"
                }`}
            >
                🎙️ Podcasts
            </button>
        </div>
    );
}
