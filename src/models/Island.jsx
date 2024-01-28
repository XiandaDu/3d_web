import { useRef, useEffect} from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import { useFrame, useThree} from "@react-three/fiber"
import islandScene from '../assets/3d/island.glb'
import {a} from "@react-spring/three"

const Island = ({isRotating, setIsRotating, setCurrentStage, ...props}) => {
    const islandRef = useRef();
    const {gl, viewport} = useThree(); //get render params
    const { nodes, materials } = useGLTF(islandScene); //a hook to handle 3d models
    const { animations } = useGLTF(islandScene);
    const {actions} = useAnimations(animations, islandRef)
  
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
            if (!isRotating) setIsRotating(true)
            islandRef.current.rotation.y -= 0.01*Math.PI
            rotationSpeed.current = -0.015
        } else if(e.key==="ArrowRight"){
            if (!isRotating) setIsRotating(true)
            islandRef.current.rotation.y += 0.01*Math.PI
            rotationSpeed.current = 0.015
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
            if (Math.abs(rotationSpeed.current)<0.005) rotationSpeed.current = 0;
            islandRef.current.rotation.y += rotationSpeed.current;
        } else {
            const rotation = islandRef.current.rotation.y;
            const normalizedRotation = ((rotation % (2*Math.PI)) + 2*Math.PI) % (2*Math.PI);
            // Set the current stage based on the island's orientation
            const angle = 0.3
            switch (true) {
              case normalizedRotation >= 4.71-angle && normalizedRotation <= 4.71+angle:
                setCurrentStage(2);
                break;
              case normalizedRotation >= 3.14-angle && normalizedRotation <= 3.14+angle:
                setCurrentStage(3);
                break;
              case normalizedRotation >= 1.57-angle && normalizedRotation <= 1.57+angle:
                setCurrentStage(4);
                break;
              case normalizedRotation >= 6.28-angle || normalizedRotation <= angle:
                setCurrentStage(1);
                break;
              default:
                setCurrentStage(null);
            }
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

    useEffect(() => {
        actions["The Life"].play();
      }, []);


  return (
    <a.group ref={islandRef} {...props}>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
          <group
            name="dad255dd2cf24ae0bb357684e49722b4fbx"
            rotation={[Math.PI / 2, 0, 0]}
          >
            <group name="Object_2">
              <group name="RootNode">
                <group
                  name="Scene"
                  position={[-4.794, 0, 0.278]}
                  rotation={[-Math.PI / 2, 0, 0]}
                >
                  <group name="Object_5" position={[-14, 15.788, 4.337]}>
                    <mesh
                      name="Scene_Texture-base_0"
                      castShadow
                      receiveShadow
                      geometry={nodes["Scene_Texture-base_0"].geometry}
                      material={materials["Texture-base"]}
                    />
                    <mesh
                      name="Scene_Texture-base_0_1"
                      castShadow
                      receiveShadow
                      geometry={nodes["Scene_Texture-base_0_1"].geometry}
                      material={materials["Texture-base"]}
                    />
                    <mesh
                      name="Scene_Texture-base-gloss-jpg_0"
                      castShadow
                      receiveShadow
                      geometry={
                        nodes["Scene_Texture-base-gloss-jpg_0"].geometry
                      }
                      material={materials["Texture-base-gloss-jpg"]}
                    />
                    <mesh
                      name="Scene_Book-tittle_0"
                      castShadow
                      receiveShadow
                      geometry={nodes["Scene_Book-tittle_0"].geometry}
                      material={materials["Book-tittle"]}
                    />
                  </group>
                  <group
                    name="Mill-wind-wheel"
                    position={[-35.783, -27.192, 3.888]}
                    rotation={[0.445, -0.447, -0.498]}
                  >
                    <group
                      name="Object_11"
                      position={[-8.253, 39.884, -25.75]}
                      rotation={[-0.607, 0.138, 0.644]}
                    >
                      <mesh
                        name="Mill-wind-wheel_Texture-base_0"
                        castShadow
                        receiveShadow
                        geometry={
                          nodes["Mill-wind-wheel_Texture-base_0"].geometry
                        }
                        material={materials["Texture-base"]}
                      />
                    </group>
                  </group>
                  <group
                    name="Mill-water-wheel"
                    position={[3.708, -15.395, -0.444]}
                    rotation={[-1.92, 0, 0]}
                  >
                    <group name="Object_14" position={[-17.708, 31.183, 4.781]}>
                      <mesh
                        name="Mill-water-wheel_Texture-base_0"
                        castShadow
                        receiveShadow
                        geometry={
                          nodes["Mill-water-wheel_Texture-base_0"].geometry
                        }
                        material={materials["Texture-base"]}
                      />
                    </group>
                  </group>
                </group>
                <group
                  name="flag"
                  position={[-11.513, 12.497, -6.752]}
                  rotation={[-Math.PI / 2, 0, -Math.PI / 6]}
                >
                  <group name="Object_17" position={[-7.262, 9.035, -8.16]}>
                    <mesh
                      name="0"
                      castShadow
                      receiveShadow
                      geometry={nodes["0"].geometry}
                      material={materials["Texture-base"]}
                      morphTargetDictionary={nodes["0"].morphTargetDictionary}
                      morphTargetInfluences={nodes["0"].morphTargetInfluences}
                    />
                  </group>
                </group>
                <group
                  name="flag-second"
                  position={[-11.494, 12.552, -26.245]}
                  rotation={[-Math.PI / 2, 0, 0]}
                >
                  <group name="Object_20" position={[-7.262, 9.035, -8.16]}>
                    <mesh
                      name="1"
                      castShadow
                      receiveShadow
                      geometry={nodes["1"].geometry}
                      material={materials["Texture-base"]}
                      morphTargetDictionary={nodes["1"].morphTargetDictionary}
                      morphTargetInfluences={nodes["1"].morphTargetInfluences}
                    />
                  </group>
                </group>
                <group
                  name="Waterfall"
                  position={[-4.794, 0, 0.351]}
                  rotation={[-Math.PI / 2, 0, 0]}
                >
                  <group name="Object_23" position={[-14, 15.788, 4.337]}>
                    <mesh
                      name="Waterfall_Texture-base-gloss-jpg_0"
                      castShadow
                      receiveShadow
                      geometry={
                        nodes["Waterfall_Texture-base-gloss-jpg_0"].geometry
                      }
                      material={materials["Texture-base-gloss-jpg"]}
                    />
                  </group>
                </group>
                <group
                  name="deers"
                  position={[-23.122, -0.049, 14.878]}
                  rotation={[-Math.PI / 2, 0, 0]}
                >
                  <group name="Object_26" position={[4.328, 30.387, 4.387]}>
                    <mesh
                      name="deers_Texture-base_0"
                      castShadow
                      receiveShadow
                      geometry={nodes["deers_Texture-base_0"].geometry}
                      material={materials["Texture-base"]}
                    />
                  </group>
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </a.group>
  );
}

export default Island
