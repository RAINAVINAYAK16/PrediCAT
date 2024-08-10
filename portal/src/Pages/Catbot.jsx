import React from 'react';

function Catbot() {
  return (
    <div className="container mx-auto">
      <header className="bg-gray-800 text-white py-4">
        <h1 className="text-2xl font-bold">CATbot</h1>
      </header>

      <main className="mt-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="bg-gray-100 p-4 rounded-lg">
            <h2>History</h2>
            <ul>
              <li>Event 1: System reboot on 2024-08-10</li>
              <li>Event 2: Routine maintenance performed</li>
              <li>Event 3: Minor error detected and resolved</li>
            </ul>
          </div>
          <div className="bg-gray-100 p-4 rounded-lg">
            <h2>Equipment Status</h2>
            <ul>
              <li>Sensor 1: Online</li>
              <li>Sensor 2: Offline (maintenance)</li>
              <li>Actuator 1: Operational</li>
            </ul>
          </div>
          <div className="bg-gray-100 p-4 rounded-lg">
            <h2>Schedule</h2>
            <ul>
              <li>Task 1: Data backup at 02:00 AM</li>
              <li>Task 2: System check at 10:00 AM</li>
              <li>Task 3: Report generation at 18:00 PM</li>
            </ul>
          </div>
          <div className="bg-gray-100 p-4 rounded-lg">
            <h2>Request Data</h2>
            <form>
              <input type="text" placeholder="Data type" />
              <button type="submit">Request</button>
            </form>
          </div>
          <div className="bg-gray-100 p-4 rounded-lg">
            <h2>Maintenance</h2>
            <p>Next scheduled maintenance: 2024-08-15</p>
          </div>
        </div>
      </main>

      <footer className="bg-gray-800 text-white py-4 mt-8">
        <p>&copy; 2024 CATbot</p>
      </footer>
    </div>
  );
}

export default Catbot;
