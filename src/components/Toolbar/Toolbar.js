import React from 'react';

const toolbar = props => (
    <header className='toolbar'>
        <nav className='toolbar__navigation'>
            <div></div>
            <div className='toolbar__logo'><a href="/">F I T F L I X</a></div>
            <div className='toolbar_navigation-items'>
                <ul>
                <li><a href="/">Strength training</a></li>
                <li><a href="/">Flexability training</a></li>
                <li><a href="/">Endurance training</a></li>
                </ul>
            </div>
        </nav>
    </header>
);

export default toolbar;
//to create nav bar//