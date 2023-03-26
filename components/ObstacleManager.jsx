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

function Obstacle({ startingSize, delay, randomDelayRange }) {
    const { viewport } = useThree();
    const texture = useLoader(THREE.TextureLoader, '/Images/GameObstacle.png');
    const obstacleRef = useRef()

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
        <planeBufferGeometry args={startingSize} />
        <meshBasicMaterial map={texture} transparent={true} />
      </mesh>
    )
}


export function ObstacleManager() {
    const { viewport } = useThree();
    return (
        <group>
            <Obstacle delay={2000} randomDelayRange={[0, 1000]} startingSize={[0.8, 1, 1]} />
            <Obstacle delay={7000} randomDelayRange={[0, 1000]} startingSize={[0.8, 1, 1]} />
            <Obstacle delay={9500} randomDelayRange={[0, 1000]} startingSize={[0.8, 1, 1]} />
        </group>
    )
}