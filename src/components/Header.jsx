import Navbar from "./Navbar"

export default function Header(){
    return (
        <header className="bg-[url('../public/mountain-background.jpeg')] bg-no-repeat bg-center bg-cover">
            <Navbar />
            <div className="mx-6 mt-32 sm:mt-52 sm:w-4/6 max-w-2xl">
                <p className="rounded-2xl text-2xl leading-[2] sm:p-4 sm:text-5xl sm:leading-[1.4] text-white font-shantell text-gray-100">Hi, My name is Steven Perez and I like to create websites and build random projects!</p>
            </div>
            <button className="rounded-xl mx-6 mt-10 my-2 mb-60 p-3 text-md font-medium text-gray-100 bg-slate-50/25 font-alegreya md:mb-72">Contact</button>
        </header>
    )
}