import { motion } from "framer-motion";
export const ThankYou = () => {
  return (
    <motion.div
      className="bg-primary min-h-screen flex justify-center items-center"
      initial={{ width: "50%" ,position: "absolute", right: 0 }}
      animate={{ right: 0, width:"100%", transition: { duration: .5 } }}
    >
      <motion.h1
        initial={{ translateX: -50, opacity: 0 }}
        animate={{
          translateX: 0,
          opacity: 1,
          transition: { delay: .5, bounce: 0 },
        }}
        className="text-white text-7xl font-bold relative"
      >
        Thanks for your submission!
      </motion.h1>
    </motion.div>
  );
};
