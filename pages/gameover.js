import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

import React from 'react'
import { Canvas, useLoader, KeyboardControls } from '@react-three/fiber'
import * as THREE from "three";

import NavBar from '/components/navbar'

export default function Retry () {
    return (
        <>
            <Head>
                <title>SnellRun</title>
                <meta name="description" content="2d game escaping Mr Snelling because you are late. Credits: Tristan C, Tom G, Adam L and to everyone who gave suggestions." />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/Images/HeaderIcon.png" />
            </Head>
            
            <main className="flex flex-col items-center h-full bg-themeBlue">
                <NavBar/>

                <div className="absolute h-full w-screen z-[1] rounded-lg "> 
                    <Image
                        src="/Images/SnellingCross.png"
                        alt="Background Image"
                        fill
                        className="-z-10 object-contain"
                        priority={true}
                    />
                </div>

                <p className="z-[2] self-center mt-[70%] md:mt-[14%] font-bold text-[#FF5050] text-9xl">Late!!</p>
                <Link passHref className="z-[2] w-70 md:mb-0 md:mt-36 lg:w-70 p-2 md:p-3 lg:p-4 font-semibold text-white hover:bg-[#55748F] bg-themeBlue rounded-2xl md:rounded-3xl text-center text-6xl md:text-7xl lg:text-8xl" href="/play">
                    <button>Retry</button>
                </Link>
            </main>
        </>
    );
}