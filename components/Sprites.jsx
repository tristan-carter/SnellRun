import React, { useRef, useState } from 'react'
import { Canvas, useLoader, useFrame } from '@react-three/fiber'
import { useSpring, animated, config } from '@react-spring/three'
import * as THREE from "three";

function useSpritesheetAnimation (texture, frameTime) {
    const t = useRef(0)
    const currentFrame = useRef(0)
  
    useFrame((_, delta) => {
      t.current += delta * 1000
  
      if (t.current >= frameTime) {
        currentFrame.current += 1
  
        if (currentFrame.current >= 4) {
          currentFrame.current = 0
        }
  
        t.current = 0
  
        texture.offset.x = currentFrame.current / 4
      }
    })
  
    return { t, currentFrame }
  }

export function TomSprite() {
  const jumping = useRef(false)

  const [springs, api] = useSpring(() => ({
    position: [-1.5, -0.5, 1],
    config: {
      tension: 170,
      friction: 26,
      mass: 1,
    },
  }));

  const texture = useLoader(THREE.TextureLoader, '/Images/TomSpriteSet.png')
  texture.minFilter = THREE.NearestFilter
  texture.magFilter = THREE.NearestFilter

  texture.repeat.set(1/4, 1)

  useSpritesheetAnimation(texture, 180)

  function jumpPressed(){
    if (!jumping.current){
      jumping.current = true
      console.log(jumping.current)
      api.start({ position: [-1.5, 1.5, 1] });
      //set({ position: [-1.5, -0.5, 1] });
      //jumping.current = false
      //console.log(jumping.current)
    }
  }

  window.addEventListener("keydown", jumpPressed)
  window.addEventListener("click", jumpPressed)
  
  
  return (
      <animated.sprite scale={[1.9, 1.9]} position={[-0.8, -0.6, 1]} >
          <spriteMaterial transparent map={texture} />
      </animated.sprite>
  )
}

export function SnellSprite() {
  const texture = useLoader(THREE.TextureLoader, '/Images/SnellSpriteSet.png')
  texture.minFilter = THREE.NearestFilter
  texture.magFilter = THREE.NearestFilter

  texture.repeat.set(1/4, 1)

  useSpritesheetAnimation(texture, 200)
  
  return (
      <sprite scale={[2.1, 2.1]} position={[-1.5, -0.5, 1]} >
          <spriteMaterial transparent map={texture} />
      </sprite>
  )
}