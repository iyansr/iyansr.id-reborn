'use client'

import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useState } from 'react'

const words = ['React Native', 'ReactJS', 'NextJS', 'Typescript', 'TailwindCSS', 'Web3']

function useWordCycle(words: string[], interval: number) {
  const [index, setIndex] = useState(0)
  const [isInitial, setIsInitial] = useState(true)

  useEffect(() => {
    if (isInitial) {
      setIndex(Math.floor(Math.random() * words.length))
      setIsInitial(false)
      return
    }

    const timer = setInterval(() => {
      setIndex((current) => (current + 1) % words.length)
    }, interval)
    return () => clearInterval(timer)
  }, [words, interval, isInitial])

  return words[index]
}

export function WordAnimation() {
  const word = useWordCycle(words, 2100)

  return (
    <AnimatePresence mode="wait">
      <motion.div className="text-lime-500 inline-block font-bold" key={word}>
        {word?.split('').map((char, index) => (
          <motion.span
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            initial={{ opacity: 0, y: 10 }}
            key={`${word}-${char}-${index.toString()}`}
            style={{ display: 'inline-block', whiteSpace: 'pre' }}
            transition={{
              delay: index * 0.015,
              duration: 0.15,
              ease: 'easeOut',
            }}
          >
            {char}
          </motion.span>
        ))}
      </motion.div>
    </AnimatePresence>
  )
}
