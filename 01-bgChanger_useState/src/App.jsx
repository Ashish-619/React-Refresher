import { useState } from 'react'

function App() {
  const [color, setColor] = useState("orange")

  return (
    <>
      <div className='w-full h-screen duration-500' style={{ backgroundColor: color }}>
        <h1 className='p-3 bg-green-300 flex justify-center border border-gray-900'>
          Background Color Changer
        </h1>
        <div className='flex flex-wrap justify-center bottom-12 p-4'>
          <div className='flex justify-center p-2 gap-4 rounded-lg bg-slate-50 px-4'>
            <button
              className='bg-red-600 p-3 rounded-xl'
              onClick={() => setColor("red")}
            >
              Red
            </button>
            <button
              className='bg-green-600 p-3 rounded-xl'
              onClick={() => setColor("green")}
            >
              Green
            </button>
            <button
              className='bg-blue-600 p-3 rounded-xl'
              onClick={() => setColor("blue")}
            >
              Blue
            </button>
            <button
              className='bg-violet-600 p-3 rounded-xl'
              onClick={() => setColor("violet")}
            >
              Violet
            </button>
            <button
              className='bg-pink-600 p-3 rounded-xl'
              onClick={() => setColor("pink")}
            >
              Pink
            </button>
            <button
              className='bg-yellow-600 p-3 rounded-xl'
              onClick={() => setColor("yellow")}
            >
              Yellow
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
