import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as  IconName  from "react-icons/ti";

export const SidebarData = [
    {
        title:'Home',
        path:'/',
        icon: <AiIcons.AiFillHome/>,
        cName: 'nav-text'
    },
    {
        title:'Create Types',
        path:'/types',
        icon: <IconName.TiGift/>,
        cName: 'nav-text'
    },
    {
        title:'Create Status',
        path:'/status',
        icon: <IconName.TiArrowLoop/>,
        cName: 'nav-text'
    },
    {
        title:'Register Tags',
        path:'/tagReg',
        icon: <IconName.TiTag/>,
        cName: 'nav-text'
    },
    {
        title:'Create Resource',
        path:'/resource',
        icon: <IconName.TiShoppingCart/>,
        cName: 'nav-text'
    },
    {
        title:'Add Tag Value',
        path:'/tagValue',
        icon: <IconName.TiTags/>,
        cName: 'nav-text'
    }
]