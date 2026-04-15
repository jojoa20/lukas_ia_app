"use client";
import React, { useState } from "react";
export default function ChatInputBar() {
  const [input, setInput] = useState("");
  return (
    <div className="w-full bg-[#0A101D] p-4">
      <div className="flex items-center bg-[18264A] rounded-full p-2">
        <input className="flex-1 bg-transparent text-white p-2" placeholder="Dime un gasto..." value={input} onChange={(e) => setInput(e.target.value)} />
        <button className="bg-blue-500 rounded-full p-2">⇠</button>
      </div>
    </div>
  );
}
