import React from 'react';

function ChatInput() {
  return (
    <div className="p-4 bg-white">
      <div className="flex items-center border rounded-md">
        <input
          type="text"
          placeholder="Type your query..."
          className="flex-1 p-2 focus:outline-none"
        />
        <button className="bg-white p-2">
          <div className="w-6 h-6 bg-green-500 rounded-full"></div>
        </button>
      </div>
    </div>
  );
}

export default ChatInput;