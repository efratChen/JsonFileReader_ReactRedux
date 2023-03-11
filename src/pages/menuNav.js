import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../styles/images/logo.jpg';
import { Menu } from 'antd';
import { HomeTwoTone } from '@ant-design/icons';

const MenuNav = () => {

    return (
        <div>
            <Link to="/"><img src={logo} width="20%" height="20%" /></Link>
            <Menu mode="horizontal">
                <Menu.Item key="home">
                    <Link to="/"><HomeTwoTone />Back</Link>
                </Menu.Item>
                <Menu.Item key="table">
                    <Link to="/table">Events table</Link>
                </Menu.Item>
            </Menu>
        </div>
    );
};

export default MenuNav;