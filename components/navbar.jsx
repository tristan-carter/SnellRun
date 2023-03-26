import Link from 'next/link'
import Image from "next/image";
import React from "react";

export default function NavBar() {
    return(
        <div className="p-4 justify-between items-center flex flex-row h-[4.5rem] relative w-full z-50">
            <div className="relative">
                <Image
                    src="/Images/HeaderIcon.png"
                    alt="Clifton Logo"
                    width={64}
                    height={64}
                    priority={true}
                />
            </div>

            <p className="md:self-center text-themeOrange text-6xl md:text-7xl font-semibold">SnellRun</p>
            <Link className="relative" href="/">
                <Image
                    src="/Images/NavExitButton.png"
                    alt="Back Button"
                    width={64}
                    height={64}
                    priority={true}
                />
            </Link>
        </div>
    )
}