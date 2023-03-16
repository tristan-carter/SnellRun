import React from 'react'

import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

export default function Home () {
  return (
    <>
      <Head>
        <title>SnellRun</title>
        <meta name="description" content="2d game escaping Mr Snelling because you are late. Credits: Tristan C, Alexa G, Tom G, Adam L and to everyone who gave suggestions." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex flex-col justify-center items-center min-h-screen">
        <div className="absolute h-screen w-screen">
          <Image
              src="/Images/LandingBG.jpg"
              alt="Background Image"
              fill
              className="-z-10 object-cover"
          />
        </div>
        <Link passHref className="h-[17%] aspect-[36/12]" href="/play">
          <button className="h-full w-full leading-tight py-2 font-semibold text-themeBlue bg-themeOrange rounded-3xl text-center sm:text-xl md:text-5xl lg:text-8xl">Play</button>
        </Link>
      </main>
    </>
  )
}
