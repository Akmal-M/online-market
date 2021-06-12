import Main from "./main";
import Footer from "../Components/Footer/Footer";
import MidNav from "../Components/Navbar/MidNav";
import BodyCard from "../Components/BodyCard/BodyCard";
import Navbar from "../Components/Navbar/Navbar";

export default function Home() {
    return (
        <div className='container mx-auto'>
           <Navbar/>
            <Main/>
            <Footer/>
        </div>
    )
}
