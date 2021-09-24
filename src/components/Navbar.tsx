import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom'
import * as FaIcons from "react-icons/fa"
import * as IoIcons from "react-icons/io5"
import * as AiIcons from "react-icons/ai"
import { SidebarData } from './SidebarData'
import Deweynude from '../images/Deweynude.svg'
import '../styling/Navbar.css'

type Props = {
    token: string,
    updateToken(newToken: string): void

}

type State = {
    // clearToken(): void,
    // sessionToken: string,
    sidebar: boolean
}


class Navbar extends Component<Props, State> {
    constructor(props: Props) {
        super(props)
        this.state = {
            sidebar: false,
        }
    }

    showSidebar = () => {
        this.setState({ sidebar: !this.state.sidebar })
    }

    componentDidMount() {
        this.clearToken()
    }

    clearToken = () => {
        localStorage.clear()
        this.props.updateToken("")
    }

    render() {
        return (
            <>
                <div className="navbar">
                    <Link to='#' className="menu-bars">
                        <IoIcons.IoLibraryOutline onClick={this.showSidebar} />
                    </Link>
                    <Link to='/'>
                    <img className="navbar-logo" src={Deweynude}></img>
                    </Link>
                    {/* {this.props.token !== ""
                        ? <button className="navbar-btn" onClick={this.clearToken}>Logout</button>
                        : null
                    } */}
                </div>

                <nav className={this.state.sidebar ? 'nav-menu active' : 'nav-menu'}>

                    <ul className="nav-menu-items" onClick={this.showSidebar}>
                        <li className='navbar-toggle'>

                            <Link to='#' className="menu-x"><AiIcons.AiOutlineClose /></Link>
                        </li>

                        {SidebarData.map((item, index) => {
                            return (
                                <li key={index} className={item.cName}>
                                    <Link to={item.path}>
                                        {item.icon}
                                        <span>{item.title}</span>
                                    </Link>
                                </li>
                            )
                        })}
                        {this.props.token !== ""
                        ? <button className="navbar-btn" onClick={this.clearToken}>Logout</button>
                        : null
                    }
                    </ul>
                </nav>
            </>
        );
    }
}

export default Navbar;
