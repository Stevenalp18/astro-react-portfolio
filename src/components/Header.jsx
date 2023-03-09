import Navbar from "./Navbar"

export default function Header(){
    return (
        <header className="bg-mountain bg-no-repeat bg-center bg-cover w-screen h-screen">
            <Navbar />
            <p className="mx-6 my-20 text-5xl leading-relaxed font-shantell text-white">
            Hi, My name is Steven Perez and I like to create websites!
            </p>
            <button className="text-white font-shantell font-medium mx-6 bg-slate-500/50 py-3 px-4 text-2xl rounded-xl">Contact</button>
        </header>
    )
}
