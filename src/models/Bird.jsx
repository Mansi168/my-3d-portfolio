import React, { useEffect, useRef } from 'react'

import birdScene from '../assets/3d/bird.glb';
import { useAnimations, useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';

const Bird = () => {
  const {scene, animations} = useGLTF(birdScene);
  const birdRef = useRef();
  const {actions} = useAnimations(animations, birdRef);
  

  useEffect(() => {
    actions['Take 001'].play();
  }, [])

  useFrame(({clock, camera}) => {
    // update the y position to simulate the bird like motion in a sine wave
    birdRef.current.position.y = Math.sin(clock.elapsedTime) * 0.2 + 2;

    //check if the bird reaches a certain endpoint relative to the camera 
    if(birdRef.current.position.x > camera.position.x + 10){
        //change direction to backwards and rotate the bird 180 degrees on the y axis
        birdRef.current.rotation.y = Math.PI;
    }else if(birdRef.current.position.x < camera.position.x - 10){
        //change direction to forward and reset the bird's rotation
        birdRef.current.rotation.y = 0;
    }

    //update the x and z positions based on the direction
    if(birdRef.current.rotation.y === 0){
        //moving forward
        birdRef.current.position.x += 0.01;
        birdRef.current.position.z -= 0.01;
    }else{
        //moving backward
        birdRef.current.position.x -= 0.01;
        birdRef.current.position.z += 0.01;
    }
  })

  return (
    <mesh position={[-5, 2, 1]} scale={[0.003, 0.003, 0.003]} ref={birdRef}>
        <primitive object={scene}/>
    </mesh>
  )
}

export default Bird