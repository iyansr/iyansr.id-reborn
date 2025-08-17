'use client';

import { AnimatePresence, motion, type Variants } from 'framer-motion';
import { type ReactNode, useMemo } from 'react';

import { cn } from '@/lib/utils';

interface BlurFadeTextProps {
  text: string | ReactNode;
  className?: string;
  variant?: {
    hidden: { y: number };
    visible: { y: number };
  };
  duration?: number;
  characterDelay?: number;
  delay?: number;
  yOffset?: number;
  animateByCharacter?: boolean;
}
const BlurFadeText = ({
  text,
  className,
  variant,
  characterDelay = 0.03,
  delay = 0,
  yOffset = 8,
  animateByCharacter = false,
}: BlurFadeTextProps) => {
  const defaultVariants: Variants = {
    hidden: { y: yOffset, opacity: 0, filter: 'blur(8px)' },
    visible: { y: -yOffset, opacity: 1, filter: 'blur(0px)' },
  };
  const combinedVariants = variant || defaultVariants;
  const characters = useMemo(
    () => Array.from(typeof text === 'string' ? text : ''),
    [text]
  );

  if (animateByCharacter && typeof text === 'string') {
    return (
      <div className="flex">
        <AnimatePresence>
          {characters.map((char, i) => (
            <motion.span
              key={i}
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={combinedVariants}
              transition={{
                // @ts-expect-error Ignore type
                yoyo: Infinity,
                delay: delay + i * characterDelay,
                ease: 'easeOut',
              }}
              className={cn('inline-block', className)}
              style={{ width: char.trim() === '' ? '0.2em' : 'auto' }}
            >
              {char}
            </motion.span>
          ))}
        </AnimatePresence>
      </div>
    );
  }

  return (
    <div className="flex">
      <AnimatePresence>
        <motion.span
          initial="hidden"
          animate="visible"
          exit="hidden"
          variants={combinedVariants}
          transition={{
            // @ts-expect-error Ignore type
            yoyo: Infinity,
            delay,
            ease: 'easeOut',
          }}
          className={cn('inline-block', className)}
        >
          {text}
        </motion.span>
      </AnimatePresence>
    </div>
  );
};

export default BlurFadeText;
