import React, { useRef, useState } from 'react'
import { useLoader, useFrame, useThree } from '@react-three/fiber'
import { useSpring, animated } from '@react-spring/three'
import * as THREE from "three";

function delay(milliseconds){
    return new Promise(resolve => {
        setTimeout(resolve, milliseconds);
    });
}

var lastObstacleSentTime = 0

export function Obstacle({ startingSize, delay, randomDelayRange, obstacleRef }) {
    const { viewport } = useThree();
    const texture = useLoader(THREE.TextureLoader, '/Images/GameObstacle.png');

    var startTime = Date.now() + delay
    var speed = 0.03

    useFrame(() => {
        const currentTime = Date.now()
        if (currentTime >= startTime && (currentTime >= lastObstacleSentTime + 3000 || obstacleRef.current.position.x > -4)) {
            if (obstacleRef.current.position.x == 4) {
                lastObstacleSentTime = Date.now()
            }
            obstacleRef.current.position.x -= speed
            if (obstacleRef.current.position.x < -4) {
                obstacleRef.current.position.x = 4
                const newDelay = Math.floor(Math.random() * randomDelayRange[1]) + randomDelayRange[0];
                startTime = Date.now() + newDelay
            }
        }
    })

    return (
      <mesh position={[4, -1.4, 1]} ref={obstacleRef}>
        <planeGeometry args={startingSize} />
        <meshBasicMaterial map={texture} transparent={true} />
      </mesh>
    )
}