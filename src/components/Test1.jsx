import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const Test1 = () => {
    const [show, setShow] = useState(true);

    return (
        <div className='mt-20'>
            <div>
                <button onClick={() => setShow(!show)}>تغییر وضعیت</button>
                <AnimatePresence>
                    {show && (
                        <motion.div
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 20 }}
                            transition={{ duration: 0.4 }}
                            style={{
                                background: "lightgreen",
                                padding: "20px",
                                marginTop: "10px",
                                borderRadius: "8px"
                            }}
                        >
                            این یک باکس متحرک است
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>

            <br />
            <motion.div
                initial={{ x: 0, y: 0, rotate: 0 }}
                animate={{
                  x: [0, 200, 100, 300],
                  y: [0, -100, 50, 0],
                  rotate: [0, 180, 270, 360],
                  scale: [1, 1.5, 0.8, 1]
                }}
                transition={{
                  duration: 3,
                  ease: [0.39, 0.24, 0.3, 1],
                  repeat: Infinity,
                  repeatType: "mirror"
                }}
                className='bg-white h-50 w-50 mx-auto'
            />
            <br />
            {show ?
                <motion.div
                    animate={{ x: 0, opacity: 1 }}
                    transition={{
                        x: { type: "spring", stiffness: 100, ease: "easeOut" },
                        opacity: { duration: 1, ease: "easeIn" }
                    }}

                    className='bg-white h-50 w-50 mx-auto'
                />
                :
                <motion.div
                    animate={{ x: 200, opacity: 0 }}
                    transition={{
                        x: { type: "spring", stiffness: 100 },
                        opacity: { duration: 0.5, ease: "easeOut" }
                    }}

                    className='bg-white h-50 w-50 mx-auto'
                />
            }
            <br />

            <motion.div
                animate={{ y: [0, 100, 50], opacity: [1, 0.5, 1] }}
                transition={{
                    duration: 2,
                    delay: 0.3,
                    ease: ["easeIn", "easeOut", "linear"],
                    times: [0, 0.6, 1],
                    repeat: Infinity,
                    repeatType: "mirror"
                }}

                className='bg-white h-50 w-50 mx-auto'
            />
            <br />

            <div className='bg-cyan w-full h-[300px] relative'>
                <motion.div
                    drag
                    dragTransition={{ power: 0.2 }}
                    className='bg-white h-5 w-5 absolute bottom-0 left-0'
                />
            </div>
            <br />
            <motion.div
                animate={{ x: 200 }}
                transition={{ ease: [0.2, 1, 0.3, 0.1],duration: 4 }}
                className='bg-cyan h-50 w-50 mx-auto'
            >

            </motion.div>
            <br />
            <motion.div
                initial={{ x: 0 }}  // وضعیت اولیه: نامرئی
                animate={{ x: 200 }}  // وضعیت نهایی: مرئی
                transition={{ duration: 2, type: "spring" }}  // مدت زمان: ۰.۵ ثانیه
                className='bg-white h-50 w-50 mx-auto'
            >

            </motion.div>
            <br />
            <motion.div
                animate={{ x: [0, 100, -200, 0] }}
                transition={{ times: [0, 0.1, 0.2, 1], duration: 3, delay: 2, repeat: Infinity, repeatType: "reverse", repeatDelay: 1 }}  // keyframe دوم در ۲۰% زمان
                className='bg-white h-50 w-50 mx-auto'
            />
            <br />
            <motion.div
                animate={{ y: [0, 20, 0], rotate: [0, 30, 0] }}
                transition={{ times: [0, 0.2, 0.2, 1], duration: 3, delay: 2, repeat: Infinity, repeatType: "reverse", repeatDelay: 0.4 }}  // keyframe دوم در ۲۰% زمان
                className='bg-white h-50 w-50 mx-auto'
            />
            <br />
            <motion.div
                animate={{ x: [-50, 50] }}
                transition={{ type: "spring", bounce: 0.5, delay: 1, damping: 0, mass: 100 }}  // پرش متوسط
                className='bg-white h-50 w-50 mx-auto'
            />
            <motion.div
                animate={{ x: 100 }}
                transition={{ when: "beforeChildren", type: "spring", duration: 6, staggerChildren: 3 }}  // قدرت بیشتر // پرتاب با سرعت  // keyframe دوم در ۲۰% زمان
                className='bg-white h-50 w-50 mx-auto'
            >
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, }}
                >salam</motion.p>
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, }}
                >salam</motion.p>
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, }}
                >salam</motion.p>
            </motion.div>
            <br />

        </div>
    )
}

export default Test1