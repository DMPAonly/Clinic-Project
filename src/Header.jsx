import { Link, NavLink, useLocation } from 'react-router-dom';
import { useEffect } from 'react';

function Header() {
    const location = useLocation();

    useEffect(() => {
    // Destroy previous menu if exists
    if ($('.slicknav_menu').length > 0) {
      $('.slicknav_menu').remove();
    }

    // Re-initialize SlickNav
    $('#menu').slicknav({
      prependTo: ".mobile-nav",
      duration: 300,
      closeOnClick: true,
    });
  }, [location.pathname]); // Runs whenever the route changes

    return (
        <>
        <style>
            {`
                .btn {
                    margin-top: 13px;
                    background-color: #47ab14;
                    border: none;
                    border-radius: 6px;
                    padding: 0.5rem 1rem;
                    font-size: 0.95rem;
                    color: white;
                    cursor: pointer;
                    transition: background-color 0.3s ease;
                }
                .btn:hover {
                    background-color: #47ab14;
                    color: #ffffff;
                }
            `}
        </style>
        <header className="header">
            <div className="header-inner">
                <div className="container">
                    <div className="inner">
                        <div className="row">
                            <div className="col-lg-3 col-md-3 col-12">
                                {/*Start Logo*/}
                                <div className="logo">
                                    <Link to="/"><img src="../img/logo.png" alt="#" /></Link>
                                </div>
                                {/*End Logo*/}
                                {/*Mobile Nav*/}
                                <div className="mobile-nav">
                                    <ul id='menu'>
                                        <li><NavLink to="/">Home </NavLink></li>
                                        <li><NavLink to="/Diseases">Diseases </NavLink></li>
                                        <li><NavLink to="/Doctors">Doctors </NavLink></li>
                                        <li><NavLink to="/ProductList">Products </NavLink></li>
                                        <li><NavLink to="/ContactUs">Contact Us </NavLink></li>
                                        <li><NavLink to="/Patient_Form">Book Appointment</NavLink></li>
                                    </ul>
                                </div>
                                {/*End Mobile Nav*/}
                            </div>
                            <div className="col-lg-7 col-md-9 col-12">
                                {/*Main Menu*/}
                                <div className="main-menu">
                                    <nav className="navigation">
                                        <ul className="nav menu">
                                            <li className={location.pathname === "/" ? "active" : ""}><NavLink to="/">Home {/*<i className="icofont-rounded-down"></i>*/}</NavLink></li>
                                            <li className={location.pathname === "/Diseases" ? "active" : ""}><NavLink to="/Diseases">Diseases </NavLink></li>
                                            <li className={location.pathname === "/Doctors" ? "active" : ""}><NavLink to="/Doctors">Doctors </NavLink></li>
                                            <li className={location.pathname === "/ProductList" ? "active" : ""}><NavLink to="/ProductList">Products </NavLink></li>
                                            <li className={location.pathname === "/ContactUs" ? "active" : ""}><NavLink to="/ContactUs">Contact Us </NavLink></li>
                                        </ul>
                                    </nav>
                                </div>
                                {/*End Main Menu*/}
                            </div>
                            <div className="col-lg-2 col-12">
                                <div className="get-quote">
                                    <Link to="/Patient_Form" className="btn">Book Appointment</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>    
        </header>
        </>
    )
}

export default Header;