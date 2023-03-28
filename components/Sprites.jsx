import React, { useRef, useState } from 'react'
import { useLoader, useFrame } from '@react-three/fiber'
import { useSpring, animated } from '@react-spring/three'
import * as THREE from "three";

const startJumpingEvent = new Event('startJumping');

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

function delay(milliseconds){
    return new Promise(resolve => {
        setTimeout(resolve, milliseconds);
    });
}

export function TomSprite({ spriteRef }) {
  const [jumping, setJumping] = useState(false);

  const springs = useSpring({
    position: jumping ? [-0.9, 1.0, 1] : [-0.9, -0.6, 1],
    config: { tension: 120, friction: 14, duration: 300 }
  })

  const texture = useLoader(THREE.TextureLoader, '/Images/TomSpriteSet.png')
  texture.minFilter = THREE.NearestFilter
  texture.magFilter = THREE.NearestFilter

  texture.repeat.set(1/4, 1)

  useSpritesheetAnimation(texture, 195)

  async function jumpPressed(){
    if (spriteRef.current) {
      if (spriteRef.current.position.y < -0.4){
        window.removeEventListener("keydown", jumpPressed)
        window.removeEventListener("click", jumpPressed)
        window.dispatchEvent(startJumpingEvent)
        setJumping(true)
        await delay(300)
        setJumping(false)
      }
    }
  }

  window.addEventListener("keydown", jumpPressed)
  window.addEventListener("click", jumpPressed)
  
  
  return (
      <animated.sprite scale={[1.9, 1.9]} position={springs.position} ref={spriteRef} >
          <spriteMaterial transparent map={texture} />
      </animated.sprite>
  )
}

export function SnellSprite() {
  const [jumping, setJumping] = useState(false);

  const springs = useSpring({
    position: jumping ? [-1.7, 1.0, 1] : [-1.7, -0.6, 1],
    config: { tension: 120, friction: 14, duration: 300 }
  })

  const texture = useLoader(THREE.TextureLoader, '/Images/SnellSpriteSet.png')
  texture.minFilter = THREE.NearestFilter
  texture.magFilter = THREE.NearestFilter

  texture.repeat.set(1/4, 1)

  async function jumpPressed(){
    await delay(150)
    setJumping(true)
    await delay(300)
    setJumping(false)
  }

  window.addEventListener("startJumping", jumpPressed);



  useSpritesheetAnimation(texture, 215)
  
  return (
      <animated.sprite scale={[2.1, 2.1]} position={springs.position} >
          <spriteMaterial transparent map={texture} />
      </animated.sprite>
  )
}