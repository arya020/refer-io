import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';
import './AppHeader.css';

class AppHeader extends Component {
    render() {
        return (
                    
            this.props.authenticated ? (
                <header className="app-header">
                <div className="container">
                    <div className="app-branding">
                        <Link to="/referrals" className="app-title">Refer.io</Link>
                    </div>
                </div>
                <div className="app-options">
                <nav className="app-nav">
            <ul>
                <li>
                    <NavLink to="/create-referral">Create a referral</NavLink>
                </li>
                <li>
                    <NavLink to="/profile">Profile</NavLink>
                </li>
                <li>
                    <a onClick={this.props.onLogout}>Logout</a>
                </li>
            </ul>
            </nav>
            </div>
            </header>
        ): (
            <header className="landing-header">
            <div className="container">
                <div className="app-branding">
                    <Link to="/" className="app-title">Refer.io</Link>
                </div>
            </div>
            <div className="app-options">
            <nav className="app-nav">
            <ul>
                <li>
                    <NavLink to="/login">Login</NavLink>        
                </li>
                <li>
                    <NavLink to="/signup">Signup</NavLink>        
                </li>
            </ul>
            </nav>
            </div>
            </header>)

    )}
}

export default AppHeader;