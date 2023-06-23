import Head from 'next/head';
import React from 'react';

import '../styles/globals.css';

function App({ Component, pageProps }: { Component: any, pageProps: any }) {
  return (
    <>
      <Head>
        <title>ONSF | Open Name Service Framework</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Krona+One&display=swap" rel="stylesheet" />

        <meta name="description" content={`An interconnected universe of sovereign name services`} />
        <meta name="twitter:card" content="summary_large_image"></meta>
        <meta name="twitter:image" content={`https://onsf.io/favicon.ico`} />
        <meta name="twitter:title" content={`ONSF`} />
        <meta name="twitter:url" content={`https://onsf.io/`}></meta>
        <meta name="twitter:description" content={`An interconnected universe of sovereign name services`} />

        <meta property="og:card" content="summary_large_image" />
        <meta property="og:image" content={`https://onsf.io/favicon.ico`} />
        <meta property="og:title" content={`ONSF`} />
        <meta property="og:url" content={`https://onsf.io/`} />
        <meta property="og:description" content={`An interconnected universe of sovereign name services`} />
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default App;
