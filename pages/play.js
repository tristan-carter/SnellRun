import Head from 'next/head'
import Image from 'next/image'

import React from 'react'
import { Canvas, useLoader, KeyboardControls } from '@react-three/fiber'
import * as THREE from "three";

import NavBar from '/components/navbar'
import { TomSprite } from '/components/Sprites';
import { SnellSprite } from '/components/Sprites';
import { ObstacleManager } from '/components/ObstacleManager';

function Background({ image }) {
  const texture = useLoader(THREE.TextureLoader, image);
  texture.wrapS = texture.wrapT = THREE.RepeatWrapping;

  return (
    <mesh>
      <planeBufferGeometry args={[11, 6]} />
      <meshBasicMaterial map={texture} />
    </mesh>
  );
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
            <Background image="/Images/HallwayBG.jpg" />
            <TomSprite/>
            <SnellSprite/>
            <ObstacleManager/>
          </Canvas>
      </main>
    </>
  )
}