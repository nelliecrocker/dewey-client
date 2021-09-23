import React from 'react'
import * as FaIcons from "react-icons/fa"
import * as AiIcons from "react-icons/ai"
import * as IoIcons from 'react-icons/io5'
import * as GiIcons from 'react-icons/gi'

export const SidebarData = [
    {
        title: 'Home',
        path:'/home',
        icon: <IoIcons.IoHomeOutline />,
        cName: 'nav-text'
    },
    {
        title: 'Profile',
        path:'/user/profile',
        icon: <IoIcons.IoPersonOutline />,
        cName: 'nav-text'
    },
    {
        title: 'Add a Book',
        path:'/book/create',
        icon: <GiIcons.GiBlackBook />,
        cName: 'nav-text'
    },
    {
        title: 'Bookshelf',
        path:'/user/profile',
        icon: <IoIcons.IoLibraryOutline />,
        cName: 'nav-text'
    },
]