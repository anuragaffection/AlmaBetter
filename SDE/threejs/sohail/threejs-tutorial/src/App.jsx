import { Canvas } from "@react-three/fiber"
import { Suspense } from "react"
import './App.css'
import MyThree from "./components/MyThree"

function App() {

  return (
    <div className="h-screen">
      <Canvas>
        <Suspense fallback={null}>
          <MyThree />
        </Suspense>
      </Canvas>
    </div>
  )
}

export default App
