
export default function Navbar() {

    return (
        <nav className="flex justify-between p-4 sm:p-10 sm:text-lg text-white">
            <div className='text-xl font-shantell'>
                Steven Perez
            </div>
            <ol className="flex gap-6 invisible sm:visible">
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#" >Projects</a></li>
                <li><a href="#" className="px-4 py-3 rounded-lg bg-slate-50/10">Contact</a></li>
            </ol>
        </nav>
    )
}

//Fix and Make Hamburger at end