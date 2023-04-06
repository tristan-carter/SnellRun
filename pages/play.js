import Head from 'next/head'
import Image from 'next/image'

import React, { useRef, useState } from 'react'
import { Canvas, useLoader, useFrame } from '@react-three/fiber'
import { Text } from '@react-three/drei'
import * as THREE from "three";
import { Clock } from 'three'

import NavBar from '/components/navbar'
import { TomSprite } from '/components/Sprites';
import { SnellSprite } from '/components/Sprites';
import { useRouter } from 'next/navigation';
import { ObstacleManager } from '/components/ObstacleManager'

function Background({ image }) {
  const texture = useLoader(THREE.TextureLoader, image);
  texture.wrapS = texture.wrapT = THREE.RepeatWrapping;

  return (
    <mesh>
      <planeGeometry args={[11, 6]} />
      <meshBasicMaterial map={texture} />
    </mesh>
  );
}

function checkCollision(sprite, obstacle) {
  return (
    sprite.position.x < obstacle.position.x + 0.35 &&
    sprite.position.x + 0.35 > obstacle.position.x &&
    sprite.position.y < obstacle.position.y + 0.9 &&
    0.9 + sprite.position.y > obstacle.position.y
  );
}

function Game () {
  const router = useRouter();

  const spriteRef = useRef(null)

  const obstacleRef1 = useRef(null)
  const obstacleRef2 = useRef(null)
  const obstacleRef3 = useRef(null)

  const [score, setScore] = useState(0)
  const clockRef = useRef(new Clock())

  useFrame((clock) => {
    if (!document.hasFocus()) {
      router.push({
        pathname: '/gameover',
        query: {score},
      })
    }
    const elapsedTime = clockRef.current.getElapsedTime()
    const newTime = Math.round(elapsedTime * 10)
    if (score < newTime) { setScore(newTime) }

    if (checkCollision(spriteRef.current, obstacleRef1.current) 
    || checkCollision(spriteRef.current, obstacleRef2.current) 
    || checkCollision(spriteRef.current, obstacleRef3.current)) {
      // collided with an obstacle so takes you to the game over page
      router.push({
        pathname: '/gameover',
        query: {score},
    })
    }
  });
  return (
    <>
      <Background image="/Images/HallwayBG.jpg" />

      <Text color="white" anchorX="center" anchorY="bottom" fontSize={0.7} >
        {score}
      </Text>

      <TomSprite spriteRef={spriteRef} />
      <SnellSprite/>

      <ObstacleManager ref1={obstacleRef1} ref2={obstacleRef2} ref3={obstacleRef3} />
    </>
  )
}

export default function Play () {

  return (
    <>
      <Head>
        <title>SnellRun</title>
        <meta name="description" content="2d game escaping Mr Snelling because you are late. Credits: Tristan C, Tom G, Adam L and to everyone who gave suggestions." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/Images/HeaderIcon.png" />
      </Head>
      <main className="flex flex-col justify-center items-center h-full bg-themeBlue">
        <NavBar/>
        <Canvas className='bg-[#41BFA7] z-[2]'>
          <Game/>
        </Canvas>
      </main>
    </>
  )
}