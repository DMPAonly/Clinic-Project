import { Link, NavLink, useLocation } from 'react-router-dom';

function Header() {
    const location = useLocation();

    return (
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
                                <div className="mobile-nav"></div>
                                {/*End Mobile Nav*/}
                            </div>
                            <div className="col-lg-7 col-md-9 col-12">
                                {/*Main Menu*/}
                                <div className="main-menu">
                                    <nav className="navigation">
                                        <ul className="nav menu">
                                            <li className={location.pathname === "/" ? "active" : ""}><NavLink to="/">Home <i className="icofont-rounded-down"></i></NavLink>
                                                <ul className="dropdown">
                                                    <li><a href="index.html">Home Page 1</a></li>
                                                </ul>
                                            </li>
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
                                    <a href="appointment.html" className="btn">Book Appointment</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>    
        </header>
    )
}

export default Header;