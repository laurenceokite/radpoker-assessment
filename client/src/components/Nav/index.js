import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
    return (
        <div>
            <Link to='/customers'>Customers</Link>
            <Link to='/contests'>Contests</Link>
            <div></div>
        </div>
    );
}

export default Nav;