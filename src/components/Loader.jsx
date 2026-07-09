import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const BOOT_LINES = [
  "$ initializing environment",
  "$ resolving dependencies... done",
  "$ compiling src/samar-abbas",
  "$ status: build passed",
];

const Loader = ({ onDone }) => {
  const [lineIndex, setLineIndex] = useState(0);
  const [exit, setExit] = useState(false);

  useEffect(() => {
    if (lineIndex < BOOT_LINES.length) {
      const t = setTimeout(() => setLineIndex((i) => i + 1), 380);
      return () => clearTimeout(t);
    }
    const exitTimer = setTimeout(() => setExit(true), 400);
    const doneTimer = setTimeout(() => onDone?.(), 1000);
    return () => {
      clearTimeout(exitTimer);
      clearTimeout(doneTimer);
    };
  }, [lineIndex, onDone]);

  return (
    <AnimatePresence>
      {!exit && (
        <motion.div
          exit={{ y: "-100%" }}
          transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[100] bg-ink flex items-center justify-center"
        >
          <div className="w-[min(420px,86vw)] font-mono text-sm">
            <div className="rounded-lg border border-line bg-surface/80 overflow-hidden shadow-2xl">
              <div className="flex items-center gap-1.5 px-4 py-2.5 border-b border-line bg-surface-2">
                <span className="w-2.5 h-2.5 rounded-full bg-danger/70" />
                <span className="w-2.5 h-2.5 rounded-full bg-copper/70" />
                <span className="w-2.5 h-2.5 rounded-full bg-signal/70" />
                <span className="ml-2 text-[11px] text-muted">boot.sh</span>
              </div>
              <div className="p-5 min-h-[140px]">
                {BOOT_LINES.slice(0, lineIndex).map((line, i) => (
                  <p key={i} className="text-muted mb-1.5">
                    <span className="text-signal">{line}</span>
                  </p>
                ))}
                {lineIndex < BOOT_LINES.length && (
                  <span className="inline-block w-2 h-4 bg-signal animate-blink align-middle" />
                )}
              </div>
            </div>
            <motion.div
              className="h-[2px] bg-line mt-4 rounded-full overflow-hidden"
              initial={false}
            >
              <motion.div
                className="h-full bg-gradient-to-r from-signal to-copper"
                initial={{ width: "0%" }}
                animate={{
                  width: `${(lineIndex / BOOT_LINES.length) * 100}%`,
                }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Loader;
