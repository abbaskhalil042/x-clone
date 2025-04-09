import React from "react";

const HomePage = () => {
  return (
    <div className="flex flex-col h-screen justify-center items-center">
      <h1>
        <span className="font-bold border  border-amber-400 p-1 ">Digo</span>{" "}
        will be the app name
      </h1>
      <p className="text-2xl mb-5">Daisy ui will be used in this project</p>
      <button className="btn btn-success animate-bounce ">
        <a
          className="uppercase font-bold "
          href="https://daisyui.com/components/"
          target="_blank"
        >
          Goto to daisy ui and explore First
        </a>
      </button>
    </div>
  );
};

export default HomePage;
