import { Link } from 'react-router-dom';

function Header() {
    return (
        <header className="header">
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
                                    <li className="active"><Link to="/">Home <i className="icofont-rounded-down"></i></Link>
                                        <ul className="dropdown">
                                            <li><a href="index.html">Home Page 1</a></li>
                                        </ul>
                                    </li>
                                    <li><Link to="/Diseases">Diseases </Link></li>
                                    <li><Link to="/Doctors">Doctors </Link></li>
                                    <li><Link to="/ProductList">Products </Link></li>
                                    <li><Link to="/ContactUs">Contact Us </Link></li>
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
    </header>
    )
}

export default Header;