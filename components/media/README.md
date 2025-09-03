# Bitcoin Media Components

This directory contains the media site components that provide a comprehensive Bitcoin-focused media experience with the Bitcoin Layers design system.

## Components Overview

### 📺 Video Player (`video-player.tsx`)
- **Live streaming support** with HLS integration
- **Podcast playback** with episode management
- **Custom controls** with play/pause, volume, fullscreen, and PiP
- **Responsive design** that works on all devices
- **Loading states** with branded Bitcoin styling

### 📊 Data Metrics (`data-metrics.tsx`)
- **Real-time Bitcoin price** with mini charts
- **Layer 2 activity metrics** (Lightning, Liquid, etc.)
- **Interactive time periods** (1H, 24H, 7D)
- **Network statistics** in card format
- **Based on top gainers design pattern** for consistency

### 📰 News Section (`news-section.tsx`)
- **Real-time news aggregation** from trusted Bitcoin sources
- **Category filtering** (Bitcoin, Layer 2, Markets, Regulatory, Technology)
- **Sentiment analysis** indicators (Bullish, Bearish, Neutral)
- **Live updates** with automatic refresh
- **Responsive card layout** with hover effects

### 🎛️ Media Navigation (`media-nav.tsx`)
- **Toggle between Live Stream and Podcasts**
- **Live viewer count** display
- **Branded styling** consistent with site theme

## Design Features

### 🎨 Visual Design
- **Bitcoin Layers theme integration** with brand colors (#FE4F18)
- **Playfair Display** typography for headers
- **Card-based layout** using shadcn/ui components
- **Mini chart visualizations** for data metrics
- **Consistent hover animations** and transitions

### 📱 Responsive Layout
- **Mobile-first design** with lg: breakpoints
- **Grid layouts** that adapt to screen sizes
- **Touch-friendly controls** for mobile devices
- **Optimized for all viewport sizes**

### ⚡ Performance
- **Lazy loading** for video content
- **Optimized re-renders** with proper React patterns
- **Efficient state management** for real-time updates
- **Progressive enhancement** for better UX

## Integration Points

### 🔌 API Integration
The components are designed to easily integrate with:
- **Bitcoin Layers API** for metrics data
- **News aggregation APIs** (replace mock data)
- **Video streaming services** (HLS, DASH)
- **Real-time price feeds** for live updates

### 🛠️ Customization
- **Color scheme** uses CSS variables for easy theming
- **Component modularity** allows for independent usage
- **Props-based configuration** for flexible implementation
- **TypeScript interfaces** for type safety

## Usage Example

```tsx
import MediaPage from "@/app/media/page";

// The media page automatically includes all components
// and handles responsive layout
```

## Future Enhancements

- [ ] WebRTC integration for live streaming
- [ ] Podcast subscription management
- [ ] Advanced charting with more data points
- [ ] Push notifications for breaking news
- [ ] Social media integration
- [ ] Comment system for community engagement

## Dependencies

- **shadcn/ui** components (Card, Badge, ToggleGroup)
- **Lucide React** icons
- **Next.js** for routing and performance
- **Tailwind CSS** for styling
- **TypeScript** for type safety

The media components seamlessly integrate with the existing Bitcoin Layers codebase while providing a modern, engaging media experience focused on Bitcoin and Layer 2 technologies.
