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
      className="h-auto z-10 px-8 py-5 bg-blue-600 w-full"
    >
      <p className="text-white">{route}</p>
    </motion.div>
  );
}
