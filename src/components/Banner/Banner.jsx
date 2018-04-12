import React from 'react';
import Logo from '../Logo/Logo';
import SearchBox from '../../containers/SearchBox/SearchBox';

const Banner = (props) => (
    <section id="banner" >
        <div className="inner">

            <header>
                <Logo />
                <h1>
                    MCL EU Toolkit
                </h1>
            </header>
            <footer>
            <SearchBox />
            </footer>
    </div>
    </section>
);

export default Banner;
