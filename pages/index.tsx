import "../styles/index.css";

import { NextPage } from "next";

const Home: NextPage<{ userAgent: string | undefined }> = ({ userAgent }) => (
  <div className="p-4 shadow rounded bg-white">
    <h1 className="text-purple-500 leading-normal">Next.js</h1>
    <p className="text-gray-500">with Tailwind CSS</p>
    <p className="text-gray-500">and {userAgent}</p>
  </div>
);

Home.getInitialProps = async ({ req }) => {
  const userAgent = req ? req.headers["user-agent"] : navigator.userAgent;
  return { userAgent };
};

export default Home;
