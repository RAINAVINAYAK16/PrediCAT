import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import watermarkbg from "../assets/images/watermarkbg.png";

function SignupPage() {
  const nav = useNavigate();
  const [credentials, setCredentials] = useState({
    username: "",
    email: "",
    password: "",
    confirm_password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials({ ...credentials, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic validation
    if (credentials.password !== credentials.confirm_password) {
      console.error("Passwords do not match");
      return;
    }

    console.log(credentials);

    try {
      const response = await fetch("http://localhost:5000/api/auth/signup", {
        method: "POST",
        body: JSON.stringify(credentials),
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (response.ok) {
        nav("/dashboard");
      } else {
        console.error("Signup failed");
      }
    } catch (error) {
      console.error("Signup failed:", error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center"
      style={{
        backgroundImage: `url(${watermarkbg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}>
      <div className="w-full max-w-md">
        <div className="bg-white shadow-md rounded-lg px-8 pt-6 pb-8 mb-4 border border-gray-300">
          <h2 className="text-2xl font-bold mb-6 text-center">SIGN UP</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <input
                type="text"
                id="username"
                name="username"
                value={credentials.username}
                onChange={handleChange}
                placeholder="Username"
                required
                className="w-full px-3 py-2 placeholder-gray-500 bg-yellow-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />
            </div>
            <div className="mb-4">
              <input
                type="email"
                id="email"
                name="email"
                value={credentials.email}
                onChange={handleChange}
                placeholder="Email ID"
                required
                className="w-full px-3 py-2 placeholder-gray-500 bg-yellow-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />
            </div>
            <div className="mb-4">
              <input
                type="password"
                id="password"
                name="password"
                value={credentials.password}
                onChange={handleChange}
                placeholder="Password"
                required
                className="w-full px-3 py-2 placeholder-gray-500 bg-yellow-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />
            </div>
            <div className="mb-6">
              <input
                type="password"
                id="confirm_password"
                name="confirm_password"
                value={credentials.confirm_password}
                onChange={handleChange}
                placeholder="Confirm Password"
                required
                className="w-full px-3 py-2 placeholder-gray-500 bg-yellow-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />
            </div>
            <div className="flex items-center justify-center">
              <button
                type="submit"
                className="w-1/2 bg-yellow-300 hover:bg-yellow-400 text-black font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                Submit
              </button>
            </div>
            <div className="mt-4 text-center">
              <Link to="/login" className="text-blue-500 hover:text-blue-700">
                Already have an account? Login
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignupPage;
