import { useRef, useEffect } from 'react'
import dragonScene from '../assets/3d/dragon.glb'
import { useAnimations, useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'

const Dragon = () => {
  const dragonRef = useRef();
  const {scene, animations} = useGLTF(dragonScene);
  const {actions} = useAnimations(animations, dragonRef);
  let enter = true;
  const enterRotation = 225*(Math.PI/180);
  const leaveRotation = enterRotation + Math.PI;

  useEffect(() => {
    actions["run"].play();
  }, []);

  useFrame(({ clock, camera }) => {
    // Update the Y position to simulate dragon-like motion using a sine wave
    dragonRef.current.position.y = Math.sin(clock.elapsedTime)*0.2 + 2;

    // Check if the dragon goes out of the camera from right
    if (dragonRef.current.position.x > camera.position.x + 10) {
      dragonRef.current.rotation.y = enterRotation
      enter = true;
    // Check if the dragon goes out of the camera from left
    } else if (dragonRef.current.position.x < camera.position.x - 10) {
      dragonRef.current.rotation.y = leaveRotation;
      enter = false;
    } else {
    // If the dragon is in the camera, set its position by checking if it is entering or leaving
      if (enter){
        dragonRef.current.rotation.y = enterRotation
      } else {
        dragonRef.current.rotation.y = leaveRotation;
      }
    }

    // Update the X and Z positions based on the direction
    if (dragonRef.current.rotation.y === enterRotation) {
      // Moving left
      dragonRef.current.position.x -= 0.007;
      dragonRef.current.position.z -= 0.007;
    } else {
      // Moving right
      dragonRef.current.position.x += 0.007;
      dragonRef.current.position.z += 0.007;
    }
  });

  return (
    <mesh position={[5, 1, 1]} scale={[1, 1, 1]} ref={dragonRef}>
        <primitive object={scene}/>
    </mesh>
  )
}

export default Dragon
