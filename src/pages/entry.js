import React from 'react';
import { SmileTwoTone } from '@ant-design/icons';
import MenuNav from './menuNav';
import logo from '../../styles/images/logo.jpg';

const Entry = () => {
    return (
        <>
            <MenuNav />
            <h1>Events system</h1>
            <div className="d-flex-center">
                <img src={logo} width={450}></img>
                <h2>React <b>events</b> system </h2>
            </div>
            <section>
                <h2>Wellcome to our new event system </h2>
                <h1>About us</h1>
                <p>display data from JSON / XML / TXT file</p>
                <h3>enjoy our new site <SmileTwoTone />
                </h3>
            </section>
        </>
    );
}
export default Entry;