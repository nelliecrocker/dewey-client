import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom'
import * as FaIcons from "react-icons/fa"
import * as AiIcons from "react-icons/ai"
import { SidebarData } from './SidebarData'
import './Navbar.css'

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
                        <FaIcons.FaBars onClick={this.showSidebar} />
                    </Link>
                </div>
                <nav className={this.state.sidebar ? 'nav-menu active' : 'nav-menu'}>
                    <ul className="nav-menu-items" onClick={this.showSidebar}>
                        <li className='navbar-toggle'><Link to='#'>
                            <AiIcons.AiOutlineClose />
                        </Link>
                    </li>
                        <li>{this.props.token !== ""
                            ? <button onClick={this.clearToken}>Logout</button>
                            : null
                        }</li>
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
                        
                    </ul>
                </nav>
            </>
        );
    }
}

export default Navbar;