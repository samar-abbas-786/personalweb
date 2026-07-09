import React, { useRef } from "react";
import { motion } from "framer-motion";

const MagneticButton = ({
  children,
  as: Component = "button",
  className = "",
  strength = 0.35,
  ...props
}) => {
  const ref = useRef(null);

  const handleMouseMove = (e) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    el.style.transform = `translate(${x * strength}px, ${y * strength}px)`;
  };

  const handleMouseLeave = () => {
    if (ref.current) ref.current.style.transform = "translate(0px, 0px)";
  };

  const MotionComponent = motion(Component);

  return (
    <MotionComponent
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={className}
      style={{ transition: "transform 0.15s ease-out" }}
      whileTap={{ scale: 0.95 }}
      data-cursor-hover
      {...props}
    >
      {children}
    </MotionComponent>
  );
};

export default MagneticButton;
