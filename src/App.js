import React, { useRef } from 'react';
import Hero from "./components/Hero";
import FeatureOne from "./components/FeatureOne";
import FeatureTwo from './components/FeatureTwo';
import Track from "./components/Track";
import Raven from "./images/raven.png"

const namespaces = {
  ans: {
    title: 'Arweave Name Service (ANS)',
    icon: 'ⓐ',
    cta: 'Visit ans.gg',
    ctaLink: 'https://ans.gg',
    desc: 'ANS is the most widely-adopted name service on Arweave, integrated with ArConnect, ViewBlock and more. Over 1,500 domains minted.',
  },
  more: {
    title: 'Raven Protocol Name Service',
    icon: '',
    pic: `${Raven}`,
    cta: 'Coming soon...',
    ctaLink: '',
    disabled: 'disabled',
    desc: 'Raven Protocol developed their .raven identity system on top of namespace.gg',
  },
  yours: {
    title: 'Create yours',
    icon: '+',
    cta: 'Get in touch',
    ctaLink: '',
    disabled: 'disabled',
    desc: 'We\'re onboarding early beta users as we move towards automating the process. Get in touch',
  }
  }

function App() {
  const tracksRef = useRef();

  return (
    <div className="bg-black">
      <Hero tracksRef={tracksRef} />
      <FeatureOne />
      <FeatureTwo />
      <div ref={tracksRef} class="mx-auto max-w-4xl text-center mt-8 py-6">
        <h1
          class="mb-5 bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400 bg-clip-text text-4xl font-extrabold text-transparent sm:text-4xl"
        >
          Namespaces
        </h1>
      </div>
      <div className="grid grid-cols-1 gap-10 pb-8 px-8">
        <Track content={namespaces.ans} />
        <Track content={namespaces.more} />
        <Track content={namespaces.yours} />
      </div>
    </div>
  );
}

export default App;
