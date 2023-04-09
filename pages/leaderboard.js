import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

import React from 'react'
import { Canvas, useLoader, KeyboardControls } from '@react-three/fiber'
import * as THREE from "three";

import NavBar from '/components/navbar'

const LeaderboardStats = [
    { position: "4", name: "Ed L", score: "2224" },
    { position: "5", name: "Ethan W", score: "2182" },
    { position: "6", name: "Char B", score: "2046" },
    { position: "7", name: "Tom G", score: "1943" },
    { position: "8", name: "Oliver C", score: "1791" },
    { position: "9", name: "Char T", score: "1741" },
    { position: "10", name: "Max P", score: "1470" },
    { position: "11", name: "Erik G", score: "1395" },
    { position: "12", name: "Josh P", score: "1363" },
    { position: "13", name: "Olly S", score: "1056" },
    { position: "14", name: "Will C", score: "1011" },
]

export default function Leaderboard () {
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
                <p className="mt-4 font-bold text-[#D6973A] text-4xl md:text-7xl">🏆Leaderboard🏆</p>
                <ul className="mt-4" >
                    <li className="m-0.2 text-[#b8860b] text-3xl md:text-4xl font-bold text-center">
                        1st - Adam L :  5671 points
                    </li>
                    <li className="m-0.2 text-[#c0c0c0] text-3xl md:text-4xl font-bold text-center">
                        2nd - Roman Z :  3056 points
                    </li>
                    <li className="m-0.2 text-[#cd7f32] text-3xl md:text-4xl font-bold text-center">
                        3rd - Conor H :  2252 points
                    </li>
                    {LeaderboardStats.map(User => <li className="m-0.2 text-white text-2xl md:text-3xl font-semibold text-center">
                        {User["position"]}th - {User["name"]} : {User["score"]} points
                        </li>)}
                </ul>
                <p className="mt-1 text-[#07223C] text-lg text-center" >(Direct message TrisCart on Teams with a screenshot of your score to be added!)</p>
            </main>
        </>
    );
}