import { useRef, useEffect} from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame, useThree} from "@react-three/fiber"
import islandScene from '../assets/3d/island.glb'
import {a} from "@react-spring/three"

const Island = ({isRotating, setIsRotating, ...props}) => {
    const islandRef = useRef();
    const {gl, viewport} = useThree(); //get render params
    const { nodes, materials } = useGLTF(islandScene); //a hook to handle 3d models

    const lastX = useRef(0); //create a static hook, get last mouse x position
    const rotationSpeed = useRef(0);
    const dampingFactor = 0.95;

    const handlePointerDown = (e)=>{
        e.stopPropagation();
        e.preventDefault();
        setIsRotating(true);
        const clientX = e.touches ? e.touches[0].clientX : e.clientX;
        lastX.current = clientX;
    }

    const handlePointerUp = (e)=>{
        e.stopPropagation();
        e.preventDefault();
        setIsRotating(false);
    }

    const handlePointerMove = (e)=>{
        e.stopPropagation();
        e.preventDefault();
        if (isRotating){
            const clientX = e.touches ? e.touches[0].clientX : e.clientX;
            const delta = (clientX-lastX.current)/viewport.width;
            islandRef.current.rotation.y += delta*0.01*Math.PI;
            lastX.current = clientX;
            rotationSpeed.current = delta*0.01*Math.PI;
        }
    }
    const handleKeyDown = (e)=>{
        if(e.key==="ArrowLeft"){
            if (!isRotating) setIsRotating(true);
            islandRef.current.rotation.y += 0.01*Math.PI;
        } else if(e.key==="ArrowRight"){
            if (!isRotating) setIsRotating(true);
            islandRef.current.rotation.y -= 0.01*Math.PI;
        }
    }
    const handleKeyUp = (e)=>{
        if(e.key==="ArrowLeft"||e.key==="ArrowRight"){
            setIsRotating(false);
        }
    }

    useFrame(()=>{
        if (!isRotating){
            rotationSpeed.current *= dampingFactor;
            if (Math.abs(rotationSpeed.current)<0.01) rotationSpeed.current = 0;
            islandRef.current.rotation.y += rotationSpeed.current;
        } else {
            const rotation = islandRef.current.rotation.y;
        }
    })

    useEffect(()=>{
        const canvas = gl.domElement; //as the 3d elemnts is blocked in a Canvas block
        canvas.addEventListener('pointerdown', handlePointerDown);
        canvas.addEventListener('pointerup', handlePointerUp);
        canvas.addEventListener('pointermove', handlePointerMove);
        document.addEventListener('keydown', handleKeyDown);
        document.addEventListener('keyup', handleKeyUp);
        return ()=>{
            canvas.removeEventListener('pointerdown', handlePointerDown);
            canvas.removeEventListener('pointerup', handlePointerUp);
            canvas.removeEventListener('pointermove', handlePointerMove);
            document.removeEventListener('keydown', handleKeyDown);
            document.removeEventListener('keyup', handleKeyUp);
        }
    }, [gl, handlePointerDown, handlePointerUp, handlePointerMove])

  return (
    <a.group ref={islandRef} {...props}>
      <mesh
        geometry={nodes.polySurface944_tree_body_0.geometry}
        material={materials.PaletteMaterial001}
      />
      <mesh
        geometry={nodes.polySurface945_tree1_0.geometry}
        material={materials.PaletteMaterial001}
      />
      <mesh
        geometry={nodes.polySurface946_tree2_0.geometry}
        material={materials.PaletteMaterial001}
      />
      <mesh
        geometry={nodes.polySurface947_tree1_0.geometry}
        material={materials.PaletteMaterial001}
      />
      <mesh
        geometry={nodes.polySurface948_tree_body_0.geometry}
        material={materials.PaletteMaterial001}
      />
      <mesh
        geometry={nodes.polySurface949_tree_body_0.geometry}
        material={materials.PaletteMaterial001}
      />
      <mesh
        geometry={nodes.pCube11_rocks1_0.geometry}
        material={materials.PaletteMaterial001}
      />
    </a.group>
  );
}

export default Island