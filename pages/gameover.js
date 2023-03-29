import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router';

import React from 'react'
import { Canvas, useLoader, KeyboardControls } from '@react-three/fiber'
import * as THREE from "three";

import NavBar from '/components/navbar'

export default function Retry () {
    const { query } = useRouter();
    const router = useRouter();
    const score = query.score;
    router.events.on("hashChangeStart", ()=>{router.push('/')});
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

                <p className="z-[3] mt-3  font-bold text-white text-6xl">{score} points</p>
                <p className="z-[2] self-center mt-40 md:mt-5 lg:mt-40 font-bold text-[#FF5050] text-9xl">Late!!</p>
                <Link passHref className="z-[2] w-70 md:mb-0 lg:mt-32 p-2 md:p-3 lg:p-3 font-semibold text-white hover:bg-[#55748F] bg-themeBlue rounded-2xl md:rounded-3xl text-center text-6xl md:text-7xl lg:text-8xl" href="/play">
                    <button>Retry</button>
                </Link>
            </main>
        </>
    );
}