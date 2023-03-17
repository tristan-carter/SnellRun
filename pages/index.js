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
      <main className="flex flex-col justify-center items-center min-h-screen max-h-screen">
        <div className="absolute h-screen w-screen z-[-1]">
          <Image
              src="/Images/LandingBG.jpg"
              alt="Background Image"
              fill
              className="-z-10 object-cover"
          />
        </div>
        <Link passHref className="md:w-50  lg:w-80 aspect-[36/12] p-2 font-semibold text-themeBlue hover:bg-[#FF9800] bg-themeOrange rounded-3xl text-center sm:text-3xl md:text-6xl lg:text-8xl" href="/play">
          <button>Play</button>
        </Link>
      </main>
    </>
  )
}
