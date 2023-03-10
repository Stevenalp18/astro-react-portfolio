
export default function Downarrow(props){
    return(
        <div className="bg-slate-300 w-16 rounded-full m-auto absolute inset-x-1/2">
            <a href={props.nextpagelink}><img src="https://github.com/Stevenalp18/web-dev-images/blob/main/down-arrow.png?raw=true" className="w-16" /></a>
        </div>
    )
}