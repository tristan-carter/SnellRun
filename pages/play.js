import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

import NavBar from '/components/navbar'

export default function Home () {
  return (
    <>
      <Head>
        <title>SnellRun</title>
        <meta name="description" content="2d game escaping Mr Snelling because you are late. Credits: Tristan C, Alexa G, Tom G, Adam L and to everyone who gave suggestions." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex flex-col justify-center items-center h-full bg-themeOrange">
        <NavBar/>
      </main>
    </>
  )
}