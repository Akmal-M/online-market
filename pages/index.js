import Main from "./main";
import Footer from "../Components/Footer/Footer";
import Navbar from "../Components/Navbar/Navbar";
import ProductMain from "../Components/CardProduct/ProductMain";

export default function Home() {
    return (
        <div>
            <Navbar/>
            <ProductMain/>
            <Main/>
            <Footer/>
        </div>
    )
}
