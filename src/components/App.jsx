import Header from "./Header"
import About from "./About"
import Projects from "./Projects"

export default function App(props){
    return(
    <>
    <Header />
	<About />
	<Projects 
        projectName={props.projectName}
    />
    </>

)}