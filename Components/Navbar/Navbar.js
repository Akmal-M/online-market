import React from 'react';
import Discount from "./Discount";
import MidNav from "./MidNav";
import NavbarDropdown from "./NavbarDropdown";

const Navbar = () => {
    return (
        <div >
            <Discount/>
            <MidNav/>
            <NavbarDropdown/>
        </div>
    );
};

export default Navbar;