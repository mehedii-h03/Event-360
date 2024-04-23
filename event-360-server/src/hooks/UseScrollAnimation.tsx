import { useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const useScrollAnimation = () => {
  const componentRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: componentRef,
    offset: ["0 1", "1.1 1"],
  });

  const scaleValues = useTransform(scrollYProgress, [0, 1], [0.9, 1]);
  const opacityValues = useTransform(scrollYProgress, [0, 1], [0.2, 1]);
  const xRightValues = useTransform(scrollYProgress, [0, 1], [50, 0]);
  const xLeftValues = useTransform(scrollYProgress, [0, 1], [-50, 0]);

  return {
    componentRef,
    scaleValues,
    opacityValues,
    xLeftValues,
    xRightValues,
  };
};

export default useScrollAnimation;
