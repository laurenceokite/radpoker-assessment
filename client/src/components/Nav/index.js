import React from "react";
import { Link } from "react-router-dom";
import Nav from 'react-bootstrap/Nav'

const Navigation = () => {
    return (
        <Nav>
            <Nav.Item>
                <Nav.Link>
                    <Link to='/customers'>Customers</Link>
                </Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link>
                    <Link to='/contests'>Contests</Link>
                </Nav.Link>
            </Nav.Item>
        </Nav>
    );
}

export default Navigation;