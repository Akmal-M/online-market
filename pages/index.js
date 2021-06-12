import Main from "./main";
import Footer from "../Components/Footer/Footer";
import Navbar from "../Components/Navbar";
import BodyCard from "../Components/BodyCard/BodyCard";

export default function Home() {
    return (
        <div>
            <BodyCard/>
            <Navbar/>
            <Main/>
            <Footer/>
        </div>
    )
}
