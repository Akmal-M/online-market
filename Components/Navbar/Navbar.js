import React from 'react';
import Discount from "./Discount";
import MidNav from "./MidNav";
import NavbarDropdown from "./NavbarDropdown";

const Navbar = () => {
    return (
        <div className="z-10">
            <Discount/>
            <MidNav/>
            <NavbarDropdown/>
        </div>
    );
};

export default Navbar;