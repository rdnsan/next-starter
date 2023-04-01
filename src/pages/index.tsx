import Head from 'next/head';
import React from 'react';

export default function Home() {
  return (
    <React.Fragment>
      <Head>
        <title>Next.js Starter</title>
        <meta name="description" content="Next.js Starter App" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/react.svg" />
      </Head>
      <main className="">
        <div className="">
          <h1>Welcome to Next.js</h1>
        </div>
      </main>
    </React.Fragment>
  );
}
