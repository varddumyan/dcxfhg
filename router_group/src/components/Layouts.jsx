import Footer from "./Footer";
import Header from "./Header";
import {Outlet} from "react-router-dom";

function Layouts(){
    return <div>
        <Header/>
        <div>
            <Outlet/>
        </div>
        <Footer/>
    </div>
}
export default Layouts;