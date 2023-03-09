import Navbar from "./Navbar"

export default function Header(){
    return (
        <header className="bg-mountain bg-no-repeat bg-center bg-cover w-screen h-screen">
            <Navbar />
            <p className="mx-6 my-20 text-3xl font-shantell text-white">
            Hi, My name is Steven Perez and I like to create websites!
            </p>
            <button className="text-white font-shantell font-medium mx-6 bg-slate-500/50 p-2 rounded-xl">Contact</button>
        </header>
    )
}
// mx-6 mt-32 sm:mt-52 sm:w-4/6 max-w-2xl

// rounded-2xl text-2xl leading-[2] sm:p-4 sm:text-5xl sm:leading-[1.4] text-white font-shantell text-gray-100

// rounded-xl mx-6 mt-10 my-2 mb-60 p-3 text-md font-medium text-gray-100 bg-slate-50/25 font-alegreya md:mb-72