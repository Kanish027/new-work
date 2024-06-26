import React from "react";
import Landing from "../components/Landing";
import Features from "../components/Features";

const Overview = () => {
  return (
    <div>
      <div className="lg:mx-5">
        <Landing />
      </div>
      <Features />
    </div>
  );
};

export default Overview;
