import React from 'react';

import { ReactComponent as Logo } from '../../assets/crown.svg'
import { Link } from 'react-router-dom';
import { auth } from '../../firebase/firebase.utils';
import { signOut } from '@firebase/auth';
import { connect } from 'react-redux';

import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';

import './header.styles.scss';

const Header = ({ currentUser, hidden }) => (
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
            <CartIcon />
        </div>
        { hidden ? null : <CartDropdown /> }
    </div>
)

const mapStateToProps = ({ user: { currentUser }, cart: { hidden } }) => ({
    currentUser,
    hidden
}) 

export default connect(mapStateToProps)(Header);