import React, { useState, useRef, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './Header.css';
import logo from '../../assets/tmovie.png';

const headerNav = [
    {
        display: 'Home',
        path: '/'
    },
    {
        display: 'Movies',
        path: '/movie'
    },
    {
        display: 'TV Series',
        path: '/tv'
    },
    {
        display: 'Log In',
        path: '/signin'
    }
];

const Header = () => {

    const { pathname } = useLocation();
    const headerRef = useRef(null);
    const navigate = useNavigate();
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [userName, setUserName] = useState('');

    const active = headerNav.findIndex(e => e.path === pathname);

    /**
     * Lăn chuột xuống một khoảng thì thay đổi navbar
     */
    useEffect(() => {
        const shrinkHeader = () => {
            if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
                headerRef.current.classList.add('shrink');
            } else {
                headerRef.current.classList.remove('shrink');
            }
        }
        window.addEventListener('scroll', shrinkHeader);
        return () => {
            window.removeEventListener('scroll', shrinkHeader);
        };
    }, []);

    useEffect(() => {
        // Kiểm tra trạng thái đăng nhập
        const isAuthenticated = localStorage.getItem('isAuthenticated') === 'true';
        if (isAuthenticated) {
            const user = JSON.parse(localStorage.getItem('loggedInUser'));
            setIsAuthenticated(true);
            setUserName(user?.email);  
        }
    }, [pathname]);

    const handleLogout = () => {
        localStorage.removeItem('isAuthenticated');
        localStorage.removeItem('loggedInUser');
        setIsAuthenticated(false);
        setUserName('');
        navigate('/signin');  
    };

    return (
        <div ref={headerRef} className="header">
            <div className="header__wrap container">
                <div className="logo">
                    <img src={logo} alt="" />
                    <Link to="/">XemPhim</Link>
                </div>
                <ul className="header__nav">
                    {
                        headerNav.map((e, i) => (
                            <li key={i} className={`${i === active ? 'active' : ''}`}>
                                <Link to={e.path}>
                                    {e.display}
                                </Link>
                            </li>
                        ))
                    }
                    {
                        isAuthenticated ? (
                            <>
                                <li className="header__user-info">
                                    <span>Xin chào, {userName}</span>
                                </li>
                                <li>
                                    <button onClick={handleLogout}>Logout</button>
                                </li>
                            </>
                        ) : (
                            <li className="header__signin">
                                {/* <Link to="/signin">Sign In</Link> */}
                            </li>
                        )
                    }
                </ul>
            </div>
        </div>
    );
}

export default Header;