import React from 'react';

import './header.styles.scss';

import { ReactComponent as Logo } from '../../assets/crown.svg'
import { Link } from 'react-router-dom';

const Header = () => (
    <div className='header'>
        <Link className='logo-container' to='/'>
            <Logo className='logo' />
        </Link>
        <div className='options'>
            <Link className='shop' to='shop'>Shop</Link>
            <Link className='option' to='option'>Contact</Link>
            <Link className='signin' to='signin'>Sign In</Link>
        </div>
    </div>
)

export default Header