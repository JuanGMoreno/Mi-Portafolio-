import type { Variants } from "motion/react";

const easeOut = [0.22, 1, 0.36, 1] as const;

export const viewportOnce = {
  amount: 0.18,
  once: true,
} as const;

export const revealUp: Variants = {
  hidden: {
    opacity: 0,
    y: 24,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.58,
      ease: easeOut,
    },
  },
};

export const revealFromLeft: Variants = {
  hidden: {
    opacity: 0,
    x: -28,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.62,
      ease: easeOut,
    },
  },
};

export const revealFromRight: Variants = {
  hidden: {
    opacity: 0,
    x: 28,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.62,
      ease: easeOut,
    },
  },
};

export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      delayChildren: 0.08,
      staggerChildren: 0.09,
    },
  },
};

export const heroContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      delayChildren: 0.12,
      staggerChildren: 0.08,
    },
  },
};

export const heroItem: Variants = {
  hidden: {
    opacity: 0,
    y: 18,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      ease: easeOut,
    },
  },
};

export const listItem: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.52,
      ease: easeOut,
    },
  },
};
