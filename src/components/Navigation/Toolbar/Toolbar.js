import React from 'react';

import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle';

const toolbar = ( props ) => (
    <div>
        <header className='toolbar'>
            <DrawerToggle clicked={props.drawerToggleClicked} />
            <div className='extraitem'>
                <span id="adm-text">Welcome. ADMIN</span>
                <span id="logout-btn">LOGOUT</span>
            </div>
        </header>
    </div>
);

export default toolbar;
