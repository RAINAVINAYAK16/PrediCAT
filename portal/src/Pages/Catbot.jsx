import React from "react";
import logoimg from "../assets/images/CAT_blacklogo.png";

function Catbot() {
  return (
    <>
      <div className="sidepanel">
        <div className="flex justify-center">
          <img src={logoimg} alt="PREDICAT" className="w-3/6 md:w-full" />
        </div>
        <div className="flex justify-center">
          <button className="bg-yellow-400 text-black font-bold py-2 px-4 rounded-full">
            Chat with Catbot
          </button>
        </div>
      </div>
      <div className="textpanel">
        <div className="flex justify-center">
          <h1>Chat with Catbot</h1>
        </div>
        <div className="flex justify-center">
          <p>Ask me anything about the portal</p>
        </div>
      </div>
      <div className="searchbar">
        <div className="flex justify-center">
          <input
            type="text"
            id="search"
            name="search"
            placeholder="Search"
            required
            className="w-1/2 px-3 py-2 placeholder-gray-500 bg-yellow-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />
        </div>
      </div>
    </>
  );
}

export default Catbot;
