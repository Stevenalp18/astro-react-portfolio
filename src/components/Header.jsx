import Navbar from "./Navbar"

export default function Header(){
    function wha(){
        alert('hi')
    }
    return (
        <header className="bg-mountain bg-no-repeat bg-center bg-cover w-screen h-screen">
            <Navbar />
            <div className="m-auto max-w-screen-md sm:mx-auto sm:my-20">
                <p className="mx-6 my-10 text-5xl leading-relaxed font-shantell text-white lg:text-6xl lg:leading-relaxed">
                Hi, My name is Steven Perez and I like to create websites!
                </p>
                <button className="text-white font-shantell font-medium mx-6 bg-slate-300/30 py-3 px-4 text-2xl rounded-xl lg:text-3xl" onClick={wha}>Contact</button>
            </div>
        </header>
    )
}
