import React from 'react'
import Hero from "./components/Hero";
import Logos from "./components/Logos";
import Arweave from "./components/Arweave";
import Track from "./components/Track";

const tracks = {
  education: {
    title: 'Educational content',
    icon: '📚',
    desc: 'Create a technology-focused content series for Arweave developers or end users. Videos, articles and podcasts are all welcome.',
  },
  devtooling: {
    title: 'Developer tooling',
    icon: '⚗️',
    desc: 'Build libraries, infrastructure and extensions to make the life of Arweave developers easier or open up totally new possibilities.'
  },
  web3dapps: {
    title: 'Web3 dApps',
    icon: '🪄',
    desc: 'Build dApps or infrastructure that\'ll take Arweave to the next level in web3. Social, the creator economy, data discovery, DAOs and more.',
  },
  crosschain: {
    title: 'Cross-chain',
    icon: '🌀',
    desc: 'Bridge the gap between Arweave and the wider world of web3. Build dApps and infrastructure that interface with other chains in clever ways.'
  }
}

function App() {
  return (
    <div className="bg-gray-900">
      <Hero />
      <Arweave />
      <Logos />
      <div class="mx-auto max-w-4xl text-center mt-8 py-6">
        <h1
          class="mb-5 bg-gradient-to-r from-pink-400 to-yellow-400 bg-clip-text text-4xl font-extrabold text-transparent sm:text-4xl"
        >
          Tracks
        </h1>
      </div>
      <div className="grid grid-cols-1 gap-10 pb-8">
        <Track content={tracks.education} />
        <Track content={tracks.devtooling} />
        <Track content={tracks.web3dapps} />
        <Track content={tracks.crosschain} />
      </div>
    </div>
  );
}

export default App;
