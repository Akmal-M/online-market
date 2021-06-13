import Main from "./main";
import Footer from "../Components/Footer/Footer";
import MidNav from "../Components/Navbar/MidNav";
import Navbar from "../Components/Navbar/Navbar";
import Product from "../Components/CardProduct/Product";

export default function Home() {
    return (
        <div>
            <Navbar/>
            <Product/>
            <Main/>
            <Footer/>
        </div>
    )
}
