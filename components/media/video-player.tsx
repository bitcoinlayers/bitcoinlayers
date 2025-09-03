"use client";

import { useState, useRef } from "react";
import { Play, Pause, Volume2, VolumeX, Maximize, PictureInPicture } from "lucide-react";

interface VideoPlayerProps {
    activeContent: "live" | "podcasts";
}

export default function VideoPlayer({ activeContent }: VideoPlayerProps) {
    const [isPlaying, setIsPlaying] = useState(false);
    const [isMuted, setIsMuted] = useState(true);
    const [volume, setVolume] = useState(0.5);
    const videoRef = useRef<HTMLVideoElement>(null);

    const togglePlay = () => {
        if (videoRef.current) {
            if (isPlaying) {
                videoRef.current.pause();
            } else {
                videoRef.current.play();
            }
            setIsPlaying(!isPlaying);
        }
    };

    const toggleMute = () => {
        if (videoRef.current) {
            videoRef.current.muted = !isMuted;
            setIsMuted(!isMuted);
        }
    };

    const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newVolume = parseFloat(e.target.value);
        setVolume(newVolume);
        if (videoRef.current) {
            videoRef.current.volume = newVolume;
        }
    };

    const enterFullscreen = () => {
        if (videoRef.current) {
            videoRef.current.requestFullscreen();
        }
    };

    const enterPiP = () => {
        if (videoRef.current && 'requestPictureInPicture' in videoRef.current) {
            (videoRef.current as any).requestPictureInPicture();
        }
    };

    return (
        <div className="relative bg-black rounded-lg overflow-hidden border border-stroke_secondary">
            {/* Video Container */}
            <div className="relative aspect-video bg-black">
                <video
                    ref={videoRef}
                    className="w-full h-full"
                    poster="/Bitcoin.svg"
                    muted={isMuted}
                    playsInline
                >
                    {/* Placeholder for video sources */}
                    <source src="/placeholder-stream.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>

                {/* Loading Overlay */}
                <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                    <div className="text-center text-white">
                        <div className="w-16 h-16 border-4 border-gray-600 border-t-brand rounded-full animate-spin mx-auto mb-4"></div>
                        <div className="text-lg font-medium">
                            {activeContent === "live" ? "Connecting to live stream..." : "Loading podcast..."}
                        </div>
                        <div className="text-sm text-gray-400 mt-2">
                            {activeContent === "live" ? "Bitcoin Media Network" : "Bitcoin Podcast Archive"}
                        </div>
                    </div>
                </div>

                {/* Play Button Overlay */}
                <button
                    onClick={togglePlay}
                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-black/40 hover:bg-black/60 rounded-full flex items-center justify-center transition-colors"
                >
                    {isPlaying ? (
                        <Pause className="w-8 h-8 text-white ml-1" />
                    ) : (
                        <Play className="w-8 h-8 text-white ml-1" />
                    )}
                </button>

                {/* Controls */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                    <div className="flex items-center gap-4">
                        {/* Play/Pause */}
                        <button
                            onClick={togglePlay}
                            className="text-white hover:text-brand transition-colors"
                        >
                            {isPlaying ? <Pause className="w-6 h-6" /> : <Play className="w-6 h-6" />}
                        </button>

                        {/* Volume Controls */}
                        <div className="flex items-center gap-2">
                            <button
                                onClick={toggleMute}
                                className="text-white hover:text-brand transition-colors"
                            >
                                {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
                            </button>
                            <input
                                type="range"
                                min="0"
                                max="1"
                                step="0.05"
                                value={volume}
                                onChange={handleVolumeChange}
                                className="w-16 h-1 bg-gray-600 rounded-full appearance-none slider"
                            />
                        </div>

                        {/* Live Indicator */}
                        {activeContent === "live" && (
                            <div className="flex items-center gap-2 bg-red-600 px-3 py-1 rounded-full">
                                <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                                <span className="text-white text-sm font-medium">LIVE</span>
                            </div>
                        )}

                        <div className="flex-grow"></div>

                        {/* Right Controls */}
                        <div className="flex items-center gap-2">
                            <button
                                onClick={enterPiP}
                                className="text-white hover:text-brand transition-colors"
                            >
                                <PictureInPicture className="w-5 h-5" />
                            </button>
                            <button
                                onClick={enterFullscreen}
                                className="text-white hover:text-brand transition-colors"
                            >
                                <Maximize className="w-5 h-5" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Content Info */}
            <div className="p-4 bg-card">
                <h3 className="text-lg font-semibold text-text_header mb-2">
                    {activeContent === "live" ? "Bitcoin Market Live" : "The Bitcoin Podcast"}
                </h3>
                <p className="text-sm text-text_secondary">
                    {activeContent === "live" 
                        ? "Live coverage of Bitcoin markets, layer 2 developments, and breaking news"
                        : "Deep dive conversations with Bitcoin builders, researchers, and thought leaders"
                    }
                </p>
                
                {activeContent === "podcasts" && (
                    <div className="mt-4 space-y-2">
                        <div className="text-sm text-text_primary font-medium">Recent Episodes:</div>
                        <div className="space-y-1">
                            <div className="text-sm text-text_secondary hover:text-brand cursor-pointer">
                                • Lightning Network Scaling Solutions
                            </div>
                            <div className="text-sm text-text_secondary hover:text-brand cursor-pointer">
                                • Bitcoin Layer 2 Security Models
                            </div>
                            <div className="text-sm text-text_secondary hover:text-brand cursor-pointer">
                                • Institutional Bitcoin Adoption
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
