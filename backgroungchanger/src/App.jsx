import { useState } from 'react'
import ColorPickerApp from './components/ColorPickerApp.jsx'
import './App.css'

function App() {
  const [color, setcolor] = useState("white")

  return (
    <>
      <div className="container-fluid" style={{backgroundColor: color}}>
        {/* <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
          <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-zinc-200 px-3 py-2 rounded-xl">
            <button onClick={() => setcolor("red")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:"red"}}>Red</button>
            <button onClick={() => setcolor("green")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:"green"}}>Green</button>
            <button onClick={() => setcolor("blue")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:"blue"}}>Blue</button>
            <button onClick={() => setcolor("pink")} className="outline-none px-4 py-1 rounded-full text-black shadow-lg" style={{backgroundColor:"pink"}}>Pink</button>
            <button onClick={() => setcolor("orange")} className="outline-none px-4 py-1 rounded-full text-black shadow-lg" style={{backgroundColor:"orange"}}>Orange</button>
            <button onClick={() => setcolor("yellow")} className="outline-none px-4 py-1 rounded-full text-black shadow-lg" style={{backgroundColor:"yellow"}}>Yellow</button>
            <button onClick={() => setcolor("purple")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:"purple"}}>Purple</button>
            <button onClick={() => setcolor("cyan")} className="outline-none px-4 py-1 rounded-full text-black shadow-lg" style={{backgroundColor:"cyan"}}>Cyan</button>
            <button onClick={() => setcolor("brown")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:"brown"}}>Brown</button>
            <button onClick={() => setcolor("gray")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:"gray"}}>Gray</button>
            <button onClick={() => setcolor("lime")} className="outline-none px-4 py-1 rounded-full text-black shadow-lg" style={{backgroundColor:"lime"}}>Lime</button>
            <button onClick={() => setcolor("indigo")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:"indigo"}}>Indigo</button>
            <button onClick={() => setcolor("gold")} className="outline-none px-4 py-1 rounded-full text-black shadow-lg" style={{backgroundColor:"gold"}}>Gold</button>
            <button onClick={() => setcolor("maroon")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:"maroon"}}>Maroon</button>
            <button onClick={() => setcolor("olive")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:"olive"}}>Olive</button>
          </div>
        </div> */}

        <div className="row">
          <div className="col-12 p-0">
            < ColorPickerApp />
          </div>
        </div>
      </div>
    </>
  )
}

export default App
