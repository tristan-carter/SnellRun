import Link from 'next/link'
import Image from "next/image";
import React from "react";

export default function NavBar() {
    return(
        <div className="p-4 justify-between items-center flex flex-row h-[11%] md:h-[13%] relative w-full z-50">
            <div className="relative h-full aspect-square">
                <Image
                    src="/Images/OrangeHeaderIcon.png"
                    alt="Clifton Logo"
                    fill
                />
            </div>

            <p className="md:self-center text-themeBlue text-6xl md:text-8xl font-semibold">SnellRun</p>
            <Link className="relative h-full aspect-square" href="/">
                <Image
                    src="/Images/NavExitButton.png"
                    alt="Back Button"
                    fill
                />
            </Link>
        </div>
    )
}