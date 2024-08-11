import React from "react";
import Header from "./header";
import ButtonGroup from "./buttongroup";
import ChatInput from "./chatinput";
import catbotlogo from "../assets/images/catbot_logo.png";

function MainContent() {
  return (
    <>
      <div className="flex-1 flex flex-col h-screen">
        <Header />
        <div className="flex-1 bg-gray-200 p-6 flex flex-col justify-center items-center">
          <img src={catbotlogo} className="h-16 m-10"/>
          <ButtonGroup />
        </div>
        <ChatInput />
      </div>
    </>
  );
}

export default MainContent;
