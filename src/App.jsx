import React from 'react';
import Hero from './components/Hero';
import MediaTicker from './components/MediaTicker';
import ToolsShowcase from './components/ToolsShowcase';
import ImpactSections from './components/ImpactSections';

export default function App() {
  return (
    <div className="min-h-screen w-full bg-black font-inter text-white">
      <Hero />
      <MediaTicker />
      <ToolsShowcase />
      <ImpactSections />
    </div>
  );
}
