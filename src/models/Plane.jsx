import React from 'react'
import planeScene from '../assets/3d/Plane.glb'
import { useGLTF } from '@react-three/drei'

const Plane = ({isRotating, ...props}) => {
    const {scene} = useGLTF(planeScene);
    //Take 001 can play the animation
  return (
    <mesh {...props}>
        <primitive object={scene}/>
    </mesh>
  )
}

export default Plane