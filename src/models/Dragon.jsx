import { useRef, useEffect } from 'react'
import birdScene from '../assets/3d/dragon.glb'
import { useAnimations, useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'

const Dragon = () => {
  const birdRef = useRef();
  const {scene, animations} = useGLTF(birdScene);
  const {actions} = useAnimations(animations, birdRef);
  let enter = true;
  const enterRotation = 225*(Math.PI/180);
  const leaveRotation = enterRotation + Math.PI;

  useEffect(() => {
    actions["run"].play();
  }, []);

  useFrame(({ clock, camera }) => {
    // Update the Y position to simulate bird-like motion using a sine wave
    birdRef.current.position.y = Math.sin(clock.elapsedTime)*0.2 + 2;

    // Check if the bird reached a certain endpoint relative to the camera
    if (birdRef.current.position.x > camera.position.x + 10) {
      // Change direction to backward and rotate the bird 180 degrees on the y-axis
      birdRef.current.rotation.y = enterRotation
      enter = true;
    } else if (birdRef.current.position.x < camera.position.x - 10) {
      // Change direction to forward and reset the bird's rotation
      birdRef.current.rotation.y = leaveRotation;
      enter = false;
    } else {
      if (enter){
        birdRef.current.rotation.y = enterRotation
        //actions["skill01"].play();
      } else {
        birdRef.current.rotation.y = leaveRotation;
      }
    }

    // Update the X and Z positions based on the direction
    if (birdRef.current.rotation.y === enterRotation) {
      // Moving forward
      birdRef.current.position.x -= 0.007;
      birdRef.current.position.z -= 0.007;
    } else {
      // Moving backward
      birdRef.current.position.x += 0.007;
      birdRef.current.position.z += 0.007;
    }
  });

  return (
    <mesh position={[5, 1, 1]} scale={[1, 1, 1]} ref={birdRef}>
        <primitive object={scene}/>
    </mesh>
  )
}

export default Dragon
