import {Suspense, useState} from 'react'
import { Canvas } from '@react-three/fiber'
import Loader from '../components/Loader'
import Island from '../models/Island'
import Sky from '../models/Sky'
import Plane from '../models/Plane'
import HomeInfo from '../components/HomeInfo'
import Dragon from '../models/Dragon'


const Home = () => {
  const [isRotating, setIsRotating] = useState(false);
  const [currentStage, setCurrentStage] = useState(1);

  const adjustIslandForScreenSize = ()=>{
    let screenScale = null;
    let screenPosition = [0, -6.5, -75];
    let rotation = [0.2, 0, 0];

    if (window.innerWidth < 768){
      screenScale = [0.9, 0.9, 0.9];
    } else {
      screenScale = [1, 1, 1];
    }
    return [screenScale, screenPosition, rotation];
  }

  const adjustPlaneForScreenSize = ()=>{
    let screenScale, screenPosition;
    let rotation = [0, 0, 0];

    if (window.innerWidth < 768){
      screenScale = [0.0007, 0.0007, 0.0007]; 
      screenPosition = [0, -4, -2];
    } else {
      screenScale = [0.001, 0.001, 0.001];
      screenPosition = [0, -4, -3];
    }
    return [screenScale, screenPosition, rotation];
  }

  const [islandScale, islandPosition, islandRotation] = adjustIslandForScreenSize();
  const [planeScale, planePosition, planeRotation] = adjustPlaneForScreenSize();

  return (
      <section className="w-full h-screen relative">
        <div className='absolute top-28 left-0 right-0 z-10 flex items-center justify-center'>
          {currentStage && <HomeInfo currentStage = {currentStage}/>}
        </div>

        <Canvas className={`w-full h-screen bg-transparent
          ${isRotating ? 'cursor-grabbing' : 'cursor-grab'}`}
          camera={{near:0.1, far:1000}} //futher than 1000, do not render
        >
          <Suspense fallback={<Loader/>}>
            <directionalLight position={[1,1,1]} intensity={2}/>
            <ambientLight intensity={0.5}/>
            {/* <pointLight/> outdoor, so don't need these two types of light */} 
            {/* <spotLight/> cone light, no need for it either*/}
            <hemisphereLight skyColor="#b1e1ff" groundColor='#000000' intensity={1}/>

            <Plane
              isRotating={isRotating}
              scale={planeScale}
              position={planePosition}
              rotation={planeRotation}
            />
            <Dragon/>
            <Sky
              isRotating={isRotating}
            />
            <Island
              position = {islandPosition}
              scale = {islandScale}
              rotation = {islandRotation}
              isRotating = {isRotating}
              setIsRotating = {setIsRotating}
              setCurrentStage={setCurrentStage}
            />
          </Suspense>
        </Canvas>
      </section>
  )
}

export default Home