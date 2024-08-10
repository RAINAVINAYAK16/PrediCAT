import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import logoimg from "../assets/images/CAT_blacklogo.png";

const LandingPage = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        width: "100vw",
        fontFamily: "Roboto, condensed, bold",
        backgroundColor: "white",
      }}
    >
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        style={{
          fontSize: "48px",
          fontWeight: "bold",
          marginBottom: "20px",
          textAlign: "center",
          color: "black",
        }}
      >
        {/* PREDICAT */}
        <div className="hero-image flex justify-center">
          <img src={logoimg} alt="PREDICAT" className="w-3/6 md:w-full" />
        </div>
      </motion.h1>
      <div
        style={{
          display: "flex",
          gap: "20px",
          justifyContent: "center",
          width: "100%",
        }}
      >
        <motion.span
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          style={{
            fontSize: "24px",
            color: "black",
          }}
        >
          <Link
            to="/login"
            className=" hover:underline hover:decoration-yellow-400 hover:font-bold"
          >
            Login
          </Link>
        </motion.span>
        <motion.span
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          style={{
            fontSize: "24px",
            color: "black",
          }}
        >
          {" "}
          <Link
            to="/signup"
            className="hover:underline hover:decoration-yellow-400 hover:font-bold"
          >
            Signup
          </Link>
        </motion.span>
      </div>
    </div>
  );
};

export default LandingPage;
