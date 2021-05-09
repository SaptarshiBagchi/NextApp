import { AnimatePresence, motion } from "framer-motion";
export default function Form({
  onSubmit,
  errors,
  setErrors,
  fields,
  setFields,
}) {
  return (
    <div className="lg:w-2/5 sm:w-3/5 h-auto px-10 py-5 mx-auto mt-32 bg-white rounded-md shadow-md">
      <h3 className="text-center font-semibold text-2xl ">
        <span className="text-blue-700 underline">Login</span> to continue
      </h3>
      <form onSubmit={onSubmit} className="my-8">
        <div>
          <label>Username</label>
        </div>
        <input
          value={fields.username || ""}
          type="text"
          name="username"
          onChange={(e) => setFields({ ...fields, username: e.target.value })}
          className="w-full px-1 py-2 mt-2 border-gray-400 border rounded-md"
          placeholder="Enter your username"
        ></input>
        {errors.username && (
          <AnimatePresence>
            <motion.p
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              className="text-red-500 text-sm text-semibold"
            >
              {errors.username}{" "}
            </motion.p>
          </AnimatePresence>
        )}

        <div className="mt-4">
          <label>Password</label>
        </div>
        <input
          value={fields.password || ""}
          onChange={(e) => setFields({ ...fields, password: e.target.value })}
          name="password"
          type="password"
          className="w-full px-1 py-2 mt-2 border-gray-400 border rounded-md"
          placeholder="Enter your password"
        ></input>
        {errors.password && (
          <AnimatePresence>
            <motion.p
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 50, opacity: 0 }}
              className="text-red-500 text-sm text-semibold"
            >
              {errors.password}{" "}
            </motion.p>
          </AnimatePresence>
        )}

        <button
          type="submit"
          className="bg-blue-700 w-full px-4 py-2 my-4 rounded-md text-white"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
