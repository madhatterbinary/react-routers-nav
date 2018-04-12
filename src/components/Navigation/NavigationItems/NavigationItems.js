import React from 'react';
import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems = ( props ) => (
    <ul className='navigation-item'>
        <NavigationItem link="/" exact>ALL</NavigationItem>
        <NavigationItem link="/word">WORD</NavigationItem>
        <NavigationItem link="/excel">EXCEL</NavigationItem>
        <NavigationItem link="/powerpoint">POWERPOINT</NavigationItem>
        <NavigationItem link="/image">IMAGE</NavigationItem>
        <NavigationItem link="/pdf">PDF</NavigationItem>
        <NavigationItem link="/video">VIDEO</NavigationItem>       
    </ul>
);

export default navigationItems;
