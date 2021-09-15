import React, { Component } from 'react';
import { Link } from 'react-router-dom'

type Props = {}


class Navbar extends Component<Props, {}> {
    constructor(props: Props) {
        super(props)
    }
    render() {
        return (
            <div>
                


                {/* <ul> */}
                    {/* add activeClassName={"classname"} after {"/Login"} to stylize */}
                    {/* <li><Link to="/login">Login</Link></li>
                    <li><Link to="/register">Register</Link></li>
                </ul> */}
            </div>
        );
    }
}

export default Navbar;