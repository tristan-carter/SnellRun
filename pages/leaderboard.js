import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

import React from 'react'
import { Canvas, useLoader, KeyboardControls } from '@react-three/fiber'
import * as THREE from "three";

import NavBar from '/components/navbar'

const LeaderboardStats = [
    { position: "4", name: "Roman Z", score: "831" },
    { position: "5", name: "Tristan C", score: "743" },
    { position: "6", name: "Mitch M", score: "503" },
    { position: "7", name: "Roman Z", score: "831" },
    { position: "8", name: "Tristan C", score: "743" },
    { position: "9", name: "Mitch M", score: "503" },
    { position: "10", name: "?", score: "..." },
    { position: "11", name: "?", score: "..." },
    { position: "12", name: "?", score: "..." },
    { position: "13", name: "?", score: "..." },
    { position: "14", name: "?", score: "..." },
    { position: "15", name: "?", score: "..." }
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
                    <li className="m-0.5 text-[#b8860b] text-3xl md:text-4xl font-bold text-center">
                        1st - Conor H :  2252 points
                    </li>
                    <li className="m-0.5 text-[#c0c0c0] text-3xl md:text-4xl font-bold text-center">
                        2nd - Josh P :  1363 points
                    </li>
                    <li className="m-0.5 text-[#cd7f32] text-3xl md:text-4xl font-bold text-center">
                        3rd - Olly S :  1054 points
                    </li>
                    {LeaderboardStats.map(User => <li className="m-0.5 text-white text-2xl md:text-3xl font-semibold text-center">
                        {User["position"]}th - {User["name"]} : {User["score"]} points
                        </li>)}
                </ul>
                <p className="mt-5 text-[#07223C] text-xl text-center" >(Direct message TrisCart on Teams with a screenshot of your score to be added!)</p>
            </main>
        </>
    );
}