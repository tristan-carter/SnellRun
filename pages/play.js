import Head from 'next/head'
import Image from 'next/image'

import React from 'react'
import { Canvas } from '@react-three/fiber'
import { useLoader } from "@react-three/fiber";
import * as THREE from "three";

import NavBar from '/components/navbar'

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

export default function Home () {
  return (
    <>
      <Head>
        <title>SnellRun</title>
        <meta name="description" content="2d game escaping Mr Snelling because you are late. Credits: Tristan C, Alexa G, Tom G, Adam L and to everyone who gave suggestions." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/Images/HeaderIcon.png" />
      </Head>
      <main className="flex flex-col justify-center items-center h-full bg-themeOrange">
        <NavBar/>
        <Canvas className='bg-[#41BFA7]'>
          <Background image="/Images/HallwayBG.jpg" />
        </Canvas>
      </main>
    </>
  )
}