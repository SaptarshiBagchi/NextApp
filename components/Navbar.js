import { useRouter, userRouter } from "next/router";

export default function Navbar() {
  const { route } = useRouter();
  console.log(route);
  return (
    <div className="h-auto fixed z-10 px-8 py-5 bg-blue-600 w-full">
      <p className="text-white">{route}</p>
    </div>
  );
}
