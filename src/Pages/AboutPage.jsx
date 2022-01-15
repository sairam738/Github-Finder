import {Link} from "react-router-dom";

function About(){
    return (
        <>
            <div
                className="
                flex
                items-center
                justify-center
                w-screen
                h-screen

              "
            >
                <div className="px-40 py-20 mx-auto rounded-md shadow-xl">
                    <div className="flex flex-col items-center">
                        <h1 className="font-bold text-6xl">GITHUB FINDER</h1>

                        <h6 className="mb-2 text-2xl font-bold text-center text-red-500 md:text-3xl">
                            Version 1.0.0
                        </h6>

                        <p className="mb-8 text-center text-gray-500 md:text-lg">
                            This is a github finder app made using react, tailwind UI and DaisyUI. This App's main purpose is to find the github profiles of various
                            users and shows each of their stats, recent repositories and contribution.
                        </p>

                        <p className="mb-2 text-2xl font-bold text-center text-red-500 md:text-3xl">Enjoy using the APP!</p>

                        <Link
                            to="/"
                            className="px-6 py-2 text-sm font-semibold text-neutral-content bg-black">
                            Go home
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default About
