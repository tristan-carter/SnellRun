import React, { useRef, useState } from 'react'
import { useLoader, useFrame, useThree } from '@react-three/fiber'
import * as THREE from "three";

function delay(milliseconds){
    return new Promise(resolve => {
        setTimeout(resolve, milliseconds);
    });
}


function Obstacle({ obstacleRef, speedRef }) {
    const texture = useLoader(THREE.TextureLoader, '/Images/GameObstacle.png');

    return (
      <mesh position={[4, -1.4, 1]} ref={obstacleRef}>
        <planeGeometry args={[0.8, 1, 1]} />
        <meshBasicMaterial map={texture} transparent={true} />
      </mesh>
    )
}

export function ObstacleManager({ref1, ref2, ref3}) {
    const speedRef = useRef(4.5)

    const lastSentTimeRef = useRef(Date.now())
    const waitTimeRef = useRef(5000)

    const ref1Anchored = useRef(true)
    const ref2Anchored = useRef(true)
    const ref3Anchored = useRef(true)

    useFrame((_, delta) => {
        if (!ref1Anchored.current) {
            ref1.current.position.x -= speedRef.current * delta
            if (ref1.current.position.x < -4) {
                ref1.current.position.x = 4
                ref1Anchored.current = true
            }
        }
        if (!ref2Anchored.current) {
            ref2.current.position.x -= speedRef.current * delta
            if (ref2.current.position.x < -4) {
                ref2.current.position.x = 4
                ref2Anchored.current = true
            }
        }
        if (!ref3Anchored.current) {
            ref2.current.position.x -= speedRef.current * delta
            if (ref2.current.position.x < -4) {
                ref2.current.position.x = 4
                ref3Anchored.current = true
            }
        }

        const currentTime = Date.now()
        if (lastSentTimeRef.current+waitTimeRef.current < currentTime) {
            if (ref1Anchored.current) {
                ref1.current.position.x = 4
                lastSentTimeRef.current = currentTime
                waitTimeRef.current = Math.floor(Math.random() * 1200)+800;
                
                ref1Anchored.current = false
            } else if (ref2Anchored.current) {
                ref2.current.position.x = 4
                lastSentTimeRef.current = currentTime
                waitTimeRef.current = Math.floor(Math.random() * 1200)+800;

                ref2Anchored.current = false
            } else if (ref3Anchored.current) {
                ref3.current.position.x = 4
                lastSentTimeRef.current = currentTime
                waitTimeRef.current = Math.floor(Math.random() * 1200)+800;

                ref3Anchored.current = false
            }
        }
    })
    
    return(
        <>
            <Obstacle obstacleRef={ref1} speedRef={speedRef} />
            <Obstacle obstacleRef={ref2} speedRef={speedRef} />
            <Obstacle obstacleRef={ref3} speedRef={speedRef} />
        </>
    )
}