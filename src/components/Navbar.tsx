import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom'
import * as FaIcons from "react-icons/fa"
import * as AiIcons from "react-icons/ai"
import { SidebarData } from './SidebarData'

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
    constructor(props: Props){
        super(props)
        this.state = {
            sidebar: false,
    }
    }

    showSidebar = () => {
        this.setState({sidebar: !this.state.sidebar})
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
                    <ul className="nav-menu-items">
                        <li className='navbar-toggle'><Link to='#'>
                            <AiIcons.AiOutlineClose />
                        </Link></li>
                        {SidebarData.map((item, index) => {
                            return(
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
                    {/* Display Logout based on props */}
                    {this.props.token !== ""
                        ? <button onClick={this.clearToken}>Logout</button>
                        : null
                    }




{/* 

                        <li><Link to='/user/register' className='menu-bars'>Register</Link></li>
                        <li className='navbar-toggle'><Link to='/home'>Home</Link></li>
                        <li><Link to='/user/register' className='menu-bars'>Register</Link></li>

                        <li><Link to='/user/login'>Login</Link></li>
                        <li><Link to='/user/profile'>Profile</Link></li>
                        <li><Link to='/book/create'>Create a Book</Link></li>
                        <li><Link to='/book/update'>Update a Book</Link></li>
                        <li><Link to='/book/bookshelf'>View Bookshelf</Link></li>
                        <li><Link to='/user/profile/create'>Create Profile</Link></li>
                        </ul> */}
                    
                    
                
            </>
        );
    }
}

export default Navbar;