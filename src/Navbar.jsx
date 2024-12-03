import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'wouter';

export default function Navbar() {

    const [location] = useLocation();

    const [isNavbarOpened, setNavBarOpen] = useState(false);

    const handleNavButtonClick = () => {
        setNavBarOpen(!isNavbarOpened);
    }

    useEffect(() => {

        const syncNavbar = () => {
            if (window.innerWidth >= 992) {
                setNavBarOpen(true);
            } else {
                setNavBarOpen(false);
            }
        }

        window.addEventListener("resize", syncNavbar);

        return () => {
            window.removeEventListener("resize", syncNavbar);
        }

    }, []);

    const isActiveLink = (url) => {
        if (location == url) {
            return "nav-link active"
        } else {
            return "nav-link";
        }
    }

    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container">
                    <a className="navbar-brand" href="#">GLOZZIO</a>
                    <button
                        className="navbar-toggler"
                        type="button"
                        aria-controls="navbarNav"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                        onClick={handleNavButtonClick}
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className={`collapse navbar-collapse ${isNavbarOpened ? "show" : ""}`} id="navbarNav">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item">
                                <Link className={`nav-link ${location == "/" ? "active" : ""}`} aria-current="page" href="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className={isActiveLink("/products")} href="/products">Products</Link>
                            </li>
                            <li className="nav-item">
                                <Link className={isActiveLink("/register")} href="/register">Register</Link>
                            </li>
                            <li className="nav-item">
                                <Link href="/login" className={`nav-link ${location === '/login' ? 'active' : ''}`}>
                                    Login
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link href="/cart" className={`nav-link ${location === '/cart' ? 'active' : ''}`}>
                                    Cart
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}