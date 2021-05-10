import { LoremIpsum } from "react-lorem-ipsum";
import { motion } from "framer-motion";
export default function about() {
  return (
    <motion.div
      initial={{ x: "100%", opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: "-100%", opacity: 0 }}
      className="flex h-screen"
    >
      <div className="w-1/5 px-4 py-2 bg-white overflow-y-auto">
        {<LoremIpsum p={10} />}
      </div>
      <div className="w-4/5 bg-yellow-500 overflow-y-hidden flex h-screen">
        <div className="w-3/5 p-5 overflow-y-auto h-screen">
          {<LoremIpsum p={50} />}
        </div>
        <div className="w-2/5 p-5 bg-blue-300 overflow-y-auto  h-screen">
          {<LoremIpsum p={10} />}
        </div>
      </div>
    </motion.div>
  );
}
