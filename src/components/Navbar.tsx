import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom'
import * as FaIcons from "react-icons/fa"
import * as IoIcons from "react-icons/io5"
import * as AiIcons from "react-icons/ai"
import { SidebarData } from './SidebarData'
import Deweynude from '../images/Deweynude.svg'
import '../styling/Navbar.css'
import { User } from '../Types/User'


type Props = {
    token: string,
    updateToken(newToken: string): void,
    newUser: User,
}

type State = {
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
                <div className="navbar-styling">
                    <Link to='#' className="menu-bars">
                        <IoIcons.IoLibraryOutline onClick={this.showSidebar} />
                    </Link>
                    <Link to='/'>
                        <img className="navbar-logo" src={Deweynude}></img>
                    </Link>
                </div>

                <nav className={this.state.sidebar ? 'nav-menu active' : 'nav-menu'}>

                    <ul className="nav-menu-items" onClick={this.showSidebar}>
                        <li className='navbar-toggle'>

                            <Link to='#' className="menu-x"><AiIcons.AiOutlineClose /></Link>
                        </li>

                        {this.props.token === "" ? null :
                            <div className="navbar-name">Welcome {this.props.newUser.fname}</div>}

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
                            ?
                            <div>
                                    <Link to='/user/profile/create'><button className="navbar-btn">Create Profile</button></Link>
                                    
                                {this.props.newUser.isAdmin ?
                                    <Link to='/admin'><button className="navbar-btn">Admin</button></Link>
                                    :
                                    null}

                                <button className="navbar-btn" onClick={this.clearToken}>Logout</button>

                            </div>
                            : null
                        }
                    </ul>
                </nav>
            </>
        );
    }
}

export default Navbar;
