import { LoremIpsum } from "react-lorem-ipsum";
import { motion } from "framer-motion";
export default function about() {
  return (
    <motion.div
      initial={{ x: "100%", opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: "-100%", opacity: 0 }}
      className="flex"
    >
      <div className="w-1/5 px-4 py-2 bg-white h-screen overflow-y-auto">
        {<LoremIpsum p={10} />}
      </div>
      <div className="w-4/5 p-5 bg-yellow-500 overflow-y-scroll h-screen">
        {<LoremIpsum p={50} />}
      </div>
    </motion.div>
  );
}
