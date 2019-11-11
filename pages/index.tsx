import "../styles/index.css";

import { NextPage } from "next";

const Home: NextPage = () => (
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
);

export default Home;
