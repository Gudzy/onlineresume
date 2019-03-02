import React from 'react';

import HomeIcon from '@material-ui/icons/Home';
import AccountIcon from '@material-ui/icons/AccountCircle';

import Home from './ui/components/Home/Home';
import About from './ui/components/About/About';

const menuRoutes = [
    {
        name: 'Home',
        path: '/',
        component: <Home/>,
        exact: true,
        icon: <HomeIcon/>
    },
    {
        name: 'About',
        path: '/about',
        component: <About/>,
        exact: false,
        icon: <AccountIcon />,
    },
];

export default menuRoutes;