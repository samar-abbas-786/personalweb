import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 bg-grid-pattern text-center">
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="font-mono text-signal text-sm mb-4"
      >
        $ curl: (404) route not found
      </motion.p>
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="font-display text-6xl md:text-8xl text-paper mb-6"
      >
        404
      </motion.h1>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="text-muted mb-8"
      >
        This endpoint doesn't exist. Let's get you back to a known route.
      </motion.p>
      <Link
        to="/"
        className="font-mono text-sm px-6 py-3 rounded-full bg-signal text-ink font-medium"
      >
        cd ~/home
      </Link>
    </div>
  );
};

export default NotFound;
