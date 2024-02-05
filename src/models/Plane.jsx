import planeScene from '../assets/3d/plane.glb'
import { useAnimations, useGLTF } from '@react-three/drei'
import { useRef, useEffect } from 'react'

const Plane = ({isRotating, ...props}) => {
  const ref = useRef();
  const {scene, animations} = useGLTF(planeScene);
  const {actions} = useAnimations(animations, ref)
  console.log(animations)

  useEffect(() => {
    if (isRotating) {
      actions["Scene"].play();
    } else {
      actions["Scene"].stop();
    }
  }, [actions, isRotating]);
  return (
    <mesh {...props} ref={ref}>
        <primitive object={scene}/>
    </mesh>
  )
}

export default Plane