import { Link, NavLink, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import style from "./assets/header.module.css";

function Header() {
    const location = useLocation();
    const [isOpen, setIsOpen] = useState(false);
    const Links = [{name: "Home", link: "/"}, 
        {name: "Diseases", link: "/Diseases"},
        {name: "Doctors", link: "/Doctors"},
        {name: "Products", link: "/ProductList"},
        {name: "Contact Us", link: "/ContactUs"},
        {name: "Book Appointment", link: "/Patient_Form"}
    ]

    function toggleNav() {
        setIsOpen(!isOpen);
    }

    useEffect(() => {
        if(isOpen == true){
            toggleNav();
        }
    }, [location.pathname]); 

    return (
        <header className={style.header}>
            <div className={style.headerInner}>
                <div className="container">
                    <div className="inner">
                        <div className="row">
                            <div className="col-lg-3 col-md-3 col-12">
                                <div className={style.burger} onClick={toggleNav}>
                                    <div className={style.line}></div>
                                    <div className={style.line}></div>
                                    <div className={style.line}></div>
                                </div>
                                {/*Start Logo*/}
                                <div className={style.logo}>
                                    <Link to="/"><img src="../img/logo.png" alt="Electro Homeopathic Clinic" /></Link>
                                </div>
                                {/*End Logo*/}
                                {/*Mobile Nav*/}
                                <div className={isOpen ? `${style.mobileNav} ${style.open}` : style.mobileNav}>
                                    <ul id='menu'>
                                        {Links.map((l, i) => {
                                            return <li key={i}><NavLink to={l.link}>{l.name}</NavLink></li>
                                        })}
                                    </ul>
                                </div>
                                {/*End Mobile Nav*/}
                            </div>
                            <div className="col-lg-7 col-md-9 col-12">
                                {/*Main Menu*/}
                                <div className={style.mainMenu}>
                                    <nav className="navigation">
                                        <ul className={`${style.nav} menu`}>
                                            {Links.map((l, i) => {
                                                if(l.name !== "Book Appointment"){
                                                    return (
                                                        <li key={i} className={location.pathname === l.link ? "active" : ""}>
                                                            <NavLink to={l.link}>{l.name} </NavLink>
                                                        </li>
                                                    )
                                                } 
                                            })}
                                        </ul>
                                    </nav>
                                </div>
                                {/*End Main Menu*/}
                            </div>
                            <div className="col-lg-2 col-12">
                                <div className={style.getQuote}>
                                    <Link to="/Patient_Form" className={style.btn}>Book Appointment</Link>
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