import Head from 'next/head'
import Image from 'next/image'

import React, { useRef } from 'react'
import { Canvas, useLoader, useFrame } from '@react-three/fiber'
import * as THREE from "three";

import NavBar from '/components/navbar'
import { TomSprite } from '/components/Sprites';
import { SnellSprite } from '/components/Sprites';
import { Obstacle } from '/components/ObstacleManager';

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

function checkCollision(obj1, obj2) {
  return (
    obj1.position.x < obj2.position.x + obj2.width &&
    obj1.position.x + obj1.width > obj2.position.x &&
    obj1.position.y < obj2.position.y + obj2.height &&
    obj1.height + obj1.position.y > obj2.position.y
  );
}

function Game () {
  const spriteRef = useRef(null)

  const obstacleRef1 = useRef(null)
  const obstacleRef2 = useRef(null)
  const obstacleRef3 = useRef(null)

  useFrame(() => {
    if (checkCollision(spriteRef.current, obstacleRef1.current) 
    || checkCollision(spriteRef.current, obstacleRef2.current) 
    || checkCollision(spriteRef.current, obstacleRef3.current)) {
      console.log('collision detected!');
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
        <meta name="description" content="2d game escaping Mr Snelling because you are late. Credits: Tristan C, Alexa G, Tom G, Adam L and to everyone who gave suggestions." />
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