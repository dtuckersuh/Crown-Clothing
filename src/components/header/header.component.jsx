import React from 'react';

import './header.styles.scss';

import { ReactComponent as Logo } from '../../assets/crown.svg'
import { Link } from 'react-router-dom';
import { auth } from '../../firebase/firebase.utils';
import { signOut } from '@firebase/auth';

const Header = ({ currentUser }) => (
    <div className='header'>
        <Link className='logo-container' to='/'>
            <Logo className='logo' />
        </Link>
        <div className='options'>
            <Link className='shop' to='shop'>Shop</Link>
            <Link className='option' to='option'>Contact</Link>
            {
                currentUser ?
                (<div className='option' onClick={() => signOut(auth)}>
                    Sign Out
                </div>)
                :
                (<Link className='option' to='signin'>
                    Sign In
                </Link>)
            }
        </div>
    </div>
)

export default Header