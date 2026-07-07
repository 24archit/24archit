import React, { useState, useEffect, useRef } from 'react';
import { useInView, useSpring, useMotionValue } from 'framer-motion';

export const Counter = ({ value, suffix }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: 2500 });
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => { if (isInView) motionValue.set(value); }, [isInView, value, motionValue]);
  useEffect(() => { springValue.on("change", (latest) => setDisplayValue(Math.floor(latest))); }, [springValue]);

  return <span ref={ref}>{displayValue}{suffix}</span>;
};
