import { useState } from "react"

function App() {
  const [color, setColor] = useState("olive")

  return (
    <div
      className="w-full h-screen duration-300 transition-colors"
      style={{ backgroundColor: color }}
    >
      <div className="fixed bottom-12 inset-x-0 flex justify-center px-4">
        <div className="flex gap-4 bg-white/80 backdrop-blur-md shadow-xl px-6 py-4 rounded-full border">
          
          <button
            onClick={() => setColor("red")}
            className="px-5 py-2 rounded-full font-semibold text-white bg-red-500 hover:bg-red-600 active:scale-95 transition"
          >
            Red
          </button>

          <button
            onClick={() => setColor("green")}
            className="px-5 py-2 rounded-full font-semibold text-white bg-green-500 hover:bg-green-600 active:scale-95 transition"
          >
            Green
          </button>

          <button
            onClick={() => setColor("brown")}
            className="px-5 py-2 rounded-full font-semibold text-white bg-yellow-800 hover:bg-yellow-900 active:scale-95 transition"
          >
            Brown
          </button>

          <button
            onClick={() => setColor("orange")}
            className="px-5 py-2 rounded-full font-semibold text-white bg-orange-500 hover:bg-orange-600 active:scale-95 transition"
          >
            Orange
          </button>

          <button
            onClick={() => setColor("pink")}
            className="px-5 py-2 rounded-full font-semibold text-white bg-pink-500 hover:bg-pink-600 active:scale-95 transition"
          >
            Pink
          </button>

        </div>
      </div>
    </div>  
  )
}

export default App
