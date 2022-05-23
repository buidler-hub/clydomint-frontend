import Header from "../components/Header";
import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <div className="flex h-screen w-screen flex-col items-center justify-center bg-gradient-to-bl  from-[#271277] to-[#09052D] text-gray-50">
      <Header />
    </div>
  );
};

export default Home;
