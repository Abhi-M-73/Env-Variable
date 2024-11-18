
import React from "react";

function App() {
  return (
    <div className="flex justify-center items-center min-h-screen w-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-blue-500">ChatGpt Key : {import.meta.env.VITE_CHAPGPT_KEY}</h1>
    </div>
  );
}

export default App;
