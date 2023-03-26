import Head from 'next/head'
import Image from 'next/image'

import React, { useRef } from 'react'
import { Canvas, useLoader, useFrame } from '@react-three/fiber'
import * as THREE from "three";

import NavBar from '/components/navbar'
import { TomSprite } from '/components/Sprites';
import { SnellSprite } from '/components/Sprites';
import { Obstacle } from '/components/ObstacleManager';
import { useRouter } from 'next/navigation';

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
    sprite.position.x < obstacle.position.x + 0.7 &&
    sprite.position.x + 0.8 > obstacle.position.x &&
    sprite.position.y < obstacle.position.y + 1 &&
    1.9 + sprite.position.y > obstacle.position.y
  );
}

function Game () {
  const router = useRouter();

  const spriteRef = useRef(null)

  const obstacleRef1 = useRef(null)
  const obstacleRef2 = useRef(null)
  const obstacleRef3 = useRef(null)
  

  useFrame(() => {
    if (checkCollision(spriteRef.current, obstacleRef1.current) 
    || checkCollision(spriteRef.current, obstacleRef2.current) 
    || checkCollision(spriteRef.current, obstacleRef3.current)) {
      // collided with an obstacle so takes you to the game over page
      router.push('/gameover')
    }
  });
  return (
    <>
      <Background image="/Images/HallwayBG.jpg" />

      <TomSprite spriteRef={spriteRef} />
      <SnellSprite/>

      <Obstacle obstacleRef={obstacleRef1} delay={2000} randomDelayRange={[0, 1000]} startingSize={[0.8, 1, 1]} />
      <Obstacle obstacleRef={obstacleRef2} delay={7000} randomDelayRange={[0, 1000]} startingSize={[0.8, 1, 1]} />
      <Obstacle obstacleRef={obstacleRef3} delay={9500} randomDelayRange={[0, 1000]} startingSize={[0.8, 1, 1]} />
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
        <Canvas className='bg-[#41BFA7]'>
          <Game/>
        </Canvas>
      </main>
    </>
  )
}