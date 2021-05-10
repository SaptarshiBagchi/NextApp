import { useRouter, userRouter } from "next/router";
import { motion } from "framer-motion";
export default function Navbar() {
  const { route } = useRouter();

  return (
    <motion.div
      transition={{ delay: 0.5 }}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: -100, opacity: 0 }}
      className="h-auto z-10 px-8 py-5 bg-blue-600 w-full flex justify-between"
    >
      <p className="text-white text-2xl">NextApp</p>
      <div className="lg:flex align-middle">
        <div className="mx-2 text-white border-white border-solid border-2 px-4 py-2 rounded-md">
          About
        </div>
        <div className="mx-2 text-white border-white border-solid border-2 px-4 py-2 rounded-md">
          Pricing
        </div>
      </div>
    </motion.div>
  );
}
