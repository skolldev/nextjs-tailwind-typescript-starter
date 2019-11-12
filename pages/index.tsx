import "../styles/index.css";

import { NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => (
  <div>
    <Head>
      <title>Next.js Starter</title>
      <link rel="manifest" href="/static/manifest.json" />
      <meta name="theme-color" content="#72B340" />
      <meta
        name="description"
        content="A quick starter Template for Next.js with Tailwind CSS and Typescript"
      />
    </Head>
    <div className="p-4 shadow rounded bg-white">
      <h1 className="text-purple-700 text-3xl ">Next.js</h1>
      <p className="text-gray-800">with Tailwind CSS and Typescript</p>
      <p className="text-gray-800">Made with ♥ by me at</p>
      <a
        className="text-purple-600 hover:text-purple-400"
        href="https://github.com/xDecus"
        target="blank"
      >
        https://github.com/xDecus
      </a>
    </div>
  </div>
);

export default Home;
