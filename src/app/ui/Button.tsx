"use client";

import { Amarante } from "next/font/google";
import "@/app/ui/button.css";

const amarante = Amarante({
  subsets: ["latin"],
  weight: "400",
});

export default function Button({ children }) {
  return (
    <div
      className={`${amarante.className} active button bg-gray-500 rounded-md p-2 inline-block text-4xl cursor-pointer select-none`}
    >
      <h1>{children}</h1>
    </div>
  );
}
