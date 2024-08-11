import React from 'react';

function ButtonGroup() {
  return (
    <div className="flex space-x-4">
      <button className="bg-yellow-400 px-4 py-2 text-sm">Equipment Status</button>
      <button className="bg-yellow-400 px-4 py-2 text-sm">Schedule Maintenance</button>
      <button className="bg-yellow-400 px-4 py-2 text-sm">Request Data</button>
    </div>
  );
}

export default ButtonGroup;